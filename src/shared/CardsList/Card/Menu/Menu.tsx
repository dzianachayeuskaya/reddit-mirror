import React from 'react';
import styles from './menu.css';
import { Dropdown } from './Dropdown';
import { EColor, Text } from '../../../Text';
import { MenuItemsList } from './MenuItemsList';
import classNames from 'classnames';
import { EIcons, Icon } from '../../../Icon';

interface IMenuProps {
  postId: string;
}

export function Menu({ postId }: IMenuProps) {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={<button className={styles.menuButton}>
          <Icon name={EIcons.menu} />
        </button>}
      >
        <div className={styles.dropdown}>
          <MenuItemsList postId={postId} />

          <button className={classNames(styles.closeButton, styles.noneCloseButton)}>
            <Text size={14} mobileSize={12} color={EColor.grey66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}

