import { Injectable, APP_INITIALIZER } from '@angular/core';
import { HttpService } from './http.service';
import { Resource } from './response-models/resource';

@Injectable()
export class TranslateService {

  constructor(private httpService: HttpService) {
  }

  public initialize(): Promise<any> {
    const me = this;
    return new Promise((resolve, reject) => {
      me.httpService.get("resources").subscribe((resources: Resource[]) => {
        if (resources) {
          me.allResources = resources;
        }

        me.use();
        resolve();
      }, () => reject());
    });
  }

  public use(cultureCode?: string) {
    const me = this;
    if (!cultureCode) {
      cultureCode = "en-US";
    }

    this.resources = {};
    this.allResources.filter((item) => {
      return item.culture == cultureCode;
    }).forEach((resource: Resource) => {
      me.resources[resource.key] = resource.value;
      });

    this.activeCulture = cultureCode;
  }

  public translate(key: string): string {
    if (!this.resources) {
      return "";
    }
    return this.resources[key];
  }

  public resources: any;
  public allResources: Resource[];
  public activeCulture: string;
}
