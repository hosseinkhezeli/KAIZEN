import { useGetBoard } from '@/services/api/board/hooks';

const useBoard = (boardId: string) => {
  const { data: boardRes, isLoading: isLoadingBoard } = useGetBoard({
    boardId,
  });

  const boardTitle = boardRes?.title;
  const members = boardRes?.members;
  const bgImageUrl = boardRes?.background;
  return { isLoadingBoard, boardTitle, members, boardRes, bgImageUrl };
};

export default useBoard;
