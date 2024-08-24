import { Components, Theme } from '@mui/material/styles';

export const MuiInputLabel: Components<Theme>['MuiInputLabel'] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      color: theme.palette.text.primary + 'aa',
      ...theme.typography.body2,
      ...(!ownerState.shrink && {
        transform: 'translate(8px, 4px) scale(1)',
      }),
    }),
  },
};
