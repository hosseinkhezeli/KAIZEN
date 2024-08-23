// User Interfaces
export interface IUser {
  userId: string; // Unique identifier for the user
  username: string; // Unique username
  email: string; // User email address
  phoneNumber: string; // User's phone number for OTP
  otpCode?: string;
  fullName?: string; // User's full name
  profilePictureUrl?: string; // URL for the user's profile picture
  createdAt: Date|string; // Timestamp for when the user was created
  updatedAt: Date|string; // Timestamp for when the user was last updated
  boards?: string[]; // Array of board IDs associated with the user
  role?: string; // Role of the user (e.g., admin, member)
  lastLogin?: Date|string; // Timestamp for the last login
  notificationsSettings?: Record<string, unknown>; // User's notification preferences
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
