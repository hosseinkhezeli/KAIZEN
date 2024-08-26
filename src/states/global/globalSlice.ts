import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { PaletteMode } from '@mui/material';
import { Locale } from '@/i18n';

// Define the GlobalState interface
export interface IGlobalState {
  themeMode: PaletteMode;
  lang: Locale;
  isRtl: boolean;
}

// Initial state
const initialState: IGlobalState = {
  themeMode: 'dark',
  lang: 'en',
  isRtl: false,
};

// Create the global slice with proper typing
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeThemeMode: (
      state,
      action: PayloadAction<PaletteMode | undefined>,
    ) => {
      state.themeMode =
        action.payload! ?? (state.themeMode === 'light' ? 'dark' : 'light');
    },
    setLang: (state, action: PayloadAction<'fa' | 'en'>) => {
      state.lang = action.payload;
      state.isRtl = action.payload === 'fa';
    },
  },
});

// Custom hook to access global state
export const useCommon = () =>
  useSelector((state: RootState) => state.global as IGlobalState);

// Export actions and reducer
export const { changeThemeMode, setLang } = globalSlice.actions;
export default globalSlice.reducer;
