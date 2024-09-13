import { Components, Theme } from '@mui/material/styles';

export const MuiAvatar: Components<Theme>['MuiAvatar'] = {
  styleOverrides: {
    root: ({ theme }) => {
      return {
        stroke: theme.palette.grey[400],
      };
    },
  },
};
