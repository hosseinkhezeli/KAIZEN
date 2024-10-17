import { Components, Theme } from '@mui/material/styles';

export const MuiDialog: Components<Theme>['MuiDialog'] = {
  styleOverrides: {
    root: () => ({}),
    paper: () => ({
      minWidth: '40vw',
      background: 'linear-gradient(-45deg, #FFFFFF33, #FFFFFF05)',
      border: 'none',
      borderRadius: 24,
      backdropFilter: 'blur(6px)',
    }),
  },
};
