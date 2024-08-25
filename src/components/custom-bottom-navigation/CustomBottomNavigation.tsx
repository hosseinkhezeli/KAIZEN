'use client';
import { FC, ReactNode, SyntheticEvent, useState } from 'react';
import {
    BottomNavigation,
    BottomNavigationAction,
    Divider,
} from '@mui/material';
import {
    Cog6ToothIcon,
    HomeIcon,
    RectangleGroupIcon,
    RectangleStackIcon,
} from '@heroicons/react/24/outline';

enum NavigationValue {
    Settings = 0,
    Cards,
    Boards,
    Home,
}

interface NavigationActionProps {
    label: string;
    icon: ReactNode;
}

const NavigationAction: FC<NavigationActionProps> = ({ label, icon }) => (
    <>
        <BottomNavigationAction label={label} icon={icon} />
        <Divider
            orientation='vertical'
            variant='middle'
            sx={{ height: 'auto' }}
        />
    </>
);

const CustomBottomNavigation: FC = () => {
    const [value, setValue] = useState<NavigationValue>(
        NavigationValue.Settings,
    );

    const handleChange = (event: SyntheticEvent, newValue: NavigationValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation showLabels value={value} onChange={handleChange}>
            <BottomNavigationAction
                label={'Settings'}
                icon={<Cog6ToothIcon strokeWidth={1} width={28} height={28} />}
            />
            <Divider
                orientation='vertical'
                variant='middle'
                sx={{ height: 'auto' }}
            />
            <BottomNavigationAction
                label={'Cards'}
                icon={
                    <RectangleStackIcon
                        strokeWidth={1}
                        width={28}
                        height={28}
                    />
                }
            />
            <Divider
                orientation='vertical'
                variant='middle'
                sx={{ height: 'auto' }}
            />
            <BottomNavigationAction
                label={'Boards'}
                icon={
                    <RectangleGroupIcon
                        strokeWidth={1}
                        width={28}
                        height={28}
                    />
                }
            />
            <Divider
                orientation='vertical'
                variant='middle'
                sx={{ height: 'auto' }}
            />
            <BottomNavigationAction
                label={'Home'}
                icon={<HomeIcon strokeWidth={1} width={28} height={28} />}
            />
        </BottomNavigation>
    );
};

export default CustomBottomNavigation;
