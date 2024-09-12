import { Components, Theme } from '@mui/material/styles';

export const MuiList: Components<Theme>['MuiList'] = {
  styleOverrides: {
    root: () => ({
      textAlign: 'initial',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: 0,
    }),
  },
};
