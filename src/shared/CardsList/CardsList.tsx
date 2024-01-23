import React, { useEffect, useRef, useState } from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { Preloader } from '../Preloader';
import { PostsState } from '../store/posts/reducer';
import { postsRequestAsync } from '../store/posts/actions';
import { Outlet } from 'react-router-dom';

export interface IPostObject {
  data: IPostData;
}
export interface IPreview {
  images?: IImg[];
}

interface IImg {
  source: {
    url: string;
  };
}

export interface IPostData {
  author: string;
  created: number;
  selftext: string;
  id: string;
  preview: IPreview;
  sr_detail: {
    icon_img: string;
  };
  title: string;
  score: number;
}

export function CardsList() {
  const { loading, loadCount, data, error } = useSelector<
    RootState,
    PostsState
  >((state) => state.posts);
  const [stopLoading, setStopLoading] = useState(false);

  const bottomOfList = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting && !stopLoading && !loading) {
          dispatch(postsRequestAsync());
        }
      },
      {
        rootMargin: '10px',
      }
    );

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) observer.unobserve(bottomOfList.current);
    };
  }, [bottomOfList.current, stopLoading, loading]);

  useEffect(() => {
    if (loadCount && loadCount % 2 === 0) {
      setStopLoading(true);
    } else setStopLoading(false);
  }, [loadCount]);

  const handleClick = () => {
    setStopLoading(false);
  };

  return (
    <>
      <ul className={styles.cardsList}>
        {data.children.length === 0 && !loading && !error && (
          <div role='alert'>Posts not found</div>
        )}
        {data.children.map((post) => (
          <Card postData={post.data} key={post.data.id} />
        ))}
        {stopLoading && data.children.length !== 0 && (
          <button
            className='primaryButton'
            style={{ margin: '0 auto' }}
            onClick={handleClick}>
            Загрузить еще
          </button>
        )}
        <div ref={bottomOfList} />
        {loading && !stopLoading && (
          <div role='alert'>
            <Preloader />
          </div>
        )}
        {error && <div role='alert'>{error}</div>}
      </ul>
      <Outlet />
    </>
  );
}
