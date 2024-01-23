import React from 'react';
import styles from '../userLink.css';

interface IUsernameProps {
  username: string;
}

export function Username({ username }: IUsernameProps) {
  return (
    <a href="#user-url" className={styles.username}>{username}
    </a>
  );
}
