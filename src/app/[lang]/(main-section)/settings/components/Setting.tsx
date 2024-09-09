'use client';
//@Mui
import { Container, Stack } from '@mui/material';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//@Hooks & Components
import useSetting from '@/app/[lang]/(main-section)/settings/hooks/useSetting';
import SettingList from '@/app/[lang]/(main-section)/settings/components/SettingList';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Setting = () => {
    const { settingMenuList, selectedItem, onClickHandle } = useSetting();
    return (
        <Container
            sx={{
                gap: 2,
                display: 'flex',
                height: '100%',
                borderRadius: '8px',
                border: '1px solid',
                padding: '8px 16px',
                borderColor: ({ palette }) => palette.grey[300] + '33',
                backgroundColor: ({ palette }) => palette.grey[800],
            }}
        >
            <Stack sx={{ flexBasis: '30%' }}>
                <SettingList
                    settingMenuList={settingMenuList}
                    selectedItem={selectedItem}
                    onClickHandle={onClickHandle}
                />
            </Stack>
            <Stack
                flexGrow={1}
                gap={2}
                sx={{
                    height: '100%',
                    marginTop: '52px',
                    borderRadius: '8px',
                    border: '1px solid',
                    padding: '8px 16px',
                    borderColor: 'text.secondary',
                }}
                bgcolor={({ palette }) => palette.background.paper}
            >
                {selectedItem?.component?.()}
            </Stack>
        </Container>
    );
};
