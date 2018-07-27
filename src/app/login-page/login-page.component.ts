import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {StoreService} from '../services/store.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email: string = '';
  password: string = '';
  status: string = '';
  isError: boolean = false;

  constructor(private http: HttpService, private storeService:StoreService) {
  }

  ngOnInit() {
  }

  registration() {
    this.isError = false;
    this.status = '';
    // console.log(this.http.registration(this.email, this.password));
    this.http.registration(this.email, this.password)
      .subscribe(result => {
          if (result) {
            this.status = 'registration success';
            console.log('registration success');
          } else {
            this.status = 'registration failed!';
            console.log('registration failed');
          }
        },
        error => {
          console.log(error);
          this.status = error;
          this.isError = true;
        }
      );
  }

  login(){
    this.storeService.saveToken("12345");
  }

  logout(){
    this.storeService.removeToken();
  }
}
