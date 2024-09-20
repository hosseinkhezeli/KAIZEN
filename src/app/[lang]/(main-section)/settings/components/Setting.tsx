'use client';
//@Mui
import { Container, Stack } from '@mui/material';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//@Hooks & Components
import useSetting from '@/app/[lang]/(main-section)/settings/hooks/useSetting';
import SettingList from '@/app/[lang]/(main-section)/settings/components/SettingList';
import CustomCard from '@components/custom-card/CustomCard';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Setting = () => {
    const { settingMenuList, selectedItem, onClickHandle, HEADER_HEIGHT } =
        useSetting();
    return (
        <Stack
            sx={{
                height: `calc(100vh - ${(HEADER_HEIGHT ?? 0) * 4}px)`,
                borderTop: '1px solid',
                borderColor: 'divider',
                flexGrow: 1,
                py: '2rem',
            }}
        >
            <Container
                sx={{
                    gap: 2,
                    flexGrow: 1,
                    display: 'flex',
                    border: '1px solid',
                    padding: '20px 16px',
                    borderColor: ({ palette }) => palette.grey[700],
                    borderRadius: '24px',
                    backgroundColor: ({ palette }) => palette.background.paper,
                }}
            >
                <CustomCard
                    outerBoxProps={{
                        sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            flexBasis: '30%',
                            height: '100%',
                        },
                    }}
                >
                    <SettingList
                        settingMenuList={settingMenuList}
                        selectedItem={selectedItem}
                        onClickHandle={onClickHandle}
                    />
                </CustomCard>

                <Stack
                    flexGrow={1}
                    gap={2}
                    sx={{
                        boxSizing: 'border-box',
                        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
                        marginTop: `${HEADER_HEIGHT}px`,
                        borderRadius: '24px',
                        border: '1px solid',
                        padding: '24px 30px',
                        borderColor: 'divider',
                    }}
                    bgcolor={({ palette }) => palette.background.paper}
                >
                    {selectedItem?.component?.()}
                </Stack>
            </Container>
        </Stack>
    );
};
