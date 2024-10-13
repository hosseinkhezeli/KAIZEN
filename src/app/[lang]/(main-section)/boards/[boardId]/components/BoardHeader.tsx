//@3rd party
import React, { FC } from 'react';
import Image from 'next/image';
//_______________________________________________________________

//@Mui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Skeleton,
    Typography,
} from '@mui/material';
//_______________________________________________________________

//@Assets
import { PlusIcon, UserIcon } from '@heroicons/react/24/outline';
//_______________________________________________________________

//Types
import { Theme } from '@mui/material/styles';

type BoardHeaderProps = {
    boardTitle?: string;
    members?: IBoardMember[] | undefined;
    bgImageUrl?: string;
};
//_______________________________________________________________

const BoardHeader: FC<BoardHeaderProps> = ({
    boardTitle,
    members,
    bgImageUrl,
}) => {
    return (
        <Box sx={boxStyles}>
            <Overlay boardTitle={boardTitle} members={members} />
            {bgImageUrl && (
                <BackgroundImage bgImageUrl={bgImageUrl} altText={boardTitle} />
            )}
        </Box>
    );
};

const boxStyles = {
    width: '100%',
    height: '100%',
    position: 'relative',
    maxHeight: 200,
    minHeight: 200,
    overflow: 'hidden',
    borderRadius: '24px',
};

const Overlay: FC<{ boardTitle?: string; members?: IBoardMember[] }> = ({
    boardTitle,
    members,
}) => (
    <Box sx={overlayStyles}>
        <Title boardTitle={boardTitle} />
        <MemberSection members={members} />
    </Box>
);

const overlayStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    position: 'relative',
    padding: '4px 16px',
    background: ({ palette }: Theme) =>
        `linear-gradient(to right ,${palette.background.paper}, 70%, transparent)`,
    zIndex: 2,
};

const Title: FC<{ boardTitle?: string }> = ({ boardTitle }) =>
    boardTitle ? (
        <Typography
            variant='h2'
            component='h3'
            fontWeight={600}
            sx={{ zIndex: 2 }}
        >
            {boardTitle}
        </Typography>
    ) : (
        <Skeleton
            variant='text'
            width='100%'
            sx={{ maxWidth: 300, minHeight: 67 }}
        />
    );

const MemberSection: FC<{ members?: IBoardMember[] }> = ({ members }) => (
    <Box sx={memberSectionStyles}>
        <AvatarGroup
            max={4}
            spacing='small'
            sx={{ '.MuiAvatar-root': { border: 'none' } }}
        >
            {members?.length ? (
                members.map((member, idx) => (
                    <Avatar
                        key={member?.id}
                        alt={member?.fullName}
                        src={member?.profilePictureUrl}
                        sx={{ filter: `blur(${idx / 3}px)` }}
                    >
                        <UserIcon width={20} height={20} stroke='inherit' />
                    </Avatar>
                ))
            ) : (
                <PlaceholderAvatars />
            )}
        </AvatarGroup>
        <InviteButton />
    </Box>
);

const memberSectionStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    zIndex: 2,
    minHeight: 67,
};

const PlaceholderAvatars: FC = () => (
    <>
        {new Array(4).fill(null).map((_, idx) => (
            <Avatar
                key={idx}
                alt=''
                src=''
                sx={{ filter: `blur(${idx / 3}px)` }}
            >
                <UserIcon width={20} height={20} stroke='inherit' />
            </Avatar>
        ))}
    </>
);

const InviteButton: FC = () => (
    <Button startIcon={<PlusIcon width={18} />} sx={{ maxHeight: '36px' }}>
        Invite
    </Button>
);

const BackgroundImage: FC<{ bgImageUrl: string; altText?: string }> = ({
    bgImageUrl,
    altText,
}) => (
    <Image
        src={bgImageUrl}
        alt={altText ?? ''}
        width={800}
        height={450}
        style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        }}
    />
);

export default BoardHeader;
