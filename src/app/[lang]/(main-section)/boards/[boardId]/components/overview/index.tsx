'use client';
//@3rd Party
import { FC } from 'react';
//_______________________________________________________________

//@MUI
import { Stack, Typography, Box, styled } from '@mui/material';
import { Theme } from '@mui/material/styles';
//_______________________________________________________________

//@Assets
import {
    ChartBarIcon,
    IdentificationIcon,
    InformationCircleIcon,
    PresentationChartLineIcon,
    TagIcon,
} from '@heroicons/react/24/outline';
//_______________________________________________________________

//@Components
import BoardOverviewCard from './BoardOverviewCard';
import useBoardOverview from '../../hooks/useBoardOverview';
import BoardOverviewMembers from './BoardOverviewMembers';
import { ActivityChart } from './BoardActivityChart';
import BoardLabelsSticker from './BoardLabels&Sticker';
import { BoardOverviewStatus } from './BoardOverviewStatus';

//_______________________________________________________________

//@Types
type TBoardOverview = {
    boardInfo?: IBoard;
};
//_______________________________________________________________
export function BoardOverview({ boardInfo }: TBoardOverview) {
    const { BasicInformationDescription } = useBoardOverview({ boardInfo });
    const overviewCards = [
        {
            icon: InformationCircleIcon,
            title: 'Basic Information',
            content: (
                <BasicInformation description={BasicInformationDescription} />
            ),
        },
        {
            icon: PresentationChartLineIcon,
            title: 'Activities',
            content: <Activities boardInfo={boardInfo} />,
            wrapperProps: twoColumnWrapperProps,
        },
        {
            icon: ChartBarIcon,
            title: "Board's Status",
            content: <BoardOverviewStatus boardInfo={boardInfo} />,
            wrapperProps: twoColumnWrapperProps,
        },
        {
            icon: IdentificationIcon,
            title: 'Members',
            content: <BoardOverviewMembers members={boardInfo?.members} />,
            wrapperProps: twoRowWrapperProps,
        },
        {
            icon: TagIcon,
            title: 'Tags & Stickers',
            content: (
                <BoardLabelsSticker
                    stickers={boardInfo?.stickers}
                    labels={boardInfo?.labels}
                />
            ),
        },
    ];
    return (
        <Container>
            {overviewCards?.map((card, idx) => (
                <OverviewCard key={card.title + idx} {...card} />
            ))}
        </Container>
    );
}

const Container = styled(Stack)(() => ({
    gridAutoFlow: 'dense',
    width: '100%',
    gridTemplateRows: '250px',
    overflowY: 'auto',
    gridAutoRows: 'minmax(100px, 250px)',
    gap: 8,
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, calc(25% - 12px))',
}));

const OverviewCard: FC<{
    icon: React.ElementType;
    title: string;
    content: React.ReactNode;
    wrapperProps?: object;
}> = ({ icon, title, content, wrapperProps }) => (
    <BoardOverviewCard
        title={<CardTitle icon={icon} text={title} />}
        wrapperProps={wrapperProps}
    >
        {content}
    </BoardOverviewCard>
);
const Activities: FC<{ boardInfo?: IBoard }> = ({ boardInfo }) => (
    <>
        <ActivityChart data={boardInfo?.activity} />
        <Typography color='text.disabled' variant='caption'>
            hint: you can trace the days that an activity happens.
        </Typography>
    </>
);

const CardTitle: FC<{ icon: any; text: string }> = ({ icon: Icon, text }) => (
    <Box display='flex' alignItems='flex-start' gap={1}>
        <Icon width={20} height={20} />
        {text}
    </Box>
);
const twoColumnWrapperProps = {
    style: { gridColumn: 'span 2' },
    sx: { background: ({ palette }: Theme) => palette.divider },
};

const twoRowWrapperProps = {
    style: { gridRow: 'span 2' },
    sx: { background: ({ palette }: Theme) => palette.divider },
};
const BasicInformation: FC<{ description: any }> = ({ description }) => (
    <>{description}</>
);
