import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private _httpClient: HttpClient) { }

  private readonly baseUrl = 'http://localhost:8080';

  submitGetRequest(url: string): Observable<any> {
    return this._httpClient.get<any>(this.baseUrl + url);
  }

  submitPostRequest(url: string, payload: any, headers?: object): Observable<any> {
    return this._httpClient.post<any>(this.baseUrl + url, payload, headers);

  }

  submitPutRequest(url: string, payload: any): Observable<any> {
    return this._httpClient.put<any>(this.baseUrl + url, payload);
  }

  submitDeleteRequest(url: string, options?: any): Observable<any> {
    return this._httpClient.delete<any>(this.baseUrl + url, options);
  }
}
