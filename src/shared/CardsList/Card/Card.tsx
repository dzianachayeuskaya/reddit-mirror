import React from 'react';
import styles from './card.css';
import { Preview } from './Preview';
import { TextContent } from './TextContent';
import { Menu } from './Menu';
import { Controls } from './Controls';
import { IPostData } from '../CardsList';

export interface ICardProps {
  postData: IPostData;
}

export function Card({ postData }: ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent
        title={postData.title}
        icon_img={postData.sr_detail.icon_img}
        name={postData.author}
        date={postData.created}
        postId={postData.id}
      />
      <Preview preview={postData.preview} />
      <Menu postId={postData.id} />
      <Controls postId={postData.id} postScore={postData.score} />
    </li>
  );
}
