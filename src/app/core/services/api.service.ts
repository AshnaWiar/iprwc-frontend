import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint: string;

  constructor(private httpClient: HttpClient) {
    this.endpoint = environment.endpoints.API;
  }

  get<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(this.endpoint + path);
  }

  post<T>(path: string, body: object | string): Observable<T> {
    return this.httpClient.post<T>(this.endpoint + path, body);
  }

  put<T>(path: string, body: object): Observable<T>  {
    return this.httpClient.put<T>(this.endpoint + path, body);
  }

  delete<T>(path: string): Observable<T>  {
    return this.httpClient.delete<T>(this.endpoint + path);
  }
}
