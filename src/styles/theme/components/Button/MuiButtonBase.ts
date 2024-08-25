import { Components, Theme } from '@mui/material/styles';

export const MuiButtonBase: Components<Theme>['MuiButtonBase'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      minHeight: 38,
    },
  },
};
