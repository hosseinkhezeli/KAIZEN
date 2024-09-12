import {
  TGetUserProfileDTO,
  TGetUserProfileRes,
} from '@/services/api/user/user-dto';
import { http } from '@/services/core/http';
import { routes } from '@/services/api/user/routes';

// Sign In Service
export const getUserProfile = (
  params: TGetUserProfileDTO,
): Promise<TGetUserProfileRes> => {
  return http.post(routes.userProfile, params);
};
