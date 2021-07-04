export interface User {
    id?: number;
    name?: string;
    username?: string;
    surname?: string;
    email?: string;
    password?: string;
    role?: UserRole;
}

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest'
}