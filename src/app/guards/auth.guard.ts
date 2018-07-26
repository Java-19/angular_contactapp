import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {StoreService} from '../services/store.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private storeService:StoreService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.storeService.isAuth();
  }

}
