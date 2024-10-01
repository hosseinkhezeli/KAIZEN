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
          ? theme.palette.grey[800]
          : getColorByOwnerProps(ownerState.color, theme),
      border: '1px solid',
      borderColor:
        ownerState.color === 'default'
          ? theme.palette.divider
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
    colorInherit: ({ theme, ownerState }) => ({
      backgroundColor:
        theme?.palette?.common?.[
          theme.palette?.mode === 'light' ? 'black' : 'white'
        ] + ' !important',
      stroke:
        theme?.palette?.common?.[
          theme.palette?.mode === 'light' ? 'white' : 'black'
        ] + ' !important',
    }),
  },
};
