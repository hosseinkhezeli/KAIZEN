import { getColorByOwnerProps } from '@/utils/methods';
import { Components, Theme } from '@mui/material/styles';

export const MuiIconButton: Components<Theme>['MuiIconButton'] = {
  defaultProps: {
    disableRipple: true,
    color: 'default',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      backgroundColor:
        ownerState.color === 'default'
          ? theme.palette.background.default
          : getColorByOwnerProps(ownerState.color, theme),
      border: '1px solid',
      borderColor:
        ownerState.color === 'default'
          ? theme.palette.text.disabled
          : getColorByOwnerProps(ownerState.color, theme),
      padding: '4px',
      minWidth: 38,
      minHeight: 38,
      textTransform: 'none',
      transition: '0.1s ease all',
      borderRadius: 8,
      ':active': {
        opacity: '0.9',
        transform: 'translateY(0.5px)',
        boxShadow: `0 0px 0px 0px ${theme.palette.text.secondary}20`,
      },
    }),
  },
};
