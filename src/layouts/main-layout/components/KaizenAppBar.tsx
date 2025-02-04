'use client';
//@3rd Party
import { FC, useState } from 'react';
//________________________________________________________

//@Components
import CustomAppbar from '@components/custom-app-bar/CustomAppbar';
import CustomXsDrawer from '@components/custom-drawer/CustomXSDrawer';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import CustomMdDrawer from '@components/custom-drawer/CustomMdDrawer';
//________________________________________________________

import { TGlobal } from '@i18n/dictionary/types/global';
type TKaizenAppBar = {
    dictionary: TGlobal;
};
const KaizenAppBar: FC<TKaizenAppBar> = ({ dictionary }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(!isSmallScreen);
    const toggleDrawer = (open?: boolean) => {
        setDrawerOpen(open || !drawerOpen);
    };
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
                        dictionary={dictionary}
                        sx={{ minWidth: 40 }}
                    />
                </>
            )}
        </>
    );
};

export default KaizenAppBar;
