import React from 'react';
import { Avatar } from './Avatar';
import styles from './userLink.css';
import { Username } from './Username';

interface IUserLinkProps {
  avatar: string;
  username: string;
}

export function UserLink({ avatar, username }: IUserLinkProps) {
  return (
    <div className={styles.userLink}>
      <Avatar avatar={avatar} />
      <Username username={username} />
    </div>
  );
}
