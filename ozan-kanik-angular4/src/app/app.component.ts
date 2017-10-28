import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { PreferencesService } from './preferences.service';
import { LoadingService } from './loading.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(httpService: HttpService,
    preferencesService: PreferencesService,
    private loadingService: LoadingService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }
}
