import { configureStore, Store } from '@reduxjs/toolkit';
import GlobalSlice, { IGlobalState } from './global/globalSlice';
import UserSlice from './user/userSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';
import storage from './customStorage';
import { UserState } from './user/userSlice';

// Persist configuration for global state
const globalPersistConfig = {
  key: 'global',
  storage,
};

// Persist configuration for user state
const userPersistConfig = {
  key: 'user',
  storage,
};

// Create persisted reducers
const persistedGlobalReducer = persistReducer<IGlobalState >(
  globalPersistConfig,
  GlobalSlice// Ensure you're using the reducer property
);

const persistedUserReducer = persistReducer<UserState>(
  userPersistConfig,
  UserSlice // Ensure you're using the reducer property
);

// Configure the Redux store
export const store:Store = configureStore({
  reducer: {
    global: persistedGlobalReducer,
    user: persistedUserReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;