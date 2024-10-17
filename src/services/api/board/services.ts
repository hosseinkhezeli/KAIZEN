import { http } from '@/services/core/http';
import { routes } from '@/services/api/board/routes';

export const getDashboard = ({
  userId,
}: IGetDashboardParamsDTO): Promise<IGetDashboardRes> => {
  return http.get(routes.dashboard, { params: { userId: userId } });
};

export const getBoard = (
  pathParams: IGetBoardParamsDTO,
): Promise<IGetBoardRes> => {
  return http.get(routes.board(pathParams));
};

export const createBoard = (body: ICreateBoardDTO): Promise<IGetBoardRes> => {
  return http.post(routes.createBoard, body);
};
