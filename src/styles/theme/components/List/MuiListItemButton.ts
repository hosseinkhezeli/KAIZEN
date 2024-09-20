import { Components, Theme } from '@mui/material/styles';

export const MuiListItemButton: Components<Theme>['MuiListItemButton'] = {
  defaultProps: { disableRipple: true, disableTouchRipple: true },
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: 32,
      fontWeight: 500,
      alignItems: 'center',
      padding: '0 8px',
      minWidth: 32,
      transition: '0.2s ease all',
      borderRadius: 72,
      stroke: theme.palette.grey['400'],
      color: theme.palette.grey['400'],
      '&.selected': {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
      ':active': {
        transform: 'translateY(0.5px)',
        opacity: 0.9,
      },
      ':hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
