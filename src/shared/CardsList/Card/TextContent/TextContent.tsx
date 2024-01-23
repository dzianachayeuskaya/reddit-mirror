import React from 'react';
import { EMetaDataPlace, MetaData } from './MetaData';
import { Title } from './Title';
import styles from './textContent.css';

export interface ITextContentProps {
  title: string;
  icon_img: string;
  name: string;
  date: number;
  postId: string;
}

export function TextContent({
  title,
  icon_img,
  name,
  date,
  postId,
}: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <MetaData
        place={EMetaDataPlace.Content}
        avatar={icon_img}
        username={name}
        date={date}
      />
      <Title title={title} postId={postId} />
    </div>
  );
}
