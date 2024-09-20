import { FC } from 'react';
import EventCardLoading from '@/app/[lang]/(main-section)/components/overview/components/EventCard/EventCardLoading';
import EventCardLoaded from '@/app/[lang]/(main-section)/components/overview/components/EventCard/EventCardLoaded';
import { useEventCard } from '@/app/[lang]/(main-section)/components/overview/components/EventCard/hooks/useEventCard';

type TEventCardProps = {
    boardInfo?: IGetDashboardData[];
    isLoadingBoard?: boolean;
};

const EventCard: FC<TEventCardProps> = ({ boardInfo, isLoadingBoard }) => {
    const { page } = useEventCard();

    return (
        <>
            {isLoadingBoard ? (
                <EventCardLoading />
            ) : (
                <EventCardLoaded
                    boardInfo={boardInfo?.[page]}
                    page={page}
                    key={page}
                />
            )}
        </>
    );
};
export default EventCard;
