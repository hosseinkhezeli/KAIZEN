import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { IUser } from '@/types/user/user_types';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


// Define the UserState interface
export interface UserState {
  token?: string; // Optional token
  user: IUser | null; // User can be IUser type or null
  isLogin: boolean; // Boolean indicating login status
}

// Initial state
const initialState: UserState = {
  token: undefined, // Initially no token
  user: null, // Initially no user
  isLogin: false, // Initially not logged in
};

// Create the user slice with proper typing
const UserSlice: Slice<UserState> = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | undefined>) => {
      state.token = action.payload; // Set the token
      state.isLogin = Boolean(action.payload); // Automatically set isLogin based on token presence
    },
    setUserInfo: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload; // Set user info
    },
    setLogout: (state) => {
      state.user = null; // Clear user on logout
      state.token = undefined; // Clear token on logout
      state.isLogin = false; // Set isLogin to false on logout
    },
  },
});

// Custom hook to access user state
export const useUser = () => useSelector((state: RootState) => state.user);

// Export actions and reducer
export const { setToken, setUserInfo, setLogout } = UserSlice.actions;
export default UserSlice.reducer;
