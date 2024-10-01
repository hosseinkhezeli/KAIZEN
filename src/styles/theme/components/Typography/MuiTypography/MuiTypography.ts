import { Components, Theme } from '@mui/material/styles';

export const MuiTypography: Components<Theme>['MuiTypography'] = {
  defaultProps: { variant: 'caption' },
  styleOverrides: {
    root: () => ({
      textAlign: 'initial',
    }),
  },
};
