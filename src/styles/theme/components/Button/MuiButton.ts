import { Components, Theme } from '@mui/material/styles';
import { getColorByOwnerProps } from '@utils/methods';

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableRipple: true,
    disableElevation: true,
    disableFocusRipple: true,
    disableTouchRipple: true,
    variant: 'contained',
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
      border: '1px solid',
      borderColor: `${theme.palette.text.secondary}10`,
      ...(ownerState.color === 'inherit' && {
        backgroundColor: `${theme.palette.background.paper} !important`,
        borderColor: `${theme.palette.text.primary}20`,
        boxShadow: `0px 9px 12px -12px ${theme.palette.text.primary + '66'} !important`,
      }),
      ':active': {
        opacity: 0.9,
        ...(ownerState.color === 'inherit' && {
          boxShadow: `0px 9px 12px -12px ${theme.palette.text.primary + '00'} !important`,
        }),
      },
    }),
    outlined: ({ theme, ownerState }) => ({
      backgroundColor: getColorByOwnerProps(ownerState.color, theme, '09'),
    }),
  },
};
