import { PaletteOptions } from '@mui/material';

export const darkPalette: PaletteOptions = {
  primary: {
    light: '#fd7c3c',
    main: '#e5682a',
    dark: '#cb5920',
    contrastText: '#000000',
  },
  secondary: {
    light: '#5781fd',
    main: '#4668ce',
    dark: '#344D98',
    contrastText: '#FFFFFF',
  },
  divider: '#E5E5E5',
  background: {
    default: '#121212', // Dark background
    paper: '#1e1e1e', // Dark paper background
  },
  success: {
    light: '#87D498',
    main: '#4BBE64',
    dark: '#3a944e',
    contrastText: '#ffffff',
  },
  warning: {
    light: '#FEC872',
    main: '#FCA311',
    dark: '#DE8A02',
    contrastText: '#000',
  },
  error: {
    light: '#c22f2f',
    main: '#ad0202',
    dark: '#7e0707',
    contrastText: '#ffffff',
  },
  info: {
    light: '#3fa6d2',
    main: '#107AA7',
    dark: '#09445D',
    contrastText: '#ffffff',
  },
  text: {
    primary: '#ffffff', // White text for dark mode
    secondary: '#090B11', // Light gray for secondary text
    disabled: '#757575', // Darker gray for disabled text
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#090B11',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161',
  },
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
};
