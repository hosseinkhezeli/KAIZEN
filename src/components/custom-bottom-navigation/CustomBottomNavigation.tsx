'use client';

import React, { FC } from 'react';
import {
    BottomNavigation,
    BottomNavigationAction,
    Divider,
} from '@mui/material';
import { TGlobal } from '@i18n/dictionary/types/global';
import useCustomBottomNavigation from '@components/custom-bottom-navigation/useCustomBottomNavigation';

type TCustomBottomNavigation = {
    dictionary: TGlobal;
};

const CustomBottomNavigation: FC<TCustomBottomNavigation> = ({
    dictionary,
}) => {
    const { value, handleChange, direction, navigationItems, location } =
        useCustomBottomNavigation();
    const bNMaxWidth = 290;
    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={handleChange}
            dir={direction}
            sx={{
                transition: '0.3s ease all',
                maxWidth: { xs: bNMaxWidth, sm: bNMaxWidth + 20 },
                height: { xs: 56, sm: 62 },
                left: {
                    xs: `calc(50% - ${bNMaxWidth / 2}px)`,
                    sm: `calc(50% - ${(bNMaxWidth + 20) / 2}px)`,
                },
            }}
        >
            {navigationItems.map((item, idx) => (
                <React.Fragment key={item.href}>
                    <BottomNavigationAction
                        label={dictionary[item.id]}
                        icon={item.icon}
                        onClick={(e) => handleChange(e, item.id)}
                        showLabel
                        aria-label={dictionary[item.id]}
                        className={location === item.id ? 'Mui-selected' : ''}
                    />
                    {idx < navigationItems.length - 1 && (
                        <Divider
                            orientation='vertical'
                            variant='middle'
                            sx={{
                                height: 'auto',
                                borderColor: ({ palette }) =>
                                    palette.text.disabled + '55',
                            }}
                        />
                    )}
                </React.Fragment>
            ))}
        </BottomNavigation>
    );
};

export default CustomBottomNavigation;
