import React from 'react';
import { Avatar, AvatarGroup, Stack, Tooltip, Typography } from '@mui/material';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import {
    DocumentTextIcon,
    UserIcon,
    WindowIcon,
} from '@heroicons/react/24/outline';
import { PlaceholderAvatars } from '@components/avatar-placeholder/AvatarPlaceHolder';
import Image from 'next/image';
import { Property } from 'csstype';
import { truncateString } from '@utils/methods';

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
        <Stack
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            sx={{
                borderRadius: '24px',
                background: ({ palette }) =>
                    `linear-gradient(135deg, ${palette.grey[600]},70%, ${palette.secondary.light})`,
            }}
        >
            <Stack
                sx={{
                    backgroundColor: 'background.default',
                    p: 1,
                    m: '1px',
                    borderRadius: '24px',
                    gap: 1,
                }}
            >
                <Typography
                    variant={'caption'}
                    sx={{
                        textTransform: 'uppercase',
                        color: 'text.disabled',
                        fontSize: '10px !important',
                    }}
                >
                    {card?.id?.slice(0, 4)}
                </Typography>
                <Stack>
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                        <WindowIcon width={20} height={20} />
                        {card.title}
                    </Typography>
                    <Tooltip title={card?.description || ''}>
                        <Typography
                            variant='caption'
                            sx={{
                                cursor: 'help',
                                display: 'flex',
                                alignItems: 'start',
                                gap: 1,
                                color: 'text.disabled',
                                fontSize: 10,
                            }}
                        >
                            <DocumentTextIcon
                                width={32}
                                height={32}
                                style={{ visibility: 'hidden' }}
                            />
                            {truncateString(card?.description || '', 70)}
                        </Typography>
                    </Tooltip>
                </Stack>
                <AvatarGroup
                    max={4}
                    spacing='small'
                    sx={{ '.MuiAvatar-root': { border: 'none' } }}
                >
                    {card?.assignedTo?.length ? (
                        card?.assignedTo?.map(({ member }, idx) => (
                            <Avatar
                                key={member.userId}
                                alt={member.fullName}
                                src={member.profilePictureUrl}
                                sx={{ filter: `blur(${idx / 3}px)` }}
                            >
                                <UserIcon
                                    width={20}
                                    height={20}
                                    stroke='inherit'
                                />
                            </Avatar>
                        ))
                    ) : (
                        <PlaceholderAvatars />
                    )}
                </AvatarGroup>

                <Image
                    src={card?.coverImage || ' '}
                    alt='Board Background'
                    width={300}
                    height={90}
                    style={{
                        width: '100%',
                        objectFit: 'cover' as Property.ObjectFit,
                        borderRadius: '24px',
                        border: '1px solid',
                        borderColor: 'inherit',
                    }}
                />
            </Stack>
        </Stack>
    );
}
