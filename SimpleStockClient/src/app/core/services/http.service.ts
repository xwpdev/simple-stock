import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  /**
   * Generic HTTP GET request
   * @param reqPath request URL path
   * @returns 
   */
  get(reqPath: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(reqPath, {
      headers,
    });
  }
}
