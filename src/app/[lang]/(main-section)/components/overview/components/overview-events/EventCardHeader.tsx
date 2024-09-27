import React from 'react';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useEventCard } from '@/app/[lang]/(main-section)/components/overview/components/overview-events/hooks/useEventCard';

const EventCardHeader = ({
    totalCount,
}: {
    totalCount: number | undefined;
}) => {
    const { nextPage, prevPage, page } = useEventCard();

    return (
        <Box
            sx={{
                display: 'flex',
                height: 'min-content',
                alignSelf: 'end',
                gap: 0.5,
            }}
        >
            <IconButton onClick={prevPage} disabled={page === 0}>
                <ArrowLeftIcon width={14} strokeWidth={3} />
            </IconButton>
            <IconButton
                onClick={nextPage}
                disabled={page + 1 === (totalCount ?? 0)}
            >
                <ArrowRightIcon width={14} strokeWidth={3} />
            </IconButton>
        </Box>
    );
};
export default EventCardHeader;
