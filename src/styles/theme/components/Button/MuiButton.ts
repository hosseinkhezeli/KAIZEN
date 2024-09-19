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
    root: ({ theme }) => ({
      borderRadius: 70,
      textTransform: 'none',
      transition: '0.1s ease all',
      // fontWeight: 800,
      ':active': {
        transform: 'translateY(0.5px)',
      },
      border: '1px solid',
    }),
    colorInherit: () => ({
      backgroundColor: '#2d3236',
      color: '#AEB0B2',
      stroke: '#AEB0B2',
      borderColor: '#42484f',
    }),
    colorPrimary: () => ({
      backgroundColor: '#ffffff',
      color: '#000',
      stroke: '#000000',
      borderColor: 'transparent',
    }),

    contained: ({ theme, ownerState }) => ({
      backgroundColor: '#ffffff',
      color: '#000',
      stroke: '#000000',
      borderColor: 'transparent',
      // ...(ownerState.color === 'inherit' &&
      //   {
      //     // color: '#000',
      //     // backgroundColor: `#fff !important`,
      //   }),
      // ...(ownerState.color === 'info' && {
      //   color:
      //     theme.palette.mode === 'light'
      //       ? theme.palette.text.secondary + ' !important'
      //       : theme.palette.text.primary + ' !important',
      // }),
      ':active': {
        opacity: 0.9,
        ...(ownerState.color === 'inherit' && {
          boxShadow: `0px 9px 12px -12px ${theme.palette.grey[800] + '00'} !important`,
        }),
      },
    }),
    outlined: ({ theme, ownerState }) => ({
      backgroundColor: 'transparent !important',
      ...(ownerState?.color === 'primary' && {
        borderColor: '#fff',
        color: '#fff',
      }),
    }),
    text: ({ theme, ownerState }) => ({
      backgroundColor: 'transparent !important',
      borderColor: 'transparent !important',
      ':hover': {
        borderColor: '#42484f  !important',
      },
      ...(ownerState?.color === 'primary' && {
        color: '#fff',
        ':hover': {
          borderColor: '#ffffff !important',
        },
      }),
    }),
  },
};
