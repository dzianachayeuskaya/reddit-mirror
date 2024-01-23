import { useState, useEffect } from 'react';
import axios from 'axios';

interface ICommentChildFromApi {
  data: {
    author: string;
    body: string;
    created: number;
    id: string;
    replies: { data: { children: ICommentChildFromApi[] } } | '' | undefined;
  };
  kind: string;
}

export interface IFormattedCommentData {
  author: string;
  body: string;
  created: number;
  id: string;
  replies: null | (IFormattedCommentData | null)[];
}

export function useCommentsData(postId: string) {
  const [comments, setComments] = useState<
    (IFormattedCommentData | null)[] | null
  >(null);

  useEffect(() => {
    axios
      .get(`http://oauth.reddit.com/comments/${postId}.json`)
      .then((resp) => {
        const commentsDataChildrenFromApi: ICommentChildFromApi[] =
          resp.data[1].data.children;

        function getFormattedComments(
          children: ICommentChildFromApi[]
        ): (IFormattedCommentData | null)[] {
          return children.map((child) => {
            const {
              kind,
              data: { author, body, created, id, replies },
            } = child;
            return kind !== 'more'
              ? {
                  author: author,
                  body: body,
                  created: created,
                  id: id,
                  replies:
                    replies === '' || !replies
                      ? null
                      : getFormattedComments(replies.data.children),
                }
              : null;
          });
        }

        setComments(getFormattedComments(commentsDataChildrenFromApi));
      })
      .catch((err) => console.log('err', err));
  }, []);

  return [comments];
}
