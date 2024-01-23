import React from 'react';
import styles from '../textContent.css';
import { UserLink } from './UserLink';
import { formatDate } from '../../../../utils/js/formatDate';
import classNames from 'classnames';

export enum EMetaDataPlace {
  Content = 'Content',
  Modal = 'Modal',
  Comment = 'Comment',
}

interface IMetaDataProps {
  place: EMetaDataPlace;
  avatar: string;
  username: string;
  date: number;
}

export function MetaData({ place, avatar, username, date }: IMetaDataProps) {
  return (
    <div className={classNames(styles[`metaData${place}`])}>
      <UserLink avatar={avatar} username={username} />
      <span className={styles.createdAt}>
        {place !== EMetaDataPlace.Comment && <span className={styles.publishedLabel}>опубликовано</span>}
        {formatDate(date)} часов назад</span>
    </div>
  );
}
