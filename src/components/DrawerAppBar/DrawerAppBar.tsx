import Box from '@mui/material/Box';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ReactNode } from 'react';
import { HamburgerIcon } from '@/app/[lang]/(_landing)/components/header/useHeader';
import '@/app/[lang]/(_landing)/components/header/header.css';
import Link from 'next/link';
import { useCommon } from '@/core/store/common/commonSlice';
import SvgMoon from 'ideep-design-system-2/icons/Moon';
import SvgSun1 from 'ideep-design-system-2/icons/Sun1';
import useDrawerAppBar from '@/core/components/DrawerAppBar/useDrawerAppBar';

type TDrawerItems = {
  icon: JSX.Element;
  label: string;
  href: string;
};

export default function DrawerAppBar({
  children,
  drawerItems,
}: {
  children: ReactNode;
  drawerItems: TDrawerItems[];
}) {
  const {
    theme,
    Drawer,
    DrawerHeader,
    open,
    handleDrawerOpen,
    handleDrawerClose,
    toggleThemeMode,
  } = useDrawerAppBar();
  const { themeMode } = useCommon();
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader
          sx={{
            justifyContent: open ? 'space-between' : 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={toggleThemeMode}
            sx={{ display: open ? 'block' : 'none', height: 'max-content' }}
          >
            {themeMode === 'light' ? (
              <SvgMoon primarycolor={theme.palette.text.primary} />
            ) : (
              <SvgSun1 primarycolor={theme.palette.text.primary} />
            )}
          </IconButton>
          <IconButton
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            sx={{ zIndex: 999 }}
          >
            {HamburgerIcon(open ? handleDrawerClose : handleDrawerOpen, open, {
              background: theme.palette.text.primary,
            })}
          </IconButton>
        </DrawerHeader>

        <List
          onMouseEnter={handleDrawerOpen}
          // onMouseLeave={handleDrawerClose}
        >
          {drawerItems.map((menuItem, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <Link href={menuItem.href}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'center' : 'center',
                    alignItems: 'center',
                    px: 5,
                    height: '64px',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      m: open ? 3 : '0',
                      justifyContent: 'center',
                      minWidth: 'max-content',
                    }}
                  >
                    {menuItem.icon}
                  </ListItemIcon>

                  <ListItemText
                    primary={menuItem.label}
                    sx={{
                      opacity: open ? 1 : 0,
                      transition: '0.07s ease all',
                      '.MuiListItemText-primary': {
                        fontSize:
                          theme.typography['caption2'].fontSize + ' !important',
                      },
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3, height: '100%' }}>
        {children}
      </Box>
    </Box>
  );
}
