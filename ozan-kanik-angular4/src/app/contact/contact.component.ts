import { Component, OnInit } from '@angular/core';
import { ContactInfo } from './contact-info';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  constructor(private httpService: HttpService, private toastsManager: ToastsManager) {
    this.contactInfo = new ContactInfo();
  }

  ngOnInit() {
  }

  public submitContactInfo(form: any): void {
    const me = this;
    me.httpService.post("contactMessage", me.contactInfo).subscribe(success => {
      me.toastsManager.success("Your message has ben successfully sent!", "Success");
    }, fail => {
      me.toastsManager.error("There was an error sending your message, please try again.", "Error");
    });
  }

  public contactInfo: ContactInfo;
}
