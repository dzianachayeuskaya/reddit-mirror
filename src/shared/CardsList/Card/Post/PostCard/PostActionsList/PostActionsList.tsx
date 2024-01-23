import React from 'react';
import styles from './postactionslist.css';
import { EIcons, Icon } from '../../../../../Icon';
import { EColor, Text } from '../../../../../Text';
import classNames from 'classnames';
import { formatComments } from '../../../../../utils/js/formatComments';

interface IPostActionsList {
  postId: string;
}

export function PostActionsList({ postId }: IPostActionsList) {
  return (
    <div className={styles.postActionItemsList}>
      <button className={classNames(styles.postActionItem, styles.noneItem, styles.visibleItem)} onClick={() => console.log(postId)}>
        <Icon name={EIcons.comment} />
        <Text size={12} color={EColor.grey99}>{formatComments(2)}</Text>
      </button>

      <button className={classNames(styles.postActionItem, styles.noneItem, styles.visibleItem)} onClick={() => console.log(postId)}>
        <Icon name={EIcons.share} />
        <Text size={12} color={EColor.grey99}>Поделиться</Text>
      </button>

      <button className={styles.postActionItem} onClick={() => console.log(postId)}>
        <Icon name={EIcons.block} />
        <Text size={12} color={EColor.grey99}>Скрыть</Text>
      </button>

      <button className={classNames(styles.postActionItem, styles.noneItem, styles.visibleItem)} onClick={() => console.log(postId)}>
        <Icon name={EIcons.save} />
        <Text size={12} color={EColor.grey99}>Сохранить</Text>
      </button>

      <button className={styles.postActionItem}>
        <Icon name={EIcons.warning} />
        <Text size={12} color={EColor.grey99}>Пожаловаться</Text>
      </button>
    </div>
  );
}
