'use client';
//@3rd Party
import Image from 'next/image';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
// ___________________________________________________________________

//@Mui
import { Stack, styled, Tooltip, Typography } from '@mui/material';
// ___________________________________________________________________

//@Components & Hooks
import { truncateString } from '@utils/methods';
// ___________________________________________________________________

//@Assets
import { WindowIcon } from '@heroicons/react/24/outline';
// ___________________________________________________________________

//@Types
import { KaizenAvatarGroup } from '@components/avatar-group/AvatarGroup';
type TKanbanTaskCard = {
    card: ICard;
    columnId: string | undefined;
};
// ___________________________________________________________________

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
        <CardUnderlay
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
        >
            <CardContainer>
                <CardId>{card?.id?.slice(0, 4)}</CardId>
                <Stack>
                    <CardTitle>
                        <WindowIcon width={20} height={20} />
                        {card.title}
                    </CardTitle>
                    <Tooltip title={card?.description || ''}>
                        <CardDescription>
                            {truncateString(card?.description || '', 70)}
                        </CardDescription>
                    </Tooltip>
                </Stack>
                <KaizenAvatarGroup
                    members={card?.assignedTo?.map(({ member }) => member)}
                />
                {card?.coverImage && (
                    <CardCoverImage
                        src={card?.coverImage || ' '}
                        alt='Card Background'
                        width={300}
                        height={90}
                    />
                )}
            </CardContainer>
        </CardUnderlay>
    );
}
const CardUnderlay = styled(Stack)(({ theme }) => ({
    borderRadius: 24,
    maxWidth: 248,
    width: '100%',
    background: `linear-gradient(135deg, ${theme?.palette.grey[600]},70%, ${theme?.palette.secondary.light})`,
}));

const CardContainer = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: '6px 8px',
    margin: 1,
    borderRadius: 24,
    gap: 4,
}));

const CardId = styled(Typography)(({ theme }) => ({
    ...theme.typography['caption'],
    textTransform: 'uppercase',
    color: theme.palette.text.disabled,
    fontSize: 10,
}));

const CardTitle = styled(Typography)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: 4,
}));
const CardDescription = styled(Typography)(({ theme }) => ({
    ...theme.typography['caption'],
    cursor: 'help',
    display: 'flex',
    alignItems: 'start',
    gap: 4,
    color: theme.palette.text.disabled,
    fontSize: 10,
}));

const CardCoverImage = styled(Image)(() => ({
    width: '100%',
    objectFit: 'cover',
    borderRadius: 24,
    border: '1px solid',
    borderColor: 'inherit',
}));
