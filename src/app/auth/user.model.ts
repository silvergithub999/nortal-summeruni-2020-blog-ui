export class User {
  private _token: string;
  private tokenExpirationDate: Date;
  private _username: string;


  constructor(token: string) {
    this._token = token;
    // TODO: get username and token expiration date
    // TODO: auto log out when token timer expires
  }


  get token(): string {
    /*
    TODO
    if(!this.tokenExpirationDate || new Date() > this.tokenExpirationDate) {
      return null;
    }
    */
    return this._token;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }
}
