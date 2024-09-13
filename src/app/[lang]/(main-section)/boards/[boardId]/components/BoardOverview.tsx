import { FC } from 'react';
import { Stack } from '@mui/material';

import BoardOverviewCard from '@/app/[lang]/(main-section)/boards/[boardId]/components/BoardOverviewCard';
import useBoardOverview from '@/app/[lang]/(main-section)/boards/[boardId]/hooks/useBoardOverview';
import BoardOverviewMembers from '@/app/[lang]/(main-section)/boards/[boardId]/components/BoardOverviewMembers';
import {
    ChartBarIcon,
    ClipboardIcon,
    IdentificationIcon,
    InformationCircleIcon,
    PresentationChartLineIcon,
    TagIcon,
} from '@heroicons/react/24/outline';
import Box from '@mui/material/Box';
import ActivityChart from '@/app/[lang]/(main-section)/boards/[boardId]/components/BoardActivityChart';
import { deepPurple } from '@mui/material/colors';
import BoardLabelsSticker from '@/app/[lang]/(main-section)/boards/[boardId]/components/BoardLabels&Sticker';

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
                color={'primary.light'}
            />

            <BoardOverviewCard
                title={
                    <Box display={'flex'} alignItems={'flex-start'} gap={1}>
                        <PresentationChartLineIcon width={20} height={20} />
                        Activities
                    </Box>
                }
                wrapperProps={{
                    style: { gridColumn: 'span 2' },
                }}
                color={'success.light'}
            >
                <ActivityChart data={boardInfo?.activity} />
            </BoardOverviewCard>
            <BoardOverviewCard
                title={
                    <Box display={'flex'} alignItems={'flex-start'} gap={1}>
                        <ChartBarIcon width={20} height={20} />
                        Board&apos;s Status
                    </Box>
                }
                wrapperProps={{
                    style: {
                        gridColumn: 'span 2',
                    },
                }}
                color={'error.light'}
            ></BoardOverviewCard>
            <BoardOverviewCard
                title={
                    <Box display={'flex'} alignItems={'flex-start'} gap={1}>
                        <IdentificationIcon width={20} height={20} />
                        Members
                    </Box>
                }
                wrapperProps={{
                    style: {
                        gridRow: 'span 2',
                    },
                }}
                color={'secondary.light'}
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
                color={deepPurple.A200}
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
