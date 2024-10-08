//@3rd Party
import { DndContext } from '@dnd-kit/core';
// ___________________________________________________________________

//@Mui
import Box from '@mui/material/Box';
import { Snackbar, styled } from '@mui/material';
// ___________________________________________________________________

//@Components & hooks
import { KanbanColumn } from '@/app/[lang]/(main-section)/boards/[boardId]/components/kanban/KanbanColumn';
import { useKanban } from '@/app/[lang]/(main-section)/boards/[boardId]/hooks/useKanban';
// ___________________________________________________________________

//@Types
export type TKanban = {
    columns: IBoardColumn[] | undefined;
};
// ___________________________________________________________________

export function Kanban({ columns }: TKanban) {
    const { uiColumns, handleDragOver, handleCloseNotification, notification } =
        useKanban({
            columns,
        });
    return (
        <DndContext onDragEnd={handleDragOver}>
            <ColumnsContainer>
                {uiColumns?.map((column) => (
                    <KanbanColumn key={column.id} column={column} />
                ))}
            </ColumnsContainer>
            <Snackbar
                open={notification.open}
                onClose={handleCloseNotification}
                message={notification.message}
                color={notification.variant + '.main'}
                sx={{ backgroundColor: notification.variant + '.2' }}
            />
        </DndContext>
    );
}

const ColumnsContainer = styled(Box)(() => ({
    height: '100%',
    display: 'flex',
    paddingBottom: 16,
    gap: 8,
    overflow: 'auto',
}));
