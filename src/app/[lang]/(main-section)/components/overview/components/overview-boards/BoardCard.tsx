import { BoardCardLoading } from './BoardCardLoading';
import { BoardCardLoaded } from './BoardCardLoaded';

interface BoardCardProps {
    boardInfo?: IGetDashboardData;
    isLoadingBoard?: boolean;
    idx?: number;
}

export function BoardCard({ boardInfo, isLoadingBoard, idx }: BoardCardProps) {
    if (isLoadingBoard) {
        return <BoardCardLoading idx={idx ?? 0} />;
    }

    return <BoardCardLoaded boardInfo={boardInfo} />;
}
