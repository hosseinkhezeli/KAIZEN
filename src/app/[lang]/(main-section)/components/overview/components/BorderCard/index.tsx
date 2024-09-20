import { FC } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Locale } from '@/i18n';
import BoardCardLoading from './BoardCardLoading';
import BoardCardLoaded from './BoardCardLoaded';

interface BoardCardProps {
    boardInfo?: IGetDashboardData;
    isLoadingBoard?: boolean;
    idx?: number;
}

const Index: FC<BoardCardProps> = ({ boardInfo, isLoadingBoard, idx }) => {
    const { lang } = useParams<{ lang: Locale }>();
    const { push: navigateTo } = useRouter();

    const handleClick = () => {
        if (boardInfo) {
            navigateTo(`${lang}/boards/${boardInfo.id}`);
        }
    };

    if (isLoadingBoard) {
        return <BoardCardLoading idx={idx ?? 0} />;
    }

    return <BoardCardLoaded boardInfo={boardInfo} onClick={handleClick} />;
};

export default Index;
