import React from 'react';
import { EColor, Text } from '../../../../Text';
import styles from './menuitemslist.css';
import classNames from 'classnames';
import { EIcons, Icon } from '../../../../Icon';

interface IMenuItemsList {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsList) {
  return (
    <ul className={styles.menuItemsList}>
      <li
        className={classNames(
          styles.menuItem,
          styles.noneItem,
          styles.visibleItem
        )}>
        <Icon name={EIcons.comment} />
        <Text size={12} color={EColor.grey99}>
          Комментарии
        </Text>
      </li>

      <div
        className={classNames(
          styles.divider,
          styles.noneItem,
          styles.visibleItem
        )}
      />

      <li
        className={classNames(
          styles.menuItem,
          styles.noneItem,
          styles.visibleItem
        )}>
        <Icon name={EIcons.share} />
        <Text size={12} color={EColor.grey99}>
          Поделиться
        </Text>
      </li>

      <div
        className={classNames(
          styles.divider,
          styles.noneItem,
          styles.visibleItem
        )}
      />

      <li className={styles.menuItem}>
        <Icon name={EIcons.block} />
        <Text size={12} color={EColor.grey99}>
          Скрыть
        </Text>
      </li>

      <div
        className={classNames(
          styles.divider,
          styles.noneItem,
          styles.visibleItem
        )}
      />

      <li
        className={classNames(
          styles.menuItem,
          styles.noneItem,
          styles.visibleItem
        )}>
        <Icon name={EIcons.save} />
        <Text size={12} color={EColor.grey99}>
          Сохранить
        </Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icon name={EIcons.warning} />
        <Text size={12} color={EColor.grey99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
