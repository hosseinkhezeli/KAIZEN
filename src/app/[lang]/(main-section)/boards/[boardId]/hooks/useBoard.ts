//@3rd party
import { useEffect } from 'react';
//_______________________________________________________________

//@Services
import { useGetBoard } from '@/services/api/board/hooks';
//_______________________________________________________________

//@Hooks
import { useQueryParams } from '@hooks/useQueryParams';
//_______________________________________________________________

const useBoard = (boardId: string) => {
  const { data: boardRes, isLoading: isLoadingBoard } = useGetBoard({
    boardId,
  });
  const { setQueryParam, searchParams } = useQueryParams();
  const boardTitle = boardRes?.title;
  const members = boardRes?.members;
  const bgImageUrl = boardRes?.background;

  useEffect(() => {
    if (!searchParams?.get('view')) {
      setQueryParam('view', 'Overview');
    }
  }, [searchParams.get('view')]);
  return { isLoadingBoard, boardTitle, members, boardRes, bgImageUrl };
};

export default useBoard;
