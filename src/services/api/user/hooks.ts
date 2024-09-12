import { getUserProfile } from '@/services/api/user/services';
import { TGetUserProfileDTO } from '@/services/api/user/user-dto';
import { useQuery } from '@tanstack/react-query';

export const useGetUserProfile = ({ username }: TGetUserProfileDTO) =>
  useQuery({
    queryKey: ['get-user-profile', username],
    queryFn: () => getUserProfile({ username }),
    enabled: !!username,
  });
