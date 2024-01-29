import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  login(data:any):Observable<any>
  {
    return this.http.post<any>('https://api.escuelajs.co/api/v1/auth/login',data)
  }
  logout()
  {
    localStorage.clear();
  }
  getToken() :boolean{
if(localStorage.getItem('token'))
{
  return true;
}

  
  else{
    return false;
  }
}
}
