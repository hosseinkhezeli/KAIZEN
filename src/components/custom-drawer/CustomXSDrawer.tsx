import { FC } from 'react';
import { Drawer, DrawerProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const CustomXsDrawer: FC<DrawerProps> = ({ children, sx, ...rest }) => {
    const { direction } = useTheme();

    return (
        <Drawer
            {...rest}
            anchor={direction === 'rtl' ? 'left' : 'right'}
            variant='temporary'
            sx={[
                {
                    display: { xs: 'flex', md: 'none' },
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            Menu
        </Drawer>
    );
};

export default CustomXsDrawer;
