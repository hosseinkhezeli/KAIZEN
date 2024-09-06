import { getDashboard } from '@/services/api/board/services';
import { useQuery } from '@tanstack/react-query';

export const useGetDashboard = ({ userId }: IGetDashboardParamsDTO) =>
  useQuery({
    queryKey: ['get-dashboard', userId],
    queryFn: () => getDashboard({ userId }),
    staleTime: 10000,
    enabled: !!userId,
    refetchOnWindowFocus: false,
  });
