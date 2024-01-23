import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../shared/store/reducer';
import { meRequestAsync } from '../shared/store/me/actions';

export interface IUserData {
  name: string;
  iconImg: string;
}

export function useUserData() {
  const token = useSelector<RootState, string>((state) => state.token);

  const data = useSelector<RootState, IUserData | null>(
    (state) => state.me.data
  );
  const loading = useSelector<RootState, boolean>((state) => state.me.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && token !== 'undefined') {
      dispatch(meRequestAsync());
    }
  }, [token]);

  return { data, loading };
}
