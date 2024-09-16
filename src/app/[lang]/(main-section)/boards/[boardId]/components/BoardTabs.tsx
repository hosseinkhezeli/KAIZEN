'use client';
import React, { FC, ReactNode, SyntheticEvent, useState } from 'react';
import Box from '@mui/material/Box';
import { Stack, Tab, Tabs } from '@mui/material';
import BoardOverview from '@/app/[lang]/(main-section)/boards/[boardId]/components/BoardOverview';
import { Properties } from 'csstype';
import BoardColumn from '@/app/[lang]/(main-section)/boards/[boardId]/components/BoardColumn';
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
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
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
                    <Tab label='Overview' {...a11yProps(0)} />
                    <Tab label='Kanban' {...a11yProps(1)} />
                    <Tab label='Activities' {...a11yProps(2)} />
                </Tabs>
            </Box>
            {/*<CustomTabPanel value={value} index={0}>*/}
            {/*    <BoardOverview boardInfo={boardInfo} />*/}
            {/*</CustomTabPanel>*/}
            {/*<CustomTabPanel value={value} index={1}>*/}
            {/*    <BoardColumn />*/}
            {/*</CustomTabPanel>*/}
            {/*<CustomTabPanel value={value} index={2}>*/}
            {/*    Item Three*/}
            {/*</CustomTabPanel>*/}
        </Stack>
    );
};

export default BoardTabs;
