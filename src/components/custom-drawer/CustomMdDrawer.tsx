'use client';
//@3rd Party
import { FC, useMemo, useTransition } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import {
    CSSObject,
    Divider,
    Drawer as MuiDrawer,
    DrawerProps,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    Theme,
} from '@mui/material';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Assets
import {
    Cog6ToothIcon,
    HomeIcon,
    RectangleGroupIcon,
    RectangleStackIcon,
} from '@heroicons/react/24/outline';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Components
import CustomDrawerHeader from '@components/custom-drawer/CustomDrawerHeader';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { Locale } from '@/i18n';
import {
    INavigationItem,
    NavigationValue,
} from '@components/custom-bottom-navigation/useCustomBottomNavigation';
import { TGlobal } from '@i18n/dictionary/types/global';
interface ICustomMdDrawerProps extends DrawerProps {
    onToggleHandle: (open?: boolean) => void;
    dictionary: TGlobal;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const CustomMdDrawer: FC<ICustomMdDrawerProps> = ({
    sx,
    open = true,
    onToggleHandle,
    dictionary,
    ...rest
}) => {
    const [isPending, startTransition] = useTransition();
    const { lang } = useParams<{ lang: Locale }>();
    const { push: navigateTo } = useRouter();
    const pathname = usePathname();

    const location = useMemo(() => {
        const path = pathname
            .split(lang)
            .join('')
            .split('/')
            .filter(Boolean)[0];
        return path || NavigationValue.Home;
    }, [pathname, lang]);

    const handleClick = (href: string) => {
        startTransition(() => {
            navigateTo(href);
        });
    };

    return (
        <Drawer
            variant='permanent'
            {...rest}
            keepMounted
            sx={[...(Array.isArray(sx) ? sx : [sx])]}
            open={open}
        >
            <CustomDrawerHeader
                open={open}
                onClick={onToggleHandle}
                dictionary={dictionary}
            />
            <Divider sx={{ my: '8px' }} />
            <List>
                {navigationItems.map((navItem, index) => (
                    <ListItem
                        key={navItem.id + index}
                        sx={{ padding: open ? 'initial' : '0' }}
                    >
                        <ListItemButton
                            disabled={isPending}
                            onClick={() =>
                                handleClick(
                                    navItem.href.replace('{lang}', lang),
                                )
                            }
                            sx={{
                                gap: 1,
                                justifyContent: open ? 'initial' : 'center',
                            }}
                        >
                            <ListItemIcon
                                className={
                                    location === navItem.id ? 'selected' : ''
                                }
                                sx={{ minWidth: 0, justifyContent: 'center' }}
                            >
                                {navItem.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={dictionary[navItem.id]}
                                sx={{ display: open ? 'block' : 'none' }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default CustomMdDrawer;

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

const navigationItems: INavigationItem[] = [
    {
        href: '/{lang}/',
        icon: <HomeIcon width={22} height={22} stroke={'inherit'} />,
        id: NavigationValue.Home,
    },
    {
        href: '/{lang}/boards',
        icon: <RectangleGroupIcon width={22} height={22} stroke={'inherit'} />,
        id: NavigationValue.Boards,
    },
    {
        href: '/{lang}/cards',
        icon: <RectangleStackIcon width={22} height={22} stroke={'inherit'} />,
        id: NavigationValue.Cards,
    },
    {
        href: '/{lang}/settings',
        icon: <Cog6ToothIcon width={22} height={22} stroke={'inherit'} />,
        id: NavigationValue.Settings,
    },
];
