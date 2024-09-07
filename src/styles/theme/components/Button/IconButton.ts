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
          ? theme.palette.background.paper
          : getColorByOwnerProps(ownerState.color, theme),
      border: '1px solid',
      borderColor:
        ownerState.color === 'default'
          ? theme.palette.text.disabled
          : getColorByOwnerProps(ownerState.color, theme),
      padding: '4px',
      minWidth: 32,
      minHeight: 32,
      textTransform: 'none',
      transition: '0.1s ease all',
      boxShadow: `0px 9px 12px -12px ${theme.palette.grey[800] + 'dd'}`,
      borderRadius: 8,
      ':active': {
        opacity: '0.9',
        transform: 'translateY(0.5px)',
        boxShadow: `0 0px 0px 0px ${theme.palette.grey[800]}20`,
      },
    }),
  },
};
