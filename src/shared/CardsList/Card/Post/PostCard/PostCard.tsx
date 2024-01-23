import React from 'react';
import { EMetaDataPlace, MetaData } from '../../TextContent/MetaData';
import styles from './postcard.css';
import { EKarmaCounter, KarmaCounter } from '../../Controls/KarmaCounter';
import { Text } from '../../../../Text';
import { PostActionsList } from './PostActionsList';
import { Preview } from '../../Preview';
import { IPostData } from '../../../CardsList';

export interface IPostCardProps {
  postData: IPostData;
}

export function PostCard({ postData }: IPostCardProps) {
  const { score, title, sr_detail, author, created, selftext, preview } =
    postData;
  return (
    <div>
      <div className={styles.header}>
        <KarmaCounter score={score} place={EKarmaCounter.Modal} />
        <div className={styles.textContent}>
          <h2 className={styles.title}>{title}</h2>
          <MetaData
            place={EMetaDataPlace.Modal}
            avatar={sr_detail.icon_img}
            username={author}
            date={created}
          />
        </div>
      </div>
      <div className={styles.postContent}>
        {selftext ? (
          <Text size={14} mobileSize={12}>
            {selftext}
          </Text>
        ) : (
          <div className={styles.preview}>
            <Preview preview={preview} />
          </div>
        )}
      </div>
      <PostActionsList postId={postData.id} />
    </div>
  );
}
