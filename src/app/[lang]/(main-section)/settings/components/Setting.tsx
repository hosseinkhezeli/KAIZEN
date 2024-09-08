'use client';
import React from 'react';
import {
    Container,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
} from '@mui/material';
import {
    FingerPrintIcon,
    LanguageIcon,
    PaintBrushIcon,
    UserIcon,
} from '@heroicons/react/24/outline';

export const Setting = () => {
    return (
        <Container sx={{ display: 'flex', height: '100%' }}>
            <Stack sx={{ flexBasis: '30%' }}>
                <Typography variant={'h4'} fontWeight={400}>
                    Setting
                </Typography>
                <Stack
                    sx={{
                        height: '100%',
                        borderRadius: '8px',
                        border: '1px solid',
                        padding: '8px 16px',
                        borderColor: ({ palette }) => palette.grey[300] + '33',
                    }}
                    bgcolor={({ palette }) => palette.grey[800]}
                >
                    <List>
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
                        <ListItem sx={{ padding: '0px 16px' }}>
                            <ListItemButton sx={{ gap: 1 }}>
                                <ListItemIcon
                                    sx={{ minWidth: '20px', width: '20px' }}
                                >
                                    <UserIcon width={20} />
                                </ListItemIcon>
                                <ListItemText primary={'Edit Profile'} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ padding: '0px 16px' }}>
                            <ListItemButton sx={{ gap: 1 }}>
                                <ListItemIcon
                                    sx={{ minWidth: '20px', width: '20px' }}
                                >
                                    <FingerPrintIcon width={20} />
                                </ListItemIcon>
                                <ListItemText primary={'Security'} />
                            </ListItemButton>
                        </ListItem>
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
                        <ListItem sx={{ padding: '0px 16px' }}>
                            <ListItemButton sx={{ gap: 1 }}>
                                <ListItemIcon
                                    sx={{ minWidth: '20px', width: '20px' }}
                                >
                                    <PaintBrushIcon width={20} />
                                </ListItemIcon>
                                <ListItemText primary={'Theme'} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ padding: '0px 16px' }}>
                            <ListItemButton sx={{ gap: 1 }}>
                                <ListItemIcon
                                    sx={{ minWidth: '20px', width: '20px' }}
                                >
                                    <LanguageIcon width={20} />
                                </ListItemIcon>
                                <ListItemText primary={'Language'} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Stack>
            </Stack>
            <Stack flexGrow={1} sx={{ height: '100%' }}>
                Content
            </Stack>
        </Container>
    );
};
