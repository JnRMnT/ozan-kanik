import { Injectable } from '@angular/core';
import { PreferencesService } from './preferences.service';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  constructor(private preferencesService: PreferencesService, private http: HttpClient) {

   }

   get<T>(url:string):Observable<T>{
     return this.http.get<T>(this.getApiUrl(url));
   }

   getApiUrl(url: string): string{
      return this.preferencesService.getSelectedAppUrl() + "/" + url;
   }
}