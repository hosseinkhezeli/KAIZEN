'use client';
//@3rd party
import React, { FC } from 'react';
//_______________________________________________________________

//@Mui
import Box from '@mui/material/Box';
import { Avatar, IconButton, styled, Typography } from '@mui/material';
//_______________________________________________________________

//@Assets
import { TrashIcon, UserIcon } from '@heroicons/react/24/outline';
//_______________________________________________________________

//@Styles
import { pop, slideIn } from '@styles/animationKeyframes';
//_______________________________________________________________

//@Types
type TMemberCardProps = {
    member: IBoardMember;
    idx?: number;
};
//_______________________________________________________________

const MemberCard: FC<TMemberCardProps> = ({ member, idx }) => {
    return (
        <CardContainer
            sx={{
                opacity: 0,
                animation: `${pop} 0.2s ease 0.${(idx || 0) * 3}s forwards`,
            }}
        >
            <InfoSection>
                <Avatar src={member?.profilePictureUrl}>
                    <UserIcon width={20} height={20} stroke={'inherit'} />
                </Avatar>
                <Title>{member?.fullName || 'Unknown member'}</Title>
            </InfoSection>
            <IconButton className={'hidden-button'}>
                <TrashIcon width={20} height={20} />
            </IconButton>
        </CardContainer>
    );
};

export default MemberCard;

const CardContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    bgcolor: theme.palette.secondary.light + '20',
    padding: '8px 16px',
    borderRadius: '24px',
    justifyContent: 'space-between',
    transition: 'ease all 0.2s',
    '.hidden-button': {
        opacity: 0,
        animation: `none`,
    },
    ':hover': {
        backgroundColor: theme.palette.secondary.light + '30',
        '.hidden-button': {
            opacity: 1,
            animation: `${slideIn} 0.3s ease 1`,
        },
    },
}));

const InfoSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
}));

const Title = styled(Typography)(({ theme }) => ({
    cursor: 'pointer',
    ...theme.typography['caption'],
}));
