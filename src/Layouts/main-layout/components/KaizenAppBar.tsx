'use client';
//@3rd Party
import { useState } from 'react';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Components
import CustomAppbar from '@components/custom-app-bar/CustomAppbar';
import CustomXsDrawer from '@components/custom-drawer/CustomXSDrawer';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import CustomMdDrawer from '@components/custom-drawer/CustomMdDrawer';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const KaizenAppBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open?: boolean) => {
        setDrawerOpen(open || !drawerOpen);
    };
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            {isSmallScreen ? (
                <>
                    <CustomAppbar onClick={() => toggleDrawer(!drawerOpen)} />
                    <CustomXsDrawer
                        open={drawerOpen}
                        onClose={() => toggleDrawer(false)}
                    />
                </>
            ) : (
                <>
                    <CustomMdDrawer
                        open={drawerOpen}
                        onToggleHandle={toggleDrawer}
                        onClose={() => toggleDrawer(false)}
                        // onMouseEnter={() => toggleDrawer(true)}
                    />
                </>
            )}
        </>
    );
};

export default KaizenAppBar;
