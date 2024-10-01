import { Components, Theme } from '@mui/material/styles';

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
      borderRadius: 70,
      textTransform: 'none',
      transition: '0.1s ease all',
      ':active': {
        transform: 'translateY(0.5px)',
      },
      border: '1px solid',
    }),
    colorInherit: ({ theme }) => ({
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.text.primary,
      stroke: theme.palette.grey[400],
      borderColor: theme.palette.grey[600],
    }),
    colorPrimary: ({ theme }) => ({
      backgroundColor:
        theme.palette.common[theme.palette.mode === 'dark' ? 'white' : 'black'],
      color:
        theme.palette.common[theme.palette.mode === 'dark' ? 'black' : 'white'],
      stroke:
        theme.palette.common[theme.palette.mode === 'dark' ? 'black' : 'white'],
      borderColor: 'transparent',
    }),

    contained: ({ theme, ownerState }) => ({
      backgroundColor:
        theme.palette.common[theme.palette.mode === 'dark' ? 'white' : 'black'],
      color:
        theme.palette.common[theme.palette.mode === 'dark' ? 'black' : 'white'],
      stroke:
        theme.palette.common[theme.palette.mode === 'dark' ? 'black' : 'white'],
      borderColor: 'transparent',
      ':active': {
        opacity: 0.9,
        ...(ownerState.color === 'inherit' && {
          boxShadow: `0px 9px 12px -12px ${theme.palette.grey[800]} !important`,
        }),
      },
    }),
    outlined: ({ ownerState, theme }) => ({
      backgroundColor: 'transparent !important',
      ...(ownerState?.color === 'primary' && {
        borderColor:
          theme.palette.common[
            theme.palette.mode === 'dark' ? 'white' : 'black'
          ],
        color:
          theme.palette.common[
            theme.palette.mode === 'dark' ? 'white' : 'black'
          ],
      }),
    }),
    text: ({ ownerState, theme }) => ({
      backgroundColor: 'transparent !important',
      borderColor: 'transparent !important',
      ':hover': {
        borderColor: `${theme.palette.grey[600]}  !important`,
      },
      ...(ownerState?.color === 'primary' && {
        color:
          theme.palette.common[
            theme.palette.mode === 'dark' ? 'white' : 'black'
          ],
        ':hover': {
          borderColor: `${
            theme.palette.common[
              theme.palette.mode === 'dark' ? 'white' : 'black'
            ]
          } !important`,
        },
      }),
    }),
  },
};
