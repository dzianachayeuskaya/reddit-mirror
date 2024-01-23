import React, { useState } from 'react';
import styles from './commentitem.css';
import { EMetaDataPlace, MetaData } from '../../../../TextContent/MetaData';
import { EColor, Text } from '../../../../../../Text';
import { EIcons, Icon } from '../../../../../../Icon';
import { EKarmaCounter, KarmaCounter } from '../../../../Controls/KarmaCounter';
import classNames from 'classnames';
import { Break } from '../../../../../../Break';
import { CommentList } from '../CommentList';
import { IFormattedCommentData } from '../../../../../../../hooks/useCommentsData';
import {
  CommentFormContainer,
  ECommentFormPlace,
} from '../../../CommentFormContainer';

export function CommentItem({
  id,
  author,
  created,
  body,
  replies,
}: IFormattedCommentData) {
  const [isActiveToAnswer, setIsActiveToAnswer] = useState(false);

  return (
    <li className={styles.commentItemWrapper}>
      <div className={styles.commentItemBody}>
        <KarmaCounter score={null} place={EKarmaCounter.Modal} />
        <div className={styles.commentItem}>
          <MetaData
            place={EMetaDataPlace.Comment}
            avatar='https://b.thumbs.redditmedia.com/LSHrisQApf1H5F8nWShTx3_KjTOMc3R_ss3kx3XAyXQ.png'
            username={author}
            date={created}
          />

          <Break size={12} top />
          <Text size={14}>{body}</Text>

          <Break size={12} top />
          <div className={styles.buttonList}>
            <button
              className={classNames(styles.buttonItem, styles.visibleItem)}
              onClick={() => {
                setIsActiveToAnswer(!isActiveToAnswer);
              }}>
              <Icon name={EIcons.comment} />
              <Text size={14} color={EColor.grey99}>
                Ответить
              </Text>
            </button>
            <button className={classNames(styles.buttonItem, styles.noneItem)}>
              <Icon name={EIcons.share} />
              <Text size={14} color={EColor.grey99}>
                Поделиться
              </Text>
            </button>
            <button className={classNames(styles.buttonItem, styles.noneItem)}>
              <Icon name={EIcons.warning} />
              <Text size={14} color={EColor.grey99}>
                Пожаловаться
              </Text>
            </button>
          </div>

          {isActiveToAnswer && (
            <>
              <CommentFormContainer
                place={ECommentFormPlace.Answer}
                commentAuthor={author}
              />
            </>
          )}
        </div>
      </div>
      {replies && <CommentList data={replies} />}
    </li>
  );
}
