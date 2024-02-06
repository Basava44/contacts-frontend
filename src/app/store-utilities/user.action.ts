// just to check whether user Logged In or not

export interface userDetails {
  isLoggedIn?: boolean;
  email: string;
  id: string;
  username: string;
}

export class setUserDetails {
  static readonly type = 'Add Logged In User Details';
  constructor(payload: userDetails) {}
}
export class setLogIn {
  static readonly type = 'Set LoggedIn Flag';
}

export class clearData {
  static readonly type = 'clearData';
}
