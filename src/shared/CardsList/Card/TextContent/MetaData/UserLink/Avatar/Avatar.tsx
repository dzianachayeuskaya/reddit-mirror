import React from 'react';
import styles from '../userLink.css';

interface IAvatarProps {
  avatar: string;
}

export function Avatar({ avatar }: IAvatarProps) {
  return (
    <img
      className={styles.avatar}
      src={avatar || 'https://b.thumbs.redditmedia.com/LSHrisQApf1H5F8nWShTx3_KjTOMc3R_ss3kx3XAyXQ.png'}
      alt="avatar"
    />
  );
}
