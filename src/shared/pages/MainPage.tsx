import React from 'react';
import { Header } from '../Header';
import { Content } from '../Content';
import { Outlet } from 'react-router-dom';

export function MainPage() {
  return (
    <>
      <Header />

      <Content>
        <Outlet />
      </Content>
    </>
  );
}
