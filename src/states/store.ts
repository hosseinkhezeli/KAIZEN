import { configureStore, Store } from '@reduxjs/toolkit';
import GlobalSlice, { IGlobalState } from './global/globalSlice';
import UserSlice, { UserState } from './user/userSlice';
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

const globalPersistConfig = {
  key: 'global',
  storage,
  whitelist: ['themeMode', 'lang'],
  blacklist: ['isRtl'],
};

const userPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['isLogin'],
};

const persistedGlobalReducer = persistReducer<IGlobalState>(
  globalPersistConfig,
  GlobalSlice,
);

const persistedUserReducer = persistReducer<UserState>(
  userPersistConfig,
  UserSlice,
);

export const store: Store = configureStore({
  reducer: {
    global: persistedGlobalReducer,
    user: persistedUserReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
