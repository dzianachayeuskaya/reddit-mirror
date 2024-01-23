import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';
import {
  CommentFormContainer,
  ECommentFormPlace,
} from './CommentFormContainer';
import { CommentBlock } from './CommentBlock';
import { PostCard } from './PostCard';
import { EIcons, Icon } from '../../../Icon';
import { IPostObject } from '../../CardsList';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';

export function Post() {
  const params = useParams();
  const postsData = useSelector<RootState, IPostObject[]>(
    (state) => state.posts.data.children
  );
  const currentPost = postsData.find((post) => post.data.id === params.id);

  const ref = useRef<HTMLDivElement>(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        setShouldRedirect(true);
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  useEffect(() => {
    if (shouldRedirect) navigate('/posts');
  }, [shouldRedirect]);

  const node = document.getElementById('modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <button
        className={styles.close}
        onClick={() => setShouldRedirect(true)}
        aria-label='Close'>
        <Icon name={EIcons.close} />
      </button>
      {!currentPost && (
        <h2 style={{ textAlign: 'center', margin: '2rem 0 0' }}>
          Post not found
        </h2>
      )}
      {currentPost && (
        <>
          <PostCard postData={currentPost.data} />
          <CommentFormContainer place={ECommentFormPlace.Comment} />
          <CommentBlock postId={currentPost.data.id} />
        </>
      )}
    </div>,
    node
  );
}
