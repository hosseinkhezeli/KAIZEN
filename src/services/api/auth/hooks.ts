import {
  createSignInService,
  createSignUpService,
  getOtpService,
} from '@/services/api/auth/services';
import { TSendOtpDto, TSignInDto, TSignUpDto } from '@/services/api/auth/types';
import { useMutation } from '@tanstack/react-query';

export const useGetOtpCode = () =>
  useMutation({
    mutationKey: ['get-otp'],
    mutationFn: (params: TSendOtpDto) => getOtpService(params),
  });

export const useCreateSignUp = (params: TSignUpDto) =>
  useMutation({
    mutationKey: ['sign-up', params],
    mutationFn: () => createSignUpService(params),
  });
export const useCreateSignIn = (params: TSignInDto) =>
  useMutation({
    mutationKey: ['sign-in', params],
    mutationFn: () => createSignInService(params),
  });
