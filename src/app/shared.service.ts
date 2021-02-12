import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:58964/api"
  constructor(private http: HttpClient) { }

  getEmpList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/employee')
  }

  addEmployee(val:any) {
    return this.http.post(this.APIUrl + '/employee', val);
  }

  UpdateEmployee(val:any) {
    return this.http.put(this.APIUrl + '/employee', val);
  }

  deleteEmployee(val:any) {
    return this.http.delete(this.APIUrl + '/employee/'+val);
  }


}
