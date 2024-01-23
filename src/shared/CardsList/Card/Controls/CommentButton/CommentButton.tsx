import React from 'react';
import styles from './commentButton.css';
import { CommentsButton } from './CommentsButton';

export function CommentButton() {
  return (
    <div className={styles.commentsButton}>
      <CommentsButton />
      <span className={styles.commentsNumber}>13</span></div>
  );
}
