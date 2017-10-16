import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { PreferencesService } from './preferences.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(httpService: HttpService, preferencesService: PreferencesService) {
    preferencesService.initializePreferences();
  }
}
