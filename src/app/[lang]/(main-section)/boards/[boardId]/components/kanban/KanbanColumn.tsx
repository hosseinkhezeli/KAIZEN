'use client';
//@3rd Party
import { useDroppable } from '@dnd-kit/core';
// ___________________________________________________________________

//@Mui
import { Button, Stack, styled, Typography } from '@mui/material';
// ___________________________________________________________________

//@Components
import { KanbanTaskCard } from '@/app/[lang]/(main-section)/boards/[boardId]/components/kanban/KanbanTaskCard';
import { PlusIcon } from '@heroicons/react/24/outline';
import React from 'react';
// ___________________________________________________________________

//@Types
type TKanbanColumn = {
    column: IBoardColumn | undefined;
};
// ___________________________________________________________________

export function KanbanColumn({ column }: TKanbanColumn) {
    const { isOver, setNodeRef } = useDroppable({
        id: column?.id || 'droppable',
        data: { index: column?.position },
    });

    const style = {
        borderColor: isOver ? 'primary.light' : 'divider',
    };
    return (
        <Column order={column?.position}>
            <ColumnTitle>{column?.title}</ColumnTitle>
            <ColumnCardContainer
                ref={setNodeRef}
                sx={{
                    ...style,
                }}
            >
                <Button
                    variant={'outlined'}
                    startIcon={<PlusIcon width={18} />}
                    fullWidth
                    sx={{
                        borderStyle: 'dashed',
                    }}
                />
                {column?.taskCards?.map((card, idx) => (
                    <KanbanTaskCard
                        card={card}
                        key={card.id + idx}
                        columnId={column.id}
                    />
                ))}
            </ColumnCardContainer>
        </Column>
    );
}

const Column = styled(Stack)(() => ({
    minWidth: 264,
    height: '100%',
    gap: 8,
}));

const ColumnTitle = styled(Typography)(({ theme }) => ({
    ...theme.typography['body2'],
}));

const ColumnCardContainer = styled(Stack)(() => ({
    height: '100%',
    border: '1px solid',
    borderRadius: 24,
    padding: 4,
    gap: 4,
    transition: 'ease 0.2s all',
    alignItems: 'center',
}));
