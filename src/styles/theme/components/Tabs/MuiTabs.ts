import { Components, Theme } from '@mui/material/styles';

export const MuiTabs: Components<Theme>['MuiTabs'] = {
  defaultProps: { TabIndicatorProps: { hidden: false } },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      maxHeight: 48,
      minHeight: 48,
      padding: '4px 8px',
      width: 'max-content',
      backgroundColor: theme.palette.grey[800],
      borderRadius: '8px',
    }),
    flexContainer: ({ ownerState, theme }) => ({
      display: 'flex',
      alignItems: 'center',
      maxHeight: 48,
      ...(ownerState.orientation === 'vertical' && {
        width: '100%',
        paddingRight: '4px',
      }),
    }),
    indicator: ({ ownerState, theme }) => ({
      background: theme.palette.primary.main,
      ...(ownerState.orientation === 'horizontal' && {
        height: 'calc(100% - 8px)',
      }),
      borderRadius: 8,
      marginBottom: '4px',
    }),
    scroller: ({ theme }) => ({
      maxHeight: 48,
      display: 'flex',
    }),
  },
};
