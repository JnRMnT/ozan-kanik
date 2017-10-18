import { Injectable } from '@angular/core';
import { PreferencesService } from './preferences.service';
import { HttpClient } from "@angular/common/http";
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
      me.http.get<T>(this.getApiUrl(url)).subscribe(data => {
        me.loadingService.active = false;
        observer.onNext(data);
        observer.onCompleted();
      }, error => {
        me.loadingService.active = false;
        observer.error(error);
      });
    });
  }

  getApiUrl(url: string): string {
    if (url.substr(0, 4) == "http") {
      return url;
    } else {
      return this.preferencesService.getSelectedAppUrl() + "/" + url;
    }
  }
}