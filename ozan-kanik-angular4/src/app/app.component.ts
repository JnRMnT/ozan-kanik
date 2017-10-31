import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { PreferencesService } from './preferences.service';
import { LoadingService } from './loading.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { TranslateService } from './translate.service';
import { ViewContainerRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(httpService: HttpService,
    preferencesService: PreferencesService,
    private loadingService: LoadingService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    public translateService: TranslateService) {
    this.toastr.setRootViewContainerRef(vcr);
    loadingService.activeLoading();
    this.renderedCulture = translateService.activeCulture;
  }

  public handleCultureChange(cultureCode): void {
    const me = this;
    this.loadingService.activeLoading();
    setTimeout(() => {
      me.renderedCulture = cultureCode;
      me.loadingService.attemptToDeactivate();
    });
  }

  ngAfterViewInit() {
    this.loadingService.attemptToDeactivate();
  }

  public renderedCulture: string;
}
