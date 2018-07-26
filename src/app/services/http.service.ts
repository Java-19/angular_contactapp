import {Injectable} from '@angular/core';
import {StoreService} from './store.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const BASE_URL = 'https://telranstudentsproject.appspot.com/_ah/api/contactsApi/v1';
@Injectable()
export class HttpService {

  constructor(private store:StoreService,
              private http:HttpClient){}

  registration(email:string, password:string):Observable<boolean>{
    let body = {
      email:email,
      password:password
    };

    return Observable.from(this.http.post<AuthResponse>(BASE_URL+'/registration',body)
      .map(response =>{
        this.store.saveToken(response.token);
        return true;
      })
      .catch(err => {
        if(err.status == 409){
          return Observable.throwError('User already exist!');
        }else{
          return Observable.throwError('Server error!');
        }
      })
    );
  }

  login(email:string, password:string):Observable<boolean>{
    let body = {
      email:email,
      password:password
    };

    return Observable.from(this.http.post<AuthResponse>(BASE_URL+'/login',body)
      .map(response =>{
        this.store.saveToken(response.token);
        return true;
      })
      .catch(err => {
        if(err.status == 401){
          return Observable.throwError('Wrong email or password!');
        }else{
          return Observable.throwError('Server error!');
        }
      })
    );
  }
}

type AuthResponse = {
  token:string;
}
