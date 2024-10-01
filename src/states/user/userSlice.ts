import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { IUser } from '@/types/user/user_types';

// Define the UserState interface
export interface UserState {
  token?: string; // Optional token
  user: IUser | null; // User can be IUser type or null
  isLoggedIn: boolean; // Boolean indicating login status
  loading: boolean; // Loading state for initialization
  setToken: (token?: string) => void; // Function to set the token
  setUserInfo: (user: IUser | null) => void; // Function to set user info
  setLogout: () => void; // Function to log out
  initialize: () => void; // Function to set loading to false
}

// Create the Zustand store
const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        token: undefined,
        user: null,
        isLoggedIn: false,
        loading: true,
        setToken: (token) => {
          set((state) => ({
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
