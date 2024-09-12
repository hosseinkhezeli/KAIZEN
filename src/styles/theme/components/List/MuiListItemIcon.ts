import { Components, Theme } from '@mui/material/styles';

export const MuiListItemIcon: Components<Theme>['MuiListItemIcon'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      stroke: 'inherit',
      display: 'flex',
      alignItems: 'center',
      width: 32,
      height: 32,
      transition: '0.2s ease all',
      ':hover': {
        stroke: 'inherit',
      },
      '&.selected': {
        stroke: theme.palette.primary.main + ' !important',
      },
    }),
  },
};
