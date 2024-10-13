//3rd Party
import React, {
    ReactNode,
    SyntheticEvent,
    useMemo,
    useState,
    useTransition,
} from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
//______________________________________________________________

//@Mui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
//@Next
//______________________________________________________________

//@Assets
import {
    Cog6ToothIcon,
    HomeIcon,
    RectangleGroupIcon,
    RectangleStackIcon,
} from '@heroicons/react/24/outline';
//______________________________________________________________

//@Types
import { Locale } from '@/i18n/i18n';
export enum NavigationValue {
    Settings = 'settings',
    Cards = 'cards',
    Boards = 'boards',
    Home = 'home',
}

export interface INavigationItem {
    href: string;
    icon: ReactNode;
    id: NavigationValue;
}
//______________________________________________________________

const useCustomBottomNavigation = () => {
    const [isPending, startTransition] = useTransition();
    const { lang } = useParams<{ lang: Locale }>();
    const { push: navigateTo } = useRouter();
    const pathname = usePathname();
    const { direction, breakpoints } = useTheme();

    const isSmallScreen = useMediaQuery(breakpoints.down('md'));

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
                    width={28}
                    height={28}
                />
            ),
            id: NavigationValue.Home,
        },
        {
            href: `/${lang}/boards`,
            icon: (
                <RectangleGroupIcon
                    strokeWidth={location === NavigationValue.Boards ? 1.5 : 1}
                    width={28}
                    height={28}
                />
            ),
            id: NavigationValue.Boards,
        },
        {
            href: `/${lang}/cards`,
            icon: (
                <RectangleStackIcon
                    strokeWidth={location === NavigationValue.Cards ? 1.5 : 1}
                    width={28}
                    height={28}
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
                    width={28}
                    height={28}
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

    return {
        value,
        handleChange,
        direction,
        location,
        lang,
        navigationItems,
        isPending,
        isSmallScreen,
    };
};

export default useCustomBottomNavigation;
