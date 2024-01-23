import React from 'react';
import styles from './preloader.css';

export function Preloader() {
  return (
    <svg className={styles.elem} viewBox='0 0 5 5'>
      <circle className={styles.circle} cx='2.5' cy='2.5' r='2' />
    </svg>
  );
}
