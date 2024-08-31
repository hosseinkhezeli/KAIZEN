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
      letterSpacing: 1,
      borderRadius: 8,
      ':active': {
        transform: 'translateY(0.5px)',
      },
    }),
    contained: ({ theme }) => ({
      border: '1px solid',
      borderColor: `${theme.palette.text.secondary}10`,
      '&.MuiButton-containedInherit': {
        backgroundColor: `${theme.palette.background.paper} !important`,
        borderColor: `${theme.palette.text.primary}20`,
        boxShadow: `0 6px 6px 0px ${theme.palette.text.primary}05`,
      },
      ':active': {
        opacity: 0.9,
        '&.MuiButton-containedInherit': {
          boxShadow: `0 0px 0px 0px ${theme.palette.text.secondary}00`,
        },
      },
    }),
    outlined: ({ theme, ownerState }) => ({
      backgroundColor: getColorByOwnerProps(ownerState.color, theme, '09'),
    }),
  },
};
