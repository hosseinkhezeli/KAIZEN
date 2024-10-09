import { IUser } from '@/types/user/user_types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface UserState {
  token?: string;
  user: IUser | null;
  isLoggedIn: boolean;
  loading: boolean;
  setToken: (token?: string) => void;
  setUserInfo: (user: IUser | null) => void;
  setLogout: () => void;
  initialize: () => void;
}

const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        token: undefined,
        user: null,
        isLoggedIn: false,
        loading: true,
        setToken: (token) => {
          set(() => ({
            token: token,
            isLoggedIn: Boolean(token),
            loading: false,
          }));
        },
        setUserInfo: (user) => {
          set({ user });
        },
        setLogout: () => {
          set({
            user: null,
            token: undefined,
            isLoggedIn: false,
            loading: false,
          });
        },
        initialize: () => {
          set({ loading: false });
        },
      }),
      {
        name: 'user-storage',
      },
    ),
  ),
);

export default useUserStore;
