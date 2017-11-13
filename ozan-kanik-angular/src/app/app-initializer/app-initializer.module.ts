import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpService } from '../http.service';
import { TranslateService } from '../translate.service';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeResources,
      multi: true,
      deps: [HttpService, TranslateService]
    }
  ],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppInitializerModule { }

export function initializeResources(httpService: HttpService, translateService: TranslateService): () => Promise<any> {
  return (): Promise<any> => {
    return translateService.initialize();
  }
}
