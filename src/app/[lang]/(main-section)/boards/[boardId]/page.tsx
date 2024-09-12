import React from 'react';
import Board from '@/app/[lang]/(main-section)/boards/[boardId]/components/board';

const Page = ({ params }: { params: { boardId: string } }) => {
    return <Board boardId={params.boardId} />;
};

export default Page;
