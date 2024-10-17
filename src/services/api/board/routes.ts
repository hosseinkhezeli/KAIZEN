export const routes = {
  dashboard: `/boards/dashboard/data`,
  createBoard: `/boards`,
  board: ({ boardId }: IGetBoardParamsDTO) => `/boards/${boardId}`,
};
