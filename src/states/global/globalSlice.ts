import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { PaletteMode } from '@mui/material';
import { Locale } from '@/i18n';

export interface IGlobalState {
  themeMode: PaletteMode;
  lang: Locale;
  isRtl: boolean;
  changeThemeMode: (mode?: PaletteMode) => void;
  setLang: (language: 'fa' | 'en') => void;
}

const useGlobalStore = create<IGlobalState>()(
  devtools(
    persist(
      (set) => ({
        themeMode: 'dark',
        lang: 'en',
        isRtl: false,
        changeThemeMode: (mode) => {
          set((state) => ({
            themeMode: mode ?? (state.themeMode === 'light' ? 'dark' : 'light'),
          }));
        },
        setLang: (language) => {
          set({
            lang: language,
            isRtl: language === 'fa',
          });
        },
      }),
      { name: 'app-setting-storage' },
    ),
  ),
);

export default useGlobalStore;
