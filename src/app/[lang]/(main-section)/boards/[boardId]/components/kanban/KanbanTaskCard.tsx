import React from 'react';
import { Stack } from '@mui/material';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
type TKanbanTaskCard = {
    card: ICard;
    columnId: string | undefined;
};

export function KanbanTaskCard({ card, columnId }: TKanbanTaskCard) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: card?.id,
        data: { id: card?.id, columnId: columnId },
    });
    const style = transform
        ? {
              transform: CSS.Translate.toString(transform),
          }
        : undefined;

    return (
        <Stack ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {card.title}
        </Stack>
    );
}
