import React, { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';

type TCustomCardProps = {
    children: ReactNode;
};

const CustomCard: FC<TCustomCardProps> = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'inline-block',
                padding: '1px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #434445,70%, #598fe1)',
                width: '100%',
                height: '100%',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    padding: '20px',
                    background:
                        'linear-gradient(135deg, #2c2e30 -25%, #1a1f24 25%, #1a1f24 50%, #16202d 75%, #192b45 125%)',
                    borderRadius: '24px',
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default CustomCard;
