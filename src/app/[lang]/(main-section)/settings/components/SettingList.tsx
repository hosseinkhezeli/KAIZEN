//@3rd Party
import { FC } from 'react';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
} from '@mui/material';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { TSettingMenuList } from '@/app/[lang]/(main-section)/settings/hooks/useSetting';
type TSettingList = {
    selectedItem: TSettingMenuList | null;
    settingMenuList: TSettingMenuList[];
    onClickHandle: (item: TSettingMenuList) => void;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const SettingList: FC<TSettingList> = ({
    selectedItem,
    settingMenuList,
    onClickHandle,
}) => {
    const settingSections = [
        {
            title: 'Profile',
            settingItems: settingMenuList.slice(0, 2),
        },
        {
            title: 'Preferences',
            settingItems: settingMenuList.slice(2),
        },
    ];
    return (
        <>
            <Typography variant={'h4'} fontWeight={500}>
                Setting
            </Typography>
            <Stack
                sx={{
                    flexGrow: 1,
                    borderRadius: '24px',
                    border: '1px solid',
                    padding: '12px 16px',
                    borderColor: 'grey.800',
                    backgroundColor: ({ palette }) => palette.background.paper,
                }}
            >
                <List sx={{ gap: 1 }}>
                    {settingSections?.map((setting, idx) => (
                        <>
                            <Typography
                                variant={'caption'}
                                fontWeight={400}
                                color={'text.disabled'}
                            >
                                {setting.title}
                            </Typography>
                            <Divider
                                sx={{
                                    borderColor: 'grey.A400',
                                }}
                            />
                            {setting?.settingItems?.map((settingItem, idx) => (
                                <ListItem key={idx}>
                                    <ListItemButton
                                        sx={{ gap: 1 }}
                                        onClick={() =>
                                            onClickHandle(settingItem)
                                        }
                                        className={
                                            selectedItem?.label ===
                                            settingItem.label
                                                ? 'selected'
                                                : ''
                                        }
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: '20px',
                                                width: '20px',
                                            }}
                                            className={
                                                selectedItem?.label ===
                                                settingItem.label
                                                    ? 'selected'
                                                    : ''
                                            }
                                        >
                                            <settingItem.icon
                                                stroke={'inherit'}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={settingItem.label}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </>
                    ))}
                </List>
            </Stack>
        </>
    );
};

export default SettingList;
