import { Components, Theme } from '@mui/material/styles';

export const MuiAvatar: Components<Theme>['MuiAvatar'] = {
  defaultProps: { variant: 'circular' },
  styleOverrides: {
    root: ({ theme }) => ({
      width: 32,
      height: 32,
      border: 'none',
      stroke: theme.palette.grey[400],
      [theme.breakpoints.up('lg')]: {
        width: 36,
        height: 36,
      },
    }),
  },
};
