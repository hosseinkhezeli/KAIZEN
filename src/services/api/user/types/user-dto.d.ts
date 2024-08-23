// JWT Payload Interface
export interface IJwtPayload {
    userId: string; // Unique identifier for the user
    username: string; // Username of the user
}

// DTO for User Registration
export interface IUserRegistrationDTO {
    username: string; // Username for the new user
    email: string; // Email for the new user
    phoneNumber: string; // Phone number for OTP
    password?: string; // Optional password for traditional login
}

// DTO for User Login (OTP)
export interface IUserLoginDTO {
    phoneNumber: string; // User's phone number
    otp: string; // One-Time Password for login
}

// DTO for User Update
export interface IUserUpdateDTO {
    username?: string; // Updated username
    email?: string; // Updated email
    fullName?: string; // Updated full name
    profilePictureUrl?: string; // Updated profile picture URL
}
// Optional: Interface for Refresh Token (if applicable)
export interface IRefreshToken {
    userId: string; // User's ID
    token: string; // Refresh token
    expiry: Date; // Expiration date of the refresh token
}