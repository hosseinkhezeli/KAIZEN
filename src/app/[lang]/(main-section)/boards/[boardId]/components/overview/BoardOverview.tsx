import { FC } from 'react';
import { Stack, Typography } from '@mui/material';

import BoardOverviewCard from '@/app/[lang]/(main-section)/boards/[boardId]/components/overview/BoardOverviewCard';
import useBoardOverview from '@/app/[lang]/(main-section)/boards/[boardId]/hooks/useBoardOverview';
import BoardOverviewMembers from '@/app/[lang]/(main-section)/boards/[boardId]/components/overview/BoardOverviewMembers';
import {
    ChartBarIcon,
    ClipboardIcon,
    IdentificationIcon,
    InformationCircleIcon,
    PresentationChartLineIcon,
    TagIcon,
} from '@heroicons/react/24/outline';
import Box from '@mui/material/Box';
import ActivityChart from '@/app/[lang]/(main-section)/boards/[boardId]/components/overview/BoardActivityChart';
import { deepPurple } from '@mui/material/colors';
import BoardLabelsSticker from '@/app/[lang]/(main-section)/boards/[boardId]/components/overview/BoardLabels&Sticker';
import { Theme } from '@mui/material/styles';
import { BoardOverviewStatus } from '@/app/[lang]/(main-section)/boards/[boardId]/components/overview/BoardOverviewStatus';

type TBoardOverview = {
    boardInfo?: IBoard;
};

const BoardOverview: FC<TBoardOverview> = ({ boardInfo }) => {
    const { BasicInformationDescription } = useBoardOverview({ boardInfo });

    return (
        <Stack
            display={'grid'}
            gridTemplateColumns={'repeat(4,calc(25% - 12px))'}
            gridTemplateRows={'repeat(2,1fr)'}
            sx={{
                gridAutoFlow: 'dense',
                width: '100%',
                gridTemplateRows: '250px',
                overflowY: 'auto',
                gridAutoRows: 'minmax(100px, 250px)',
            }}
            height={'100%'}
            gap={2}
        >
            <BoardOverviewCard
                title={
                    <Box display={'flex'} alignItems={'flex-start'} gap={1}>
                        <InformationCircleIcon width={20} height={20} />
                        Basic Information
                    </Box>
                }
                descriptionArr={BasicInformationDescription}
            />

            <BoardOverviewCard
                title={
                    <Box display={'flex'} alignItems={'flex-start'} gap={1}>
                        <PresentationChartLineIcon width={20} height={20} />
                        Activities
                    </Box>
                }
                background={({ palette }) => palette.background.paper}
                wrapperProps={{
                    style: { gridColumn: 'span 2' },
                    sx: { background: ({ palette }) => palette.divider },
                }}
            >
                <ActivityChart data={boardInfo?.activity} />
                <Typography color={'text.disabled'} variant={'caption'}>
                    hint: you can trace the days that an activity happens.
                </Typography>
            </BoardOverviewCard>
            <BoardOverviewCard
                title={
                    <Box display={'flex'} alignItems={'flex-start'} gap={1}>
                        <ChartBarIcon width={20} height={20} />
                        Board&apos;s Status
                    </Box>
                }
                background={({ palette }) => palette.background.paper}
                wrapperProps={{
                    style: {
                        gridColumn: 'span 2',
                    },
                    sx: { background: ({ palette }) => palette.divider },
                }}
            >
                <BoardOverviewStatus boardInfo={boardInfo} />
            </BoardOverviewCard>
            <BoardOverviewCard
                title={
                    <Box display={'flex'} alignItems={'flex-start'} gap={1}>
                        <IdentificationIcon width={20} height={20} />
                        Members
                    </Box>
                }
                background={(theme: Theme) => theme.palette.background.default}
                wrapperProps={{
                    style: {
                        gridRow: 'span 2',
                    },
                    sx: { background: ({ palette }) => palette.divider },
                }}
            >
                <BoardOverviewMembers members={boardInfo?.members} />
            </BoardOverviewCard>
            <BoardOverviewCard
                title={
                    <Box display={'flex'} alignItems={'flex-start'} gap={1}>
                        <TagIcon width={20} height={20} />
                        Tags & Stickers
                    </Box>
                }
            >
                <BoardLabelsSticker
                    stickers={boardInfo?.stickers}
                    labels={boardInfo?.labels}
                />
            </BoardOverviewCard>
        </Stack>
    );
};

export default BoardOverview;
