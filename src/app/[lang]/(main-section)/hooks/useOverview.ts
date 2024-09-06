import { useGetDashboard } from '@/services/api/board/hooks';
import { useGetUser } from '@states/user/userSlice';

const useOverview = () => {
  const { user } = useGetUser();
  const { data: dashboardRes, isLoading: isLoadingDashboard } = useGetDashboard(
    { userId: user?.userId },
  );
  return { dashboardRes, isLoadingDashboard };
};

export default useOverview;
