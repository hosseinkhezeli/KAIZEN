'use client';
//@3rd Party
import { useState } from 'react';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Components
import CustomAppbar from '@components/custom-app-bar/CustomAppbar';
import CustomXsDrawer from '@components/custom-drawer/CustomXSDrawer';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const KaizenAppBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    return (
        <>
            <CustomAppbar onClick={toggleDrawer} />
            <CustomXsDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
        </>
    );
};

export default KaizenAppBar;
