import { IUser } from '@types/user/user_types';

export type TGetUserProfileDTO = {
  username: string;
};
export interface TGetUserProfileRes extends IUser {}
