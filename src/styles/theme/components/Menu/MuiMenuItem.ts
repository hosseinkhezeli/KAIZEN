import { Components, Theme } from '@mui/material/styles';

export const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.caption,
    }),
  },
};
