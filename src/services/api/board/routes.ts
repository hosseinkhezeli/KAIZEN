export const routes = {
  dashboard: `/boards/dashboard/data`,
  board: ({ boardId }: IGetBoardParamsDTO) => `/boards/${boardId}`,
};
