import { FC } from 'react';
import { Drawer, DrawerProps } from '@mui/material';

const CustomXsDrawer: FC<DrawerProps> = ({ children, sx, ...rest }) => {
    return (
        <Drawer
            {...rest}
            anchor='right'
            variant='temporary'
            sx={[
                {
                    display: { xs: 'flex', md: 'none' },
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        ></Drawer>
    );
};

export default CustomXsDrawer;
