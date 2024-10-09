'use client';

//@Components & Hooks
import useBoard from '@/app/[lang]/(main-section)/boards/[boardId]/hooks/useBoard';
import { Container, LinearProgress } from '@mui/material';
import BoardHeader from '@/app/[lang]/(main-section)/boards/[boardId]/components/BoardHeader';
import BoardTabs from '@/app/[lang]/(main-section)/boards/[boardId]/components/BoardTabs';
// ___________________________________________________________________

export function Board({ boardId }: { boardId: string }) {
    const { isLoadingBoard, boardTitle, members, boardRes, bgImageUrl } =
        useBoard(boardId);
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                height: '100%',
            }}
        >
            <BoardHeader
                boardTitle={boardTitle}
                members={members}
                bgImageUrl={bgImageUrl}
            />
            <BoardTabs boardInfo={boardRes} />
            {isLoadingBoard && (
                <LinearProgress
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        zIndex: 9999,
                    }}
                />
            )}
        </Container>
    );
}
