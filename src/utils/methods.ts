import { ButtonOwnProps } from '@mui/material/Button';
import { Theme, useTheme } from '@mui/material/styles';
import { OverridableStringUnion } from '@mui/types';
import { store } from '@states/store';
import { EMPTY_TEXT } from '@utils/consts';
import { useEffect, useState } from 'react';

// Clears an object of undefined or empty string values
export const clearObject = <T extends object>(obj: T): T => {
  const filteredEntries = Object.entries(obj).filter(
    ([, value]) => value !== undefined && value !== '',
  );
  return Object.fromEntries(filteredEntries) as T;
};

// Handles text value, returns EMPTY_TEXT if value is undefined
export const handleTextValue = (value?: string): string => value ?? EMPTY_TEXT;

// Combines first and last name into a single string
export const combineFullName = (
  firstName?: string,
  lastName?: string,
): string => {
  return handleTextValue(
    firstName && lastName ? `${firstName} ${lastName}` : undefined,
  );
};

// Handles user logout
export const logoutUser = (): void => {
  localStorage.clear();
  store.dispatch({ type: 'logout' });
  window.open('/login', '_self');
};

// Downloads a file from a given link
export const downloadFile = async (
  url: string,
  fileName: string,
): Promise<void> => {
  const response = await fetch(url);
  const blob = await response.blob();
  const href = URL.createObjectURL(blob);

  const anchor = document.createElement('a');
  anchor.href = href;
  anchor.download = fileName;

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  window.URL.revokeObjectURL(href);
};

// Repeats a component a specified number of times
export const RepeatComponent = ({
  times,
  render,
}: {
  times: number;
  render: (index: number) => JSX.Element;
}): JSX.Element[] => {
  return Array.from({ length: times }, (_, index) => render(index));
};

// Converts Persian numbers to English
export const convertPersianToEnglishNumbers = (str: string): string =>
  str?.replace(/([٠١٢٣٤٥٦٧٨٩])|([۰۱۲۳۴۵۶۷۸۹])/g, (match, persianChar) => {
    return `${match.charCodeAt(0) - (persianChar ? 1632 : 1776)}`;
  }) ?? '';

// Converts English weekday names to Persian
export const convertWeekdayToPersian = (weekday: string): string => {
  const weekdays: { [key: string]: string } = {
    Sat: 'شنبه',
    Sun: 'یکشنبه',
    Mon: 'دوشنبه',
    Tue: 'سه شنبه',
    Wed: 'پنج شنبه',
    Thu: 'چهارشنبه',
    Fri: 'جمعه',
  };
  return weekdays[weekday] || 'شنبه';
};

// Custom hook for debouncing a value
export const useDebounce = (value: any, delay: number): any => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Formats time as HH:MM
export const formatTime = (time: string | Date): string => {
  if (!time) return '-';
  const date = new Date(time);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

// Converts milliseconds to formatted time
export const formatTimeFromMilliseconds = (milliseconds: number): string => {
  if (!milliseconds) return '-';
  const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60)
    .toString()
    .padStart(2, '0');
  return `${hours}:${minutes}`;
};

// Formats minutes into HH:MM format
export const formatMinutesToHHMM = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}:${remainingMinutes.toString().padStart(2, '0')}`;
};

// Helper function to determine background color for outlined buttons
export type TColorKeys =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'default'
  | 'transparent'
  | undefined;
export const getColorByOwnerProps = (
  color: TColorKeys,
  theme: Theme,
  alpha?: string | number,
): string | undefined => {
  const isColorKey = (color: any): color is keyof Theme['palette'] => {
    return color in theme.palette; // Assuming `theme` is accessible here
  };
  if (color && isColorKey(color)) {
    const paletteColor = theme.palette[color];
    if (typeof paletteColor === 'object' && 'main' in paletteColor) {
      return `${paletteColor.main}${alpha || ''}`;
    }
  }
  return undefined;
};
export function truncateString(str: string, maxLength: number): string {
  if (maxLength <= 0) {
    return '';
  }

  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength - 3) + '...';
}
export function rndPatternGenerator(theme: Theme): string {
  const patterns = [
    `repeating-radial-gradient( circle at 0 0, transparent 0, ${theme.palette.primary.light}55 21px ), repeating-linear-gradient( ${theme.palette.primary.light}55, transparent )`,
    `radial-gradient(circle at center center, transparent, transparent), repeating-radial-gradient(circle at center center, ${theme.palette.primary.light}55, ${theme.palette.primary.light}55, 21px, transparent 42px, transparent 21px)`,
    `linear-gradient(30deg, ${theme.palette.primary.main}20 12%, transparent 12.5%, transparent 87%, ${theme.palette.primary.main}20 87.5%, ${theme.palette.primary.main}20), linear-gradient(150deg, ${theme.palette.primary.main}20 12%, transparent 12.5%, transparent 87%, ${theme.palette.primary.main}20 87.5%, ${theme.palette.primary.main}20), linear-gradient(30deg, ${theme.palette.primary.main}20 12%, transparent 12.5%, transparent 87%, ${theme.palette.primary.main}20 87.5%, ${theme.palette.primary.main}20), linear-gradient(150deg, ${theme.palette.primary.main}20 12%, transparent 12.5%, transparent 87%, ${theme.palette.primary.main}20 87.5%, ${theme.palette.primary.main}20), linear-gradient(60deg, ${theme.palette.primary.main}30 25%, transparent 25.5%, transparent 75%, ${theme.palette.primary.main}30 75%, ${theme.palette.primary.main}30), linear-gradient(60deg, ${theme.palette.primary.main}30 25%, transparent 25.5%, transparent 75%, ${theme.palette.primary.main}30 75%, ${theme.palette.primary.main}30)`,
  ];
  return patterns[Math.floor(Math.random() * 3)];
}
