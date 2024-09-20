import React, { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import { BoxProps } from '@mui/material';

type TCustomCardProps = {
    children: ReactNode;
    outerBoxProps?: BoxProps;
    innerBoxProps?: BoxProps;
};

const CustomCard: FC<TCustomCardProps> = ({
    children,
    outerBoxProps,
    innerBoxProps,
}) => {
    const { sx: outerSx, ...outerProps } = outerBoxProps ?? {};
    const { sx: innerSx, ...innerProps } = innerBoxProps ?? {};
    return (
        <Box
            {...outerProps}
            sx={[
                {
                    display: 'inline-block',
                    padding: '1px',
                    borderRadius: '24px',
                    background: ({ palette }) =>
                        `linear-gradient(135deg, ${palette.grey[600]},70%, ${palette.secondary.light})`,
                    width: '100%',
                    height: '100%',
                },
                ...(Array.isArray(outerSx) ? outerSx : [outerSx]),
            ]}
        >
            <Box
                {...innerProps}
                sx={[
                    {
                        width: '100%',
                        height: '100%',
                        padding: '20px',
                        background: ({ palette }) =>
                            `linear-gradient(135deg, ${palette.grey[800]} -25%, ${palette.grey[900]} 25%, ${palette.grey[900]} 50%, ${palette.grey[900]} 75%, ${palette.secondary.dark} 125%)`,
                        borderRadius: '24px',
                    },
                    ...(Array.isArray(innerSx) ? innerSx : [innerSx]),
                ]}
            >
                {children}
            </Box>
        </Box>
    );
};

export default CustomCard;
