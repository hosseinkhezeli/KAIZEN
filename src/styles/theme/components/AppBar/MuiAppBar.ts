import { Components, Theme } from '@mui/material/styles';
import { getColorByOwnerProps } from '@utils/methods';

export const MuiAppBar: Components<Theme>['MuiAppBar'] = {
  defaultProps: {
    elevation: 0,
    color: 'transparent',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      return {
        backgroundColor: getColorByOwnerProps?.(ownerState.color, theme, '22'),
      };
    },
  },
};
