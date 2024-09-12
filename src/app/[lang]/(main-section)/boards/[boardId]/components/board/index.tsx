'use client';

import useBoard from '@/app/[lang]/(main-section)/boards/[boardId]/hooks/useBoard';
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Container,
    LinearProgress,
    Typography,
} from '@mui/material';
import { PlusIcon, UserIcon } from '@heroicons/react/24/outline';
import React from 'react';
import BoardHeader from '@/app/[lang]/(main-section)/boards/[boardId]/components/BoardHeader';
import BoardTabs from '@/app/[lang]/(main-section)/boards/[boardId]/components/BoardTabs';

const Board = ({ boardId }: { boardId: string }) => {
    const { isLoadingBoard, boardTitle, members } = useBoard(boardId);
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <BoardHeader boardTitle={boardTitle} members={members} />
            <BoardTabs />
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
};

export default Board;
