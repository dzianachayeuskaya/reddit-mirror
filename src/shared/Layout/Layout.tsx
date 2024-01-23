import React, { useEffect } from 'react';
import styles from './layout.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/auth')
      navigate('/posts');
  }, [location]);

  return (
    <div className={styles.layout}>
      {children}
      <Outlet />
    </div>
  );
}
