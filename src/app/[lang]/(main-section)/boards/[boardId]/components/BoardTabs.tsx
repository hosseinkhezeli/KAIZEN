'use client';
import React, { ReactNode, SyntheticEvent, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Tab, Tabs } from '@mui/material';
import { PlusIcon } from '@heroicons/react/24/outline';
interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
}
function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`board-tabpanel-${index}`}
            aria-labelledby={`board-tab-${index}`}
            {...other}
        >
            {value === index && children}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `board-tab-${index}`,
        'aria-controls': `board-tabpanel-${index}`,
    };
}
const BoardTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'baseline'}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label='board tabs'
                >
                    <Tab label='Overview' {...a11yProps(0)} />
                    <Tab label='Kanban' {...a11yProps(1)} />
                    <Tab label='Activities' {...a11yProps(2)} />
                </Tabs>
                <Button endIcon={<PlusIcon width={'16px'} />} color={'info'}>
                    Add Task
                </Button>
            </Box>
            <CustomTabPanel value={value} index={0}>
                Item One
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Box>
    );
};

export default BoardTabs;
