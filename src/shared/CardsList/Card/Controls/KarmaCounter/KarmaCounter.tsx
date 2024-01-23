import React from 'react';
import styles from './karmaCounter.css';
export enum EKarmaCounter {
  Content = 'Content',
  Modal = 'Modal',
}

interface IKarmaCounter {
  score: number | null;
  place: EKarmaCounter
}

export function KarmaCounter({ score, place }: IKarmaCounter) {
  return (
    <div className={place === EKarmaCounter.Content ? styles.karmaCounter : styles.modalKarmaCounter}>
      <button className={styles.up}>
        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
        </svg>
      </button>
      {score ? <span className={styles.karmaValue}>{score}</span> : null}
      <button className={styles.down}>
        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
        </svg>
      </button>
    </div>
  );
}
