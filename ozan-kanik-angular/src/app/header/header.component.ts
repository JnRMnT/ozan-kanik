import { Component, Output, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit, AfterViewInit {
  @Output() cultureChanged = new EventEmitter();
  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    new SmoothScroll('.smooth');
  }

  ngAfterViewInit(): void {
    $(".lang-selection a").tooltip({
      container: "body"
  });
  }

  public changeLanguage(cultureCode: string) {
    const me = this;
    me.translateService.use(cultureCode);
    me.cultureChanged.emit(cultureCode);
  }
}
