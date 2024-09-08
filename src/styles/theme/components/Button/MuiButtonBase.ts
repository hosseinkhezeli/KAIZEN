import { Components, Theme } from '@mui/material/styles';

export const MuiButtonBase: Components<Theme>['MuiButtonBase'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: 38,
      minWidth: 38,
      [theme.breakpoints.between('md', 'lg')]: {
        minHeight: 32,
        height: 32,
        minWidth: 32,
      },
      [theme.breakpoints.up('lg')]: {
        minHeight: 34,
        minWidth: 34,
      },
    }),
  },
};
