import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private apiUrl = 'https://localhost:7059/api/v1/Property/get';  
  private apiAdd = "https://localhost:7059/api/v1/Property/create";
  private apiUpdte = "https://localhost:7059/api/v1/Property/update";
constructor(private http: HttpClient) {}
getData(pageNumber: number, pageSize: number, filter: string): Observable<any> {
  const params = new HttpParams()
    .set('pageNumber', pageNumber.toString())
    .set('pageSize', pageSize.toString())
    .set('filter', filter);  // Adding filter as a query parameter

  return this.http.get<any>(this.apiUrl, { params });
}
UpdateData(data:any): Observable<any> {

  const requiredData = {
    name: data.name,
    address: data.address,
    price: data.price,
    id : data.id
  };

  const headers = new HttpHeaders({
    'Content-Type': 'application/json' 
  });
  return this.http.put(this.apiUpdte, requiredData, { headers });
}
AddData(data:any): Observable<any> {

  const requiredData = {
    name: data.name,
    address: data.address,
    price: data.price,
  };
  const headers = new HttpHeaders({
    'Content-Type': 'application/json' 
  });
  return this.http.post(this.apiAdd, requiredData, { headers });
}
}
