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

export const useCreateSignUp = () =>
  useMutation({
    mutationKey: ['sign-up'],
    mutationFn: (params: TSignUpDto) => createSignUpService(params),
  });
export const useCreateSignIn = () =>
  useMutation({
    mutationKey: ['sign-in'],
    mutationFn: (params: TSignInDto) => createSignInService(params),
  });
