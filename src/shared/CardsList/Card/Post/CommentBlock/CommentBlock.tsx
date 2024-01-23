import React, { useEffect, useState } from 'react';
import styles from './commentBlock.css';
import { EColor, Text } from '../../../../Text';
import { IFormattedCommentData, useCommentsData } from '../../../../../hooks/useCommentsData';
import { CommentList } from './CommentList';

interface ICommentBlock {
  postId: string;
}

export function CommentBlock({ postId }: ICommentBlock) {
  const [commentsData, setCommentsData] = useState<(IFormattedCommentData | null)[]>([])

  const [comments] = useCommentsData(postId)

  useEffect(() => {
    if (comments) setCommentsData(comments);
    return () => {
      setCommentsData([]);
    };
  }, [comments]);

  return (
    <>
      <div className={styles.sortBlock}>
        <Text size={14} color={EColor.grey99} >
          Сортировать по:
        </Text>
        <select className={styles.select}>
          <option value="Лучшие">Лучшие</option></select>
      </div>

      {commentsData && <CommentList data={commentsData} />}
    </>
  )
}
