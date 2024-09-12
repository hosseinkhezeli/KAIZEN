import { useGetBoard } from '@/services/api/board/hooks';

const useBoard = (boardId: string) => {
  const { data: boardRes, isLoading: isLoadingBoard } = useGetBoard({
    boardId,
  });
  const boardTitle = boardRes?.title;
  const members = boardRes?.members;
  return { isLoadingBoard, boardTitle, members };
};

export default useBoard;
