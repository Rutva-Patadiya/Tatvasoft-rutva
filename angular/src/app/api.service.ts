import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'http://your-backend-url/api'; // Update this to your backend URL

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/data`);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/data`, data);
  }

  // Add more methods as needed
}
