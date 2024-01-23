import React from 'react';
import styles from './commentList.css';
import { CommentItem } from './CommentItem';
import { IFormattedCommentData } from '../../../../../../hooks/useCommentsData';

interface ICommentList {
  data: (IFormattedCommentData | null)[]
}

export function CommentList({ data }: ICommentList) {
  return <ul className={styles.commentList}>
    {data.map(commentData =>
      commentData && <CommentItem id={commentData.id} author={commentData.author}
        created={commentData.created} body={commentData.body}
        replies={commentData.replies} key={commentData.id} />)
    }
  </ul>
}