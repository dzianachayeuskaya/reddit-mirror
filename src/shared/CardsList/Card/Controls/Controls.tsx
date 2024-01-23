import React from 'react';
import { Actions } from './Actions';
import { CommentButton } from './CommentButton';
import styles from './controls.css';
import { EKarmaCounter, KarmaCounter } from './KarmaCounter';

interface IControlsProps {
  postId: string;
  postScore: number;
}

export function Controls({ postId, postScore }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter score={postScore} place={EKarmaCounter.Content} />
      <CommentButton />
      <Actions />
    </div>
  );
}
