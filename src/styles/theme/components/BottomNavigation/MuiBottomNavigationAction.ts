// External imports
import { Components, Theme } from '@mui/material/styles';

import { getColorByOwnerProps, TColorKeys } from '@utils/methods';

const LIGHT_MODE_COLOR = '700';
const DARK_MODE_COLOR = '300';
const DEFAULT_MIN_WIDTH = '60px';
const DEFAULT_MAX_WIDTH = '60px';
const TRANSITION_STYLE = '0.2s ease all';

const getColorByMode = (theme: Theme) => {
  return theme.palette.mode === 'light'
    ? theme.palette.grey[LIGHT_MODE_COLOR]
    : theme.palette.grey[DARK_MODE_COLOR];
};

export const MuiBottomNavigationAction: Components<Theme>['MuiBottomNavigationAction'] =
  {
    defaultProps: {
      disableRipple: true,
      disableTouchRipple: true,
      color: 'primary',
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        color: getColorByMode(theme),
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
        '.Mui-selected': {
          color: getColorByMode(theme),
          fontSize: `${theme.typography.body2.fontSize} !important`,
        },
      }),
      label: ({ theme }) => ({
        color: getColorByMode(theme),
        ...theme.typography.body2,
        '.Mui-selected': {
          color: getColorByMode(theme),
        },
      }),
    },
  };
