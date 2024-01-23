import React, { useEffect, useState } from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './shared/store/reducer';
import thunk from 'redux-thunk';
import { saveToken } from './shared/store/actions';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Post } from './shared/CardsList/Card/Post';
import { MainPage } from './shared/pages/MainPage';
import { NotFound } from './shared/pages/NotFound';
import { CardsList } from './shared/CardsList';

const store = configureStore({ reducer: rootReducer, middleware: [thunk] });

function AppComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    store.dispatch(saveToken() as any);
    setMounted(true);
  }, []);

  return (
    <Provider store={store}>
      {mounted && (
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route element={<MainPage />}>
                <Route path='posts' element={<CardsList />}>
                  <Route path=':id' element={<Post />} />
                </Route>
              </Route>
              <Route path='*' element={<NotFound />} />
            </Route>
            <Route path='/auth' element={<Layout />} />
          </Routes>
        </Router>
      )}
    </Provider>
  );
}
export const App = hot(() => <AppComponent />);
