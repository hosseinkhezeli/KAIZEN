import { http } from '@/services/core/http';
import { routes } from '@/services/api/board/routes';

// Sign In Service
export const getDashboard = ({
  userId,
}: IGetDashboardParamsDTO): Promise<IGetDashboardRes> => {
  return http.get(routes.dashboard({ userId }));
};
