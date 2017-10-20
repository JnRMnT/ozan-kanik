import { Component, OnInit } from '@angular/core';
import { ContactInfo } from './contact-info';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  constructor() {
    this.contactInfo = new ContactInfo();
  }

  ngOnInit() {
  }

  public submitContactInfo(form: any): void {
    
  }

  public contactInfo: ContactInfo;
}
