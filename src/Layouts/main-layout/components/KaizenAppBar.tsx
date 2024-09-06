'use client';
//@3rd Party
import { FC, useState } from 'react';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Components
import CustomAppbar from '@components/custom-app-bar/CustomAppbar';
import CustomXsDrawer from '@components/custom-drawer/CustomXSDrawer';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import CustomMdDrawer from '@components/custom-drawer/CustomMdDrawer';
import { TGlobal } from '@i18n/dictionary/types/global';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type TKaizenAppBar = {
    dictionary: TGlobal;
};
const KaizenAppBar: FC<TKaizenAppBar> = ({ dictionary }) => {
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
                        dictionary={dictionary}
                        // onMouseEnter={() => toggleDrawer(true)}
                    />
                </>
            )}
        </>
    );
};

export default KaizenAppBar;
