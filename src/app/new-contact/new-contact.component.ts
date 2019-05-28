import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactService} from '../../service/ContactService';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  contact: Object = new Contact();
  mode = 1;
  constructor(public contactservice: ContactService) { }

  ngOnInit() {
  }

  saveContact() {
    this.contactservice.saveContact(this.contact)
      .subscribe(data => {
        console.log(data);
        this.contact = data;
        this.mode = 2;
      }, error1 => {
        console.log(error1);
      });
  }
}
