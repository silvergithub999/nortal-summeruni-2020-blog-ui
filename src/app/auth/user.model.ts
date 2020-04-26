export class User {
  constructor(
    private _token: string,
    // private username,
    // private _tokenExpirationDate: Date
  ) {}

  get token() {
    return this._token;
  }
}
