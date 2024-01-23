import React from 'react';
import styles from './userblock.css';
import 'dotenv/config';
import { Break } from '../../../Break';
import { EColor, Text } from '../../../Text';
import { EIcons, Icon } from '../../../Icon';
import { useUserData } from '../../../../hooks/useUserData';

export function UserBlock() {
  const { data, loading } = useUserData();
  return (
    <a
      className={styles.userBox}
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=${process.env.HOST}/auth&duration=permanent&scope=read submit identity`}>
      <div className={styles.avatarBox}>
        {data ? (
          <img
            src={data.iconImg}
            alt='user avatar'
            className={styles.avatarImage}
          />
        ) : (
          <Icon name={EIcons.iconAnon} />
        )}
      </div>

      <div className={styles.username}>
        <Break size={12} />
        {loading ? (
          <Text size={20} color={EColor.grey99}>
            Загрузка...
          </Text>
        ) : (
          <Text size={20} color={data ? EColor.black : EColor.grey99}>
            {data ? data.name : 'Аноним'}
          </Text>
        )}
      </div>
    </a>
  );
}
