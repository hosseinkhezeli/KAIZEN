import { Components, Theme } from '@mui/material/styles';

export const MuiListItemButton: Components<Theme>['MuiListItemButton'] = {
  defaultProps: { disableRipple: true, disableTouchRipple: true },
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: 32,
      fontWeight: 500,
      alignItems: 'center',
      padding: '0 4px',
      minWidth: 32,
      transition: '0.2s ease all',
      borderRadius: 8,
      stroke: theme.palette.grey['700'],
      color: theme.palette.grey['700'],
      ':active': {
        transform: 'translateY(0.5px)',
        opacity: 0.9,
      },
      ':hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.08) !important',
        color: theme.palette.text.primary,
        stroke: theme.palette.text.primary,
      },
      [theme.breakpoints.between('md', 'lg')]: {
        minHeight: 32,
        height: 32,
      },
      [theme.breakpoints.up('lg')]: {
        minHeight: 38,
      },
    }),
  },
};
