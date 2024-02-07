// just to check whether user Logged In or not

export interface userDetails {
  isLoggedIn?: boolean;
  email: string;
  id: string;
  username: string;
  editableContactData: {};
}

export class setUserDetails {
  static readonly type = 'Add Logged In User Details';
  constructor(public payload: userDetails) {}
}
export class setLogIn {
  static readonly type = 'Set LoggedIn Flag';
}

export class clearData {
  static readonly type = 'clearData';
}

export class editContact {
  static readonly type = '[setData] set editable contact data';
  constructor(public payload: any) {}
}
