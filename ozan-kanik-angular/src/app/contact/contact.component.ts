import { Component, OnInit } from '@angular/core';
import { ContactInfo } from './contact-info';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../http.service';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  constructor(private httpService: HttpService, private toastsManager: ToastrService, private translateService: TranslateService) {
    this.contactInfo = new ContactInfo();
  }

  ngOnInit() {
  }

  public submitContactInfo(form: any): void {
    const me = this;
    me.httpService.post("contactMessage", me.contactInfo).subscribe(success => {
      me.toastsManager.success(me.translateService.translate("Description.MailSuccess") , me.translateService.translate("Title.Success"));
    }, fail => {
      me.toastsManager.error(me.translateService.translate("Description.MailError"), me.translateService.translate("Title.Error"));
    });
  }

  public contactInfo: ContactInfo;
}
