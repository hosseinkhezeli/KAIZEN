//@3rd Party
import React, { FC } from 'react';
//_______________________________________________________________

//@MUI
import { Button, Stack, styled } from '@mui/material';
//_______________________________________________________________

//@Components
import MemberCard from '@/app/[lang]/(main-section)/boards/[boardId]/components/overview/MemberCard';
//_______________________________________________________________

//@Assets
import { PlusIcon } from '@heroicons/react/24/outline';

//@Types
type TBoardOverviewMembersProps = {
    members: IBoardMember[] | undefined;
};
//_______________________________________________________________

const BoardOverviewMembers: FC<TBoardOverviewMembersProps> = ({ members }) => {
    return (
        <Container>
            {members?.map((member, idx) => (
                <MemberCard key={idx} member={member} idx={idx} />
            ))}
            <Button
                variant={'outlined'}
                startIcon={<PlusIcon width={18} />}
                fullWidth
                color={'secondary'}
                sx={{
                    minHeight: '56px !important',
                    maxHeight: '56px !important',
                    borderStyle: 'dashed',
                }}
            >
                Add Member
            </Button>
        </Container>
    );
};

export default BoardOverviewMembers;

const Container = styled(Stack)(({ theme }) => ({
    display: 'flex',
    height: '100%',
    gap: 4,
    overflowY: 'auto',
    aspectRatio: '1/1',
}));
