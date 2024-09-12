import { Components, Theme } from '@mui/material/styles';

export const MuiTab: Components<Theme>['MuiTab'] = {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      padding: '12px 16px',
      width: 'max-content',
      minHeight: 'max-content',
      color: theme.palette.text.primary,
      stroke: theme.palette.text.primary,
      ...theme.typography.caption,
      textTransform: 'none',
      transition: 'transform 0.2s',
      ':active': {
        transform: 'scale(98%)',
      },
      '&.Mui-selected': {
        backgroundColor: 'transparent',
        transition: 'background-color transform 0.2s',
        zIndex: 10,
        color: theme.palette.text.primary,
        stroke: theme.palette.text.primary,
        borderRadius: theme.shape.borderRadius * 2,
        fontWeight: 500,
      },
    }),
  },
};
