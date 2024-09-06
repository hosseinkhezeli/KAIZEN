'use client';
import {
    CSSObject,
    Divider,
    Drawer as MuiDrawer,
    DrawerProps,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    Theme,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
    Cog6ToothIcon,
    HomeIcon,
    RectangleGroupIcon,
    RectangleStackIcon,
    EllipsisHorizontalIcon,
    ArrowLongLeftIcon,
} from '@heroicons/react/24/outline';

import React, { SyntheticEvent, useMemo, useState, useTransition } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { Locale } from '@/i18n';
import {
    INavigationItem,
    NavigationValue,
} from '@components/custom-bottom-navigation/useCustomBottomNavigation';
import CustomDrawerHeader from '@components/custom-drawer/CustomDrawerHeader';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    padding: '8px 16px',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.leavingScreen,
    }),
    padding: '8px',
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(6)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
        {
            props: ({ open }) => open,
            style: {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            },
        },
        {
            props: ({ open }) => !open,
            style: {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            },
        },
    ],
}));
interface ICustomMdDrawerProps extends DrawerProps {
    onToggleHandle: (open?: boolean) => void;
}
export default function CustomMdDrawer({
    sx,
    open,
    onToggleHandle,
    ...rest
}: ICustomMdDrawerProps) {
    const [isPending, startTransition] = useTransition();
    const { lang } = useParams<{ lang: Locale }>();
    const { push: navigateTo } = useRouter();
    const pathname = usePathname();
    const { direction } = useTheme();

    const location = useMemo(() => {
        const path = pathname
            .split(lang)
            .join('')
            .split('/')
            .filter(Boolean)[0];
        return path || NavigationValue.Home;
    }, [pathname, lang]);
    const [value, setValue] = useState<NavigationValue>(
        location as NavigationValue,
    );

    const navigationItems: INavigationItem[] = [
        {
            href: `/${lang}/`,
            icon: (
                <HomeIcon
                    strokeWidth={location === NavigationValue.Home ? 1.5 : 1}
                    width={24}
                    height={24}
                />
            ),
            id: NavigationValue.Home,
        },
        {
            href: `/${lang}/boards`,
            icon: (
                <RectangleGroupIcon
                    strokeWidth={location === NavigationValue.Boards ? 1.5 : 1}
                    width={24}
                    height={24}
                />
            ),
            id: NavigationValue.Boards,
        },
        {
            href: `/${lang}/cards`,
            icon: (
                <RectangleStackIcon
                    strokeWidth={location === NavigationValue.Cards ? 1.5 : 1}
                    width={24}
                    height={24}
                />
            ),
            id: NavigationValue.Cards,
        },
        {
            href: `/${lang}/settings`,
            icon: (
                <Cog6ToothIcon
                    strokeWidth={
                        location === NavigationValue.Settings ? 1.5 : 1
                    }
                    width={24}
                    height={24}
                />
            ),
            id: NavigationValue.Settings,
        },
    ];

    const handleChange = (event: SyntheticEvent, newValue: NavigationValue) => {
        startTransition(() => {
            setValue(newValue);
            const selectedItem = navigationItems.find(
                (item) => item.id === newValue,
            );
            if (selectedItem) navigateTo(selectedItem.href);
        });
    };

    return (
        <Drawer
            variant='permanent'
            {...rest}
            keepMounted={true}
            sx={[...(Array.isArray(sx) ? sx : [sx])]}
            open={open}
        >
            <CustomDrawerHeader open={open || false} onClick={onToggleHandle} />
            <Divider sx={{ my: '8px ' }} />
            <List
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 0 }}
            >
                {navigationItems.map((navItem, index) => (
                    <ListItem
                        key={navItem.id + index}
                        disablePadding
                        sx={{ display: 'block' }}
                    >
                        <ListItemButton
                            sx={[
                                {
                                    minHeight: 48,
                                    p: 0,
                                },
                                open
                                    ? {
                                          justifyContent: 'initial',
                                      }
                                    : {
                                          justifyContent: 'center',
                                      },
                            ]}
                        >
                            <ListItemIcon
                                sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                    },
                                ]}
                            >
                                {navItem.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={navItem.id}
                                sx={[
                                    open
                                        ? {
                                              display: 'block',
                                          }
                                        : {
                                              display: 'none',
                                          },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
