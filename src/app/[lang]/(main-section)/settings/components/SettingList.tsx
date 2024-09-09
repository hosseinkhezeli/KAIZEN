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
    return (
        <>
            <Typography variant={'h4'} fontWeight={500}>
                Setting
            </Typography>
            <Stack
                sx={{
                    height: '100%',
                    borderRadius: '8px',
                    border: '1px solid',
                    padding: '8px 16px',
                    borderColor: 'text.secondary',
                }}
                bgcolor={({ palette }) => palette.background.paper}
            >
                <List sx={{ gap: 1 }}>
                    <Typography
                        variant={'caption'}
                        fontWeight={400}
                        color={'grey.600'}
                    >
                        Profile
                    </Typography>
                    <Divider
                        sx={{
                            borderStyle: 'dotted',
                            borderBottomWidth: '2px',
                        }}
                    />
                    {settingMenuList.slice(0, 2).map((settingItem, idx) => (
                        <ListItem key={idx}>
                            <ListItemButton
                                sx={{ gap: 1 }}
                                onClick={() => onClickHandle(settingItem)}
                            >
                                <ListItemIcon
                                    sx={{ minWidth: '20px', width: '20px' }}
                                    className={
                                        selectedItem?.label ===
                                        settingItem.label
                                            ? 'selected'
                                            : ''
                                    }
                                >
                                    <settingItem.icon stroke={'inherit'} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={settingItem.label}
                                    className={
                                        selectedItem?.label ===
                                        settingItem.label
                                            ? 'selected'
                                            : ''
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}

                    <Typography
                        variant={'caption'}
                        fontWeight={400}
                        color={'grey.600'}
                    >
                        Preferences
                    </Typography>
                    <Divider
                        sx={{
                            borderStyle: 'dotted',
                            borderBottomWidth: '2px',
                        }}
                    />
                    {settingMenuList.slice(2, 4).map((settingItem, idx) => (
                        <ListItem key={idx}>
                            <ListItemButton
                                sx={{ gap: 1 }}
                                onClick={() => onClickHandle(settingItem)}
                            >
                                <ListItemIcon
                                    sx={{ minWidth: '20px', width: '20px' }}
                                    className={
                                        selectedItem?.label ===
                                        settingItem.label
                                            ? 'selected'
                                            : ''
                                    }
                                >
                                    <settingItem.icon stroke={'inherit'} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={settingItem.label}
                                    className={
                                        selectedItem?.label ===
                                        settingItem.label
                                            ? 'selected'
                                            : ''
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Stack>
        </>
    );
};

export default SettingList;
