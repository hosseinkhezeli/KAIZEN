import { PaletteOptions } from '@mui/material/styles/createPalette';

export const lightPalette: PaletteOptions = {
  primary: {
    light: '#124b86',
    main: '#001F3F',
    dark: '#021223',
    contrastText: '#FFFFFF',
  },
  secondary: {
    light: '#be2828',
    main: '#8B0000',
    dark: '#5e0404',
    contrastText: '#FFFFFF',
  },
  divider: '#E5E5E5',
  background: {
    default: '#F0F0F0', // Light background
    paper: '#ffffff', // Light paper background
  },
  success: {
    light: '#87D498',
    main: '#4BBE64',
    dark: '#318743',
    contrastText: '#ffffff',
  },
  warning: {
    light: '#FEC872',
    main: '#FCA311',
    dark: '#DE8A02',
    contrastText: '#000',
  },
  error: {
    light: '#ff4040',
    main: '#E20000',
    dark: '#8f0202',
    contrastText: '#ffffff',
  },
  info: {
    light: '#e3ba69',
    main: '#A67C2B',
    dark: '#674608',
    contrastText: '#ffffff',
  },
  text: {
    primary: '#090B11', // Dark text for light mode
    secondary: '#F0F0F0', // Gray text for secondary
    disabled: '#C6c6c6 ', // Light gray for disabled text
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
