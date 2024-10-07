import { DndContext } from '@dnd-kit/core';
import { KanbanColumn } from '@/app/[lang]/(main-section)/boards/[boardId]/components/kanban/KanbanColumn';
import Box from '@mui/material/Box';
import { Snackbar } from '@mui/material';
import { useKanban } from '@/app/[lang]/(main-section)/boards/[boardId]/hooks/useKanban';

export type TKanban = {
    columns: IBoardColumn[] | undefined;
};

export function Kanban({ columns }: TKanban) {
    const { uiColumns, handleDragOver, handleCloseNotification, notification } =
        useKanban({
            columns,
        });
    return (
        <DndContext onDragEnd={handleDragOver}>
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    pb: 4,
                    gap: 2,
                    overflow: 'auto',
                }}
            >
                {uiColumns?.map((column) => (
                    <KanbanColumn key={column.id} column={column} />
                ))}
            </Box>
            <Snackbar
                open={notification.open}
                onClose={handleCloseNotification}
                message={notification.message}
                color={notification.variant}
            />
        </DndContext>
    );
}
