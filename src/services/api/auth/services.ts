import { http } from '@/services/core/http';
import { routes } from '@/services/api/auth/routes';
import {
  TSendDtoRes,
  TSendOtpDto,
  TSignInDto,
  TSignInResponse,
  TSignUpDto,
  TSignUpResponse,
} from '@/services/api/auth/types';

// Sign In Service
export const createSignInService = (
  params: TSignInDto,
): Promise<TSignInResponse> => {
  return http.post(routes.signIn, params);
};

// Sign Up Service
export const createSignUpService = (
  params: TSignUpDto,
): Promise<TSignUpResponse> => {
  return http.post(routes.signUp, params);
};

// Send OTP Service
export const getOtpService = (params: TSendOtpDto): Promise<TSendDtoRes> => {
  return http.post(routes.sendOtp, params);
};
