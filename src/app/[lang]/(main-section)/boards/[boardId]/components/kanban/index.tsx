import { DndContext } from '@dnd-kit/core';
import { KanbanColumn } from '@/app/[lang]/(main-section)/boards/[boardId]/components/kanban/KanbanColumn';
import Box from '@mui/material/Box';
import { useMoveTaskCardColumn } from '@/services/api/task-card/hooks';
import { Snackbar } from '@mui/material';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

type TKanban = {
    columns: IBoardColumn[] | undefined;
};

export function Kanban({ columns }: TKanban) {
    const { mutate: moveTaskCardColumn } = useMoveTaskCardColumn();
    const [open, setOpen] = useState({ open: false, message: '', variant: '' });
    const QC = useQueryClient();
    const { boardId } = useParams<{ boardId: string }>();
    const handleClose = () => {
        setOpen({ open: false, message: '', variant: '' });
    };
    const handleDragOver = (event: any) => {
        console.log(event);
        const params: TMoveTaskCardBody = {
            cardId: event?.active?.data?.current?.id,
            originColumnId: event?.active?.data?.current?.columnId,
            destinationColumnId: event?.over?.id,
            boardId: boardId,
        };
        moveTaskCardColumn(params, {
            onSuccess: () => {
                // setOpen({message: "card"})
                QC.refetchQueries({ queryKey: ['get-board'] });
            },
            onError: () => {
                setOpen({
                    message: 'An error occurred',
                    variant: 'error',
                    open: true,
                });
            },
        });
    };
    return (
        <DndContext onDragEnd={handleDragOver}>
            <Box sx={{ height: '100%', display: 'flex', pb: 4, gap: 2 }}>
                {columns?.map((column) => (
                    <KanbanColumn key={column.id} column={column} />
                ))}
            </Box>
            <Snackbar
                open={open.open}
                onClose={handleClose}
                message={open.message}
                color={open.variant}
            />
        </DndContext>
    );
}
