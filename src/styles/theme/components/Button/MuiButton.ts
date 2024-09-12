import { Components, Theme } from '@mui/material/styles';
import { getColorByOwnerProps } from '@utils/methods';

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableRipple: true,
    disableElevation: true,
    disableFocusRipple: true,
    disableTouchRipple: true,
    variant: 'contained',
    color: 'inherit',
  },
  styleOverrides: {
    root: () => ({
      textTransform: 'none',
      transition: '0.1s ease all',
      fontWeight: 500,
      borderRadius: 8,
      ':active': {
        transform: 'translateY(0.5px)',
      },
    }),
    contained: ({ theme, ownerState }) => ({
      color: theme.palette.text.primary,
      stroke: theme.palette.text.primary,
      border: '1px solid',
      borderColor: `${theme.palette.text.secondary}10`,
      ...(ownerState.color === 'inherit' && {
        backgroundColor: `${theme.palette.background.paper} !important`,
        borderColor: `${theme.palette.text.disabled}`,
        boxShadow: `0px 9px 12px -12px ${theme.palette.grey[800] + '66'} !important`,
      }),
      ...(ownerState.color === 'info' && {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.text.secondary + ' !important'
            : theme.palette.text.primary + ' !important',
      }),
      ':active': {
        opacity: 0.9,
        ...(ownerState.color === 'inherit' && {
          boxShadow: `0px 9px 12px -12px ${theme.palette.grey[800] + '00'} !important`,
        }),
      },
    }),
    outlined: ({ theme, ownerState }) => ({
      backgroundColor: getColorByOwnerProps(ownerState.color, theme, '09'),
    }),
  },
};
