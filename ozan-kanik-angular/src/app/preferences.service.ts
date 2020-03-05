/// <reference path="../typings.d.ts" />
import { Injectable } from '@angular/core';
import { JM } from 'jm-utilities';

@Injectable()
export class PreferencesService {
  constructor() {
    const me = this;
    import('../../../global-config.json').then((config) => {
      me.globalConfig = config;
      me.initializePreferences();
    });
  }

  initializePreferences(): void {
    let search = location.search.substring(1);
    let queryParams: any = {};
    if (search && search != "") {
      queryParams = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    }

    let appFound: boolean = false;
    if (queryParams.app) {
      this.selectedApp = this.globalConfig.availableApps.find(e => { return e.identifier == queryParams.app });
      if (this.selectedApp) {
        appFound = true;
      }
    }

    if (!appFound) {
      this.selectedApp = this.globalConfig.availableApps.find(e => { return e.isDefault; });
    }

    let webFound: boolean = false;
    if (queryParams.web) {
      this.selectedWeb = this.globalConfig.availableWebs.find(e => { return e.identifier == queryParams.web });
      if (this.selectedWeb) {
        webFound = true;
      }
    }

    if (!webFound) {
      this.selectedWeb = this.globalConfig.availableWebs.find(e => { return e.isDefault; });
    }
  }

  getAvailableAppProjects(): AvailableProject[] {
    return this.globalConfig.availableApps;
  }
  getAvailableWebProjects(): AvailableProject[] {
    return this.globalConfig.availableWebs;
  }

  getSelectedAppIdentifier(): string {
    return this.selectedApp.identifier;
  }
  getSelectedWebIdentifier(): string {
    return this.selectedWeb.identifier;
  }
  whenReady(): Promise<any> {
    const me = this;
    const promise = new Promise((resolve, reject) => {
      JM.waitFor(() => { return me.globalConfig != undefined; })
        .then(() => {
          resolve();
        }, () => {
          console.error("Global config error!");
        });
    });

    return promise;
  }

  private globalConfig: any;
  public selectedApp: AvailableProject;
  public selectedWeb: AvailableProject;
  public isReady: boolean;
}
