// User Interfaces
export interface IUser {
  userId: string;
  username: string;
  email?: string;
  phoneNumber: string;
  otpCode?: string;
  fullName?: string;
  profilePictureUrl?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  boards?: string[];
  role?: string;
  lastLogin?: Date | string;
  notificationsSettings?: Record<string, unknown>;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
