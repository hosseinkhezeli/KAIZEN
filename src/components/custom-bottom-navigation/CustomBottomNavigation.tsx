'use client';
import React, { useState } from 'react';
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

const CustomBottomNavigation = () => {
    const [value, setValue] = useState(0);
    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction
                label='Setting'
                icon={<Cog6ToothIcon strokeWidth={1} width={28} height={28} />}
            />
            <Divider orientation='vertical' variant={'middle'} />
            <BottomNavigationAction
                label='Cards'
                icon={
                    <RectangleStackIcon
                        strokeWidth={1}
                        width={28}
                        height={28}
                    />
                }
            />
            <Divider orientation='vertical' variant={'middle'} />

            <BottomNavigationAction
                label='Boards'
                icon={
                    <RectangleGroupIcon
                        strokeWidth={1}
                        width={28}
                        height={28}
                    />
                }
            />
            <Divider orientation='vertical' variant={'middle'} />

            <BottomNavigationAction
                label='Home'
                icon={<HomeIcon strokeWidth={1} width={28} height={28} />}
            />
        </BottomNavigation>
    );
};

export default CustomBottomNavigation;
