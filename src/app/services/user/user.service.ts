import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlAuth: string = 'http://161.35.140.236:9005/api/auth/';

  constructor(
    private http: HttpClient,
    private cookies: CookieService
  ) { }

  postLogin(sesion: any): Observable<any>{
    return this.http.post(this.urlAuth + 'login', sesion)
  }

  setToken(token: any) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
}
