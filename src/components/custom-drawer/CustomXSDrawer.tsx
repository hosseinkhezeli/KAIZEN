//@3rd Party
import { FC } from 'react';
//______________________________________________________________

//@Mui
import { Drawer, DrawerProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
//______________________________________________________________
const CustomXsDrawer: FC<DrawerProps> = ({ children, sx, ...rest }) => {
    const { direction } = useTheme();

    return (
        <Drawer
            {...rest}
            anchor={direction === 'rtl' ? 'left' : 'right'}
            variant='temporary'
            keepMounted={false}
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
