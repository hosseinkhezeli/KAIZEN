import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeThemeMode } from '@/core/store/common/commonSlice';

const openedMixin = (theme: Theme): CSSObject => ({
  width: 240,
  backgroundColor: theme.palette.background.default,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.complex,
  }),
  overflowX: 'hidden',
  borderColor: theme.palette.divider,
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: theme.palette.background.default,
  overflowX: 'hidden',
  width: 46,
  [theme.breakpoints.up('sm')]: {
    width: 64,
  },
  borderColor: theme.palette.divider,
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: 240,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  outline: 'none',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));
const useDrawerAppBar = () => {
  const drawerWidth = 240;
  const theme = useTheme();

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    outline: 'none',
    ...theme.mixins.toolbar,
  }));

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const toggleThemeMode = () => {
    dispatch(changeThemeMode('' as never));
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return {
    drawerWidth,
    theme,
    DrawerHeader,
    Drawer,
    openedMixin,
    closedMixin,
    open,
    handleDrawerOpen,
    handleDrawerClose,
    toggleThemeMode,
  };
};

export default useDrawerAppBar;
