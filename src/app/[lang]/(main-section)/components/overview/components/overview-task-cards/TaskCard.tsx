import React from 'react';
import { TaskCardLoading } from '@/app/[lang]/(main-section)/components/overview/components/overview-task-cards/TaskCardLoading';
import { TaskCardLoaded } from '@/app/[lang]/(main-section)/components/overview/components/overview-task-cards/TaksCardLoaded';

export function TaskCard({
    cardInfo,
    isLoadingCard,
    idx,
}: {
    cardInfo: ICard | undefined;
    isLoadingCard: boolean;
    idx: number;
}) {
    if (isLoadingCard) {
        return <TaskCardLoading idx={idx ?? 0} />;
    } else {
        return <TaskCardLoaded cardInfo={cardInfo} />;
    }
}
