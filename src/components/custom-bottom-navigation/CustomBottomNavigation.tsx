'use client';
//@3rd Party
import { FC, SyntheticEvent, useState } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import {
    BottomNavigation,
    BottomNavigationAction,
    Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Assets
import {
    Cog6ToothIcon,
    HomeIcon,
    RectangleGroupIcon,
    RectangleStackIcon,
} from '@heroicons/react/24/outline';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { Locale } from '@/i18n';
import { TGlobal } from '@i18n/dictionary/types/global';
enum NavigationValue {
    Settings = 0,
    Cards,
    Boards,
    Home,
}
type TCustomBottomNavigation = {
    dictionary: TGlobal;
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const CustomBottomNavigation: FC<TCustomBottomNavigation> = ({
    dictionary,
}) => {
    const [value, setValue] = useState<NavigationValue>(
        NavigationValue.Settings,
    );

    const handleChange = (event: SyntheticEvent, newValue: NavigationValue) => {
        setValue(newValue);
    };
    const { direction } = useTheme();

    const { lang } = useParams<{ lang: Locale }>();
    const { push: navigateTo } = useRouter();
    const pathname = usePathname()
        .split(lang)
        .join('')
        .split('/')
        .filter((path) => path)[0];
    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={handleChange}
            dir={direction === 'ltr' ? 'rtl' : 'rtl'}
        >
            <BottomNavigationAction
                label={dictionary.home}
                icon={
                    <HomeIcon
                        strokeWidth={pathname === undefined ? 1.5 : 1}
                        width={28}
                        height={28}
                    />
                }
                onClick={() => navigateTo(`/${lang}/`)}
            />
            <Divider
                orientation='vertical'
                variant='middle'
                sx={{ height: 'auto' }}
            />
            <BottomNavigationAction
                label={dictionary.boards}
                icon={
                    <RectangleGroupIcon
                        strokeWidth={pathname === 'boards' ? 1.5 : 1}
                        width={28}
                        height={28}
                    />
                }
                onClick={() => navigateTo(`/${lang}/boards`)}
            />

            <Divider
                orientation='vertical'
                variant='middle'
                sx={{ height: 'auto' }}
            />
            <BottomNavigationAction
                label={dictionary.cards}
                icon={
                    <RectangleStackIcon
                        strokeWidth={pathname === 'cards' ? 1.5 : 1}
                        width={28}
                        height={28}
                    />
                }
                onClick={() => navigateTo(`/${lang}/cards`)}
            />
            <Divider
                orientation='vertical'
                variant='middle'
                sx={{ height: 'auto' }}
            />
            <BottomNavigationAction
                label={dictionary.setting}
                icon={
                    <Cog6ToothIcon
                        strokeWidth={pathname === 'setting' ? 1.5 : 1}
                        width={28}
                        height={28}
                    />
                }
                onClick={() => navigateTo(`/${lang}/setting`)}
            />
        </BottomNavigation>
    );
};

export default CustomBottomNavigation;
