export type TSendOtpDto = {
  phoneNumber: string;
};

export type TSignUpDto = {
  username?: string;
  email?: string;
  phoneNumber: string;
  fullName?: string;
};
export type TSignInDto = {
  phoneNumber: string;
  otp: string;
};

export type TSendDtoRes = {
  message: string;
  otpCode: string;
  phoneNumber: string;
};

export type TSignInResponse = {
  message: string;
  userId: string;
  username: string;
  phoneNumber: string;
  token: string;
};
export type TSignUpResponse = {
  message: string;
  userId: string;
};
