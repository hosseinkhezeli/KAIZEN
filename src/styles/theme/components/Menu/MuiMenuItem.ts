import { Components, Theme } from '@mui/material/styles';

export const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      ...theme.typography.caption,
    }),
  },
};
