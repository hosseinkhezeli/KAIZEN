import { Components, Theme } from '@mui/material/styles';

export const MuiTooltip: Components<Theme>['MuiTooltip'] = {
  styleOverrides: {
    tooltip: ({ theme }) => ({
      backgroundColor: theme.palette.common.black + '40',
      color: theme.palette.text.primary,
      backdropFilter: 'blur(5px)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
      lineHeight: '150%',
    }),
  },
};
