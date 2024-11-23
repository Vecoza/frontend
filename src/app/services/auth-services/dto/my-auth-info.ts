// DTO to hold authentication information
export interface MyAuthInfo {
  userId: number;
  username: string;
  firstName: string | undefined;
  lastName: string | undefined;
  isAdmin: boolean;
  isUser: boolean;
  isLoggedIn: boolean;
}

//  isManager: boolean;
