'use client';
import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import {
    Cog6ToothIcon,
    HomeIcon,
    RectangleGroupIcon,
    RectangleStackIcon,
} from '@heroicons/react/24/outline';

const CustomBottomNavigation = () => {
    const [value, setValue] = React.useState(0);
    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label='Setting' icon={<Cog6ToothIcon />} />
            <BottomNavigationAction
                label='My Cards'
                icon={<RectangleStackIcon />}
            />
            <BottomNavigationAction
                label='Boards'
                icon={<RectangleGroupIcon />}
            />
            <BottomNavigationAction label='Home' icon={<HomeIcon />} />
        </BottomNavigation>
    );
};

export default CustomBottomNavigation;
