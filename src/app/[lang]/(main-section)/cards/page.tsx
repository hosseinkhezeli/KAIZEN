'use client';
import React from 'react';
import Box from '@mui/material/Box';
import { Button, Divider, Menu, MenuItem, Typography } from '@mui/material';
import {
    ChevronDownIcon,
    InformationCircleIcon,
} from '@heroicons/react/24/outline';
import CustomCard from '@components/custom-card/CustomCard';
import BoardTabs from '@/app/[lang]/(main-section)/boards/[boardId]/components/BoardTabs';

const Cards = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div style={{ backgroundColor: 'black', height: '100%', padding: 24 }}>
            <CustomCard>
                <>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography color={'#FAFAFA'}>Overview</Typography>
                        <InformationCircleIcon
                            stroke={'#717375'}
                            width={32}
                            strokeWidth={1.5}
                        />
                    </Box>
                    This is a box with a gradient border and rounded corners!
                    <Button
                        id='demo-customized-button'
                        aria-controls={
                            open ? 'demo-customized-menu' : undefined
                        }
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        variant='contained'
                        className={'rounded'}
                        onClick={handleClick}
                        endIcon={
                            <ChevronDownIcon
                                stroke={'#717375'}
                                width={12}
                                strokeWidth={2}
                                style={{
                                    transform: open ? 'rotate(180deg)' : 'none',
                                    transition: '0.2s ease transform',
                                }}
                            />
                        }
                    >
                        Options
                    </Button>
                    <BoardTabs boardInfo={undefined} />
                    This is a box with a gradient border and rounded corners!
                    This is a box with a gradient border and rounded corners!
                    This is a box with a gradient border and rounded corners!
                    This is a box with a gradient border and rounded corners! v
                    This is a box with a gradient border and rounded corners!
                    This is a box with a gradient border and rounded corners!
                    This is a box with a gradient border and rounded corners!
                    This is a box with a gradient border and rounded corners!
                    <Menu
                        id='demo-customized-menu'
                        MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} disableRipple>
                            <InformationCircleIcon
                                stroke={'#717375'}
                                width={32}
                                strokeWidth={1.5}
                            />
                            Edit
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            <InformationCircleIcon
                                stroke={'#717375'}
                                width={32}
                                strokeWidth={1.5}
                            />
                            Duplicate
                        </MenuItem>
                        <Divider sx={{ my: 0.5 }} />
                        <MenuItem onClick={handleClose} disableRipple>
                            <InformationCircleIcon
                                stroke={'#717375'}
                                width={32}
                                strokeWidth={1.5}
                            />
                            Archive
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            <InformationCircleIcon
                                stroke={'#717375'}
                                width={32}
                                strokeWidth={1.5}
                            />
                            More
                        </MenuItem>
                    </Menu>
                </>
            </CustomCard>
        </div>
    );
};

export default Cards;
