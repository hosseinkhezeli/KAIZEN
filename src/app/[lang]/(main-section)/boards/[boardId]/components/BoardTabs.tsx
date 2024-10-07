'use client';
import React, { FC, ReactNode, SyntheticEvent, useState } from 'react';
import Box from '@mui/material/Box';
import { Stack, Tab, Tabs } from '@mui/material';
import { Properties } from 'csstype';
import { Kanban } from '@/app/[lang]/(main-section)/boards/[boardId]/components/kanban';
import { useQueryParams } from '@hooks/useQueryParams';
import BoardOverview from '@/app/[lang]/(main-section)/boards/[boardId]/components/overview';
interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
    style?: Properties<string | number, string & {}>;
}
function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, style, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`board-tabpanel-${index}`}
            aria-labelledby={`board-tab-${index}`}
            style={{ ...style, height: '100%', flexGrow: 1, width: '100%' }}
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
type TBoardTabs = {
    boardInfo?: IBoard;
};
const BoardTabs: FC<TBoardTabs> = ({ boardInfo }) => {
    const tabs = ['Overview', 'Kanban', 'Activities'];
    const { setQueryParam, searchParams } = useQueryParams();
    const value = tabs.findIndex((tab) => tab === searchParams?.get('view'));
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setQueryParam('view', tabs[newValue]);
    };
    return (
        <Stack sx={{ width: '100%', height: '100%', flexGrow: 1 }}>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'baseline'}
                mb={'1rem'}
                height={48}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label='board tabs'
                >
                    {tabs.map((tab, idx) => (
                        <Tab key={tab + idx} label={tab} {...a11yProps(idx)} />
                    ))}
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <BoardOverview boardInfo={boardInfo} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Kanban columns={boardInfo?.columns} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Stack>
    );
};

export default BoardTabs;
