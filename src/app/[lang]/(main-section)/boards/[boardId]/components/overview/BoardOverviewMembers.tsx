import React, { FC } from 'react';
import { Button, Stack } from '@mui/material';
import MemberCard from '@/app/[lang]/(main-section)/boards/[boardId]/components/overview/MemberCard';
import { PlusIcon } from '@heroicons/react/24/outline';

type TBoardOverviewMembersProps = {
    members: IBoardMember[] | undefined;
};
const BoardOverviewMembers: FC<TBoardOverviewMembersProps> = ({ members }) => {
    return (
        <Stack
            display={'flex'}
            height={'100%'}
            gap={1}
            sx={{ overflowY: 'auto', aspectRatio: '1/1' }}
        >
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
        </Stack>
    );
};

export default BoardOverviewMembers;
