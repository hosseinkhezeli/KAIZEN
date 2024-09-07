import { useGetDashboard } from '@/services/api/board/hooks';
import { useGetUser } from '@states/user/userSlice';

const useOverview = () => {
  const { user } = useGetUser();
  const { data: dashboardRes, isLoading: isLoadingDashboard } = useGetDashboard(
    { userId: user?.userId },
  );
  const overviewInfo = [
    { count: dashboardRes?.count, label: 'Active Boards' },
    { count: dashboardRes?.count, label: 'Task Cards' },
    { count: dashboardRes?.count, label: 'To-Dos' },
  ];
  return { dashboardRes, isLoadingDashboard, overviewInfo };
};

export default useOverview;
