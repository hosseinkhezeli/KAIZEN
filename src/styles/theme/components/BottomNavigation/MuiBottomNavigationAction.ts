// External imports
import { Components, Theme } from '@mui/material/styles';

import { getColorByOwnerProps, TColorKeys } from '@utils/methods';

const DEFAULT_MIN_WIDTH = '70px';
const DEFAULT_MAX_WIDTH = '60px';
const TRANSITION_STYLE = '0.2s ease all';

export const MuiBottomNavigationAction: Components<Theme>['MuiBottomNavigationAction'] =
  {
    defaultProps: {
      disableRipple: true,
      disableTouchRipple: true,
      color: 'primary',
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        color: theme.palette.grey[300],
        width: '100%',
        transform: 'scale(80%)',
        backgroundColor: 'transparent',
        fontFamily: 'inherit',
        minWidth: DEFAULT_MIN_WIDTH,
        maxWidth: DEFAULT_MAX_WIDTH,
        transition: TRANSITION_STYLE,
        ':active': {
          backgroundColor: getColorByOwnerProps(
            ownerState.color as TColorKeys,
            theme,
            '11 !important',
          ),
        },
        '&.Mui-selected': {
          transform: 'scale(100%)',
        },
      }),
    },
  };
