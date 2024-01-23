import React, { ChangeEvent, useEffect, useRef } from 'react';
import styles from './commentForm.css';
import { EColor, Text } from '../../../../Text';
import { EIcons, Icon } from '../../../../Icon';
import { IUserData } from '../../../../../hooks/useUserData';
import { ECommentFormPlace } from '../CommentFormContainer';
import { ErrorMessage, Form, FormikProps } from 'formik';

interface ICommentFormProps {
  props: FormikProps<{
    comment: string;
  }>;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  user: IUserData | null;
  place: ECommentFormPlace;
}

export function CommentForm({
  props,
  onChange,
  user,
  place,
}: ICommentFormProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  function handleClick() {
    textAreaRef.current?.focus();
  }

  useEffect(() => {
    if (place === ECommentFormPlace.Answer && user) {
      textAreaRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    user
      ? textAreaRef.current?.removeAttribute('disabled')
      : textAreaRef.current?.setAttribute('disabled', 'disabled');
  }, [user]);

  return (
    <Form className={styles.form}>
      <div className={styles.wrapper}>
        <textarea
          name='comment'
          className={styles.input}
          value={props.values.comment}
          onChange={onChange}
          ref={textAreaRef}
        />
        {!props.values.comment && (
          <div className={styles.placeholder} onClick={handleClick}>
            {user ? (
              <>
                <Text size={16} mobileSize={14} color={EColor.orange}>
                  {user.name},{' '}
                </Text>
                <Text size={16} mobileSize={14} color={EColor.grey99}>
                  оставьте ваш комментарий
                </Text>
              </>
            ) : (
              <Text size={16} mobileSize={14} color={EColor.grey99}>
                Чтобы оставить комментарий, авторизуйтесь
              </Text>
            )}
          </div>
        )}
      </div>
      <div className={styles.footer}>
        <div className={styles.buttonList}>
          <button className={styles.buttonItem} aria-label='Arrows'>
            <Icon name={EIcons.arrows} />
          </button>
          <button className={styles.buttonItem} aria-label='Attach a picture'>
            <Icon name={EIcons.img} />
          </button>
          <button className={styles.buttonItem} aria-label='Attach a file'>
            <Icon name={EIcons.file} />
          </button>
          <button className={styles.buttonItem} aria-label='Download'>
            <Icon name={EIcons.download} />
          </button>
          <button className={styles.buttonItem} aria-label='Contact'>
            <Icon name={EIcons.contact} />
          </button>
          <button className={styles.buttonItem} aria-label='Repeat'>
            <Icon name={EIcons.repeat} />
          </button>
          <button className={styles.buttonItem} aria-label='Connect'>
            <Icon name={EIcons.connect} />
          </button>
          <button className={styles.buttonItem} aria-label='Audio'>
            <Icon name={EIcons.audio} />
          </button>
          <button className={styles.buttonItem} aria-label='Message'>
            <Icon name={EIcons.message} />
          </button>
          <button className={styles.buttonItem} aria-label='Edit'>
            <Icon name={EIcons.edit} />
          </button>
          <button className={styles.buttonItem} aria-label='A'>
            <Icon name={EIcons.aIcon} />
          </button>
          <button className={styles.buttonItem} aria-label='Pdf'>
            <Icon name={EIcons.pdf} />
          </button>
        </div>
        <button type='submit' className='primaryButton'>
          Комментировать
        </button>
      </div>
      <ErrorMessage name='comment' />
    </Form>
  );
}
