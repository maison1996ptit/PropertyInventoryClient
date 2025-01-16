import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'https://localhost:7059/api/v1/Dashboard';  

constructor(private http: HttpClient) {}
getData(pageNumber: number, pageSize: number, filter: string): Observable<any> {
  const params = new HttpParams()
    .set('pageNumber', pageNumber.toString())
    .set('pageSize', pageSize.toString())
    .set('filter', filter);  // Adding filter as a query parameter

  return this.http.get<any>(this.apiUrl, { params });
}
}
