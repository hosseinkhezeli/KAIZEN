import { Components, Theme } from '@mui/material/styles';
import { getColorByOwnerProps, TColorKeys } from '@utils/methods';

export const MuiBottomNavigationAction: Components<Theme>['MuiBottomNavigationAction'] =
  {
    defaultProps: {
      disableRipple: true,
      disableTouchRipple: true,
      color: 'primary',
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => {
        return {
          color: theme.palette.grey['700'],
          backgroundColor: 'transparent',
          fontFamily: 'inherit',

          minWidth: '60px',
          maxWidth: '60px',
          transition: '0.2s eas all',
          ':active': {
            backgroundColor: getColorByOwnerProps(
              ownerState.color as TColorKeys,
              theme,
              '11 !important',
            ),
          },
          '.Mui-selected': {
            color: theme.palette.grey['700'],
            fontSize: theme.typography.body2.fontSize + ' !important',
          },
        };
      },
      label: ({ theme }) => {
        return {
          color: theme.palette.grey['700'],
          ...theme.typography.body2,
          '.Mui-selected': {
            color: theme.palette.grey['700'],
          },
        };
      },
    },
  };
