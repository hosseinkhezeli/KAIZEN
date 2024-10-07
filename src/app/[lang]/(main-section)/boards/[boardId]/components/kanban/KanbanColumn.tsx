import { Stack, Typography } from '@mui/material';
import { useDroppable } from '@dnd-kit/core';
import { KanbanTaskCard } from '@/app/[lang]/(main-section)/boards/[boardId]/components/kanban/KanbanTaskCard';
type TKanbanColumn = {
    column: IBoardColumn | undefined;
};
export function KanbanColumn({ column }: TKanbanColumn) {
    const { isOver, setNodeRef } = useDroppable({
        id: column?.id || 'droppable',
        data: { index: column?.position },
    });
    const style = {
        borderColor: isOver ? 'primary.light' : 'divider',
    };

    return (
        <Stack
            sx={{
                minWidth: '264px',
                height: '100%',
                gap: 2,
                order: column?.position,
            }}
        >
            <Typography>{column?.title}</Typography>
            <Stack
                ref={setNodeRef}
                sx={{
                    height: '100%',
                    border: '1px solid',
                    borderRadius: 6,
                    p: 1,
                    gap: 1,
                    transition: 'ease 0.2s all',
                    ...style,
                }}
            >
                {column?.taskCards?.map((card, idx) => (
                    <KanbanTaskCard
                        card={card}
                        key={card.id + idx}
                        columnId={column.id}
                    />
                ))}
            </Stack>
        </Stack>
    );
}
