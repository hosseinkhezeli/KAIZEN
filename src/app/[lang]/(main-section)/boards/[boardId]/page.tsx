//@3rd party
import React from 'react';
//_______________________________________________________________

//@Components
import { Board } from '@/app/[lang]/(main-section)/boards/[boardId]/components/board';
//_______________________________________________________________

const Page = ({ params }: { params: { boardId: string } }) => {
    return <Board boardId={params.boardId} />;
};

export default Page;
