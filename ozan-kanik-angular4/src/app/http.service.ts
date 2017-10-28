import { Injectable } from '@angular/core';
import { PreferencesService } from './preferences.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { LoadingService } from './loading.service';

@Injectable()
export class HttpService {
  constructor(private preferencesService: PreferencesService, private http: HttpClient, private loadingService: LoadingService) {

  }

  get<T>(url: string): Observable<T> {
    const me = this;
    return Observable.create(observer => {
      me.loadingService.active = true;
      me.preferencesService.whenReady().then(resolve => {
        me.http.get<T>(this.getApiUrl(url), me.getHttpConfig()).subscribe(data => {
          me.loadingService.active = false;
          observer.next(data);
          observer.complete();
        }, error => {
          me.loadingService.active = false;
          observer.error(error);
        });
      }, (error) => {
        me.loadingService.active = false;
        observer.error(error);
      });
    });
  }

  post<T>(url: string, requestObject: any): Observable<T> {
    const me = this;
    return Observable.create(observer => {
      me.loadingService.active = true;
      me.preferencesService.whenReady().then(resolve => {
        me.http.post<T>(this.getApiUrl(url), requestObject, me.getHttpConfig()).subscribe(data => {
          me.loadingService.active = false;
          observer.next(data);
          observer.complete();
        }, error => {
          me.loadingService.active = false;
          observer.error(error);
        });
      }, (error) => {
        me.loadingService.active = false;
        observer.error(error);
      });
    });
  }

  getApiUrl(url: string): string {
    if (url.substr(0, 4) == "http") {
      return url;
    } else {
      return "api/" + url;
    }
  }

  getHttpConfig(): any {
    var headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("App-Selection", this.preferencesService.getSelectedAppIdentifier());
    return {
      headers: headers
    };
  }
}
