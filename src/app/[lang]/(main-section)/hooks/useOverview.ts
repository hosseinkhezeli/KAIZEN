import { useGetDashboard } from '@/services/api/board/hooks';
import useUserStore from '@states/user/userSlice';

const useOverview = () => {
  const { user } = useUserStore();
  const { data: dashboardRes, isLoading: isLoadingDashboard } = useGetDashboard(
    { userId: user?.username },
  );
  const overviewInfo = [
    { count: dashboardRes?.count, label: 'Active Boards' },
    { count: dashboardRes?.count, label: 'Task Cards' },
    { count: dashboardRes?.count, label: 'To-Dos' },
  ];
  return { dashboardRes, isLoadingDashboard, overviewInfo };
};

export default useOverview;
