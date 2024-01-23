import React from 'react';
import styles from './preview.css';
import { IPreview } from '../../CardsList';

interface IPreviewProps {
  preview: IPreview;
}

export function Preview({ preview }: IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={
          preview
            ? preview.images?.[0].source.url.replace(/(\&amp\;)/g, '&')
            : 'https://i.pinimg.com/originals/45/4f/22/454f22154f8f43bd6e0e22f23e613e38.jpg'
        }
        alt='preview'
        referrerPolicy='no-referrer'
      />
    </div>
  );
}
