import { Components, Theme } from '@mui/material/styles';

export const MuiTooltip: Components<Theme>['MuiTooltip'] = {
  styleOverrides: {
    tooltip: ({ theme }) => ({
      backgroundColor: theme.palette.text.secondary,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
      lineHeight: '150%',
    }),
  },
};
