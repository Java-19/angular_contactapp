export class StoreService {

  saveToken(token: string): void{
    localStorage.setItem('token',token);
  }

  getToken():string{
    return localStorage.getItem('token');
  }

  removeToken():void{
    localStorage.removeItem('token');
  }

  isAuth():boolean{
    return localStorage.getItem('token') != null;
  }
}
