import { Injectable } from '@angular/core';
import { GlobalConfig, AvailableProject } from '../../../global-config';

@Injectable()
export class PreferencesService {
  constructor() { }

  initializePreferences(): void{
      this.globalConfig = new GlobalConfig();
      let search = location.search.substring(1);
      let queryParams: any = {};
      if(search && search != ""){
        queryParams = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
      }

      let appFound: boolean = false;
      if(queryParams.app){
        this.selectedApp = this.globalConfig.availableApps.find(e=> { return e.identifier == queryParams.app});
        if(this.selectedApp){
          appFound = true;
        }
      }
      
      if(!appFound){
        this.selectedApp = this.globalConfig.availableApps.find(e=>{ return e.isDefault;});
      }

      let webFound: boolean = false;
      if(queryParams.web){
        this.selectedWeb = this.globalConfig.availableWebs.find(e=> { return e.identifier == queryParams.web});
        if(this.selectedWeb){
          webFound = true;
        }
      }
      
      if(!webFound){
        this.selectedWeb = this.globalConfig.availableWebs.find(e=>{ return e.isDefault;});
      }
  }

  getAvailableAppProjects(): AvailableProject[]{
    return this.globalConfig.availableApps;
  }
  getAvailableWebProjects(): AvailableProject[]{
    return this.globalConfig.availableWebs;
  }

  getSelectedAppUrl(): string{
    return this.selectedApp.location;
  }
  getSelectedWebUrl(): string{
    return this.selectedWeb.location;
  }

  private globalConfig: GlobalConfig;
  public selectedApp: AvailableProject;
  public selectedWeb: AvailableProject;
}

export { AvailableProject };