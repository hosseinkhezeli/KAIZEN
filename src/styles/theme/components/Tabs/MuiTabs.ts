import { Components, Theme } from '@mui/material/styles';

export const MuiTabs: Components<Theme>['MuiTabs'] = {
  defaultProps: { TabIndicatorProps: { hidden: false } },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      maxHeight: 48,
      minHeight: 48,
      padding: '4px 8px',
      width: 'max-content',
      border: '1px solid',
      borderColor: '#2C2E30',
      backgroundColor: 'transparent',
      borderRadius: '16px',
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
      background: '#293545',
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
