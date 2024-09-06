import { Components, Theme } from '@mui/material/styles';

export const MuiListItemText: Components<Theme>['MuiListItemText'] = {
  defaultProps: { disableTypography: true },
  styleOverrides: {
    root: ({ theme }) => ({
      color: 'inherit',
      transition: '0.2s ease all',
      ...theme.typography.body2,
      ':hover': {
        color: 'inherit',
      },
      '&.selected': {
        color: theme.palette.primary.main + ' !important',
      },
    }),
  },
};
