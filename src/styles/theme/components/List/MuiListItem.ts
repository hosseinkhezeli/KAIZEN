import { Components, Theme } from '@mui/material/styles';

export const MuiListItem: Components<Theme>['MuiListItem'] = {
  defaultProps: { disablePadding: true },
  styleOverrides: {
    root: ({ theme }) => ({
      padding: '0 8px',
      minWidth: 32,
    }),
  },
};
