import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../service/ContactService';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactservice: ContactService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm) {
    this.contactservice.saveContact(dataForm)
      .subscribe(data => {
        console.log('ok');
      }, error1 => {
        console.log('no ok');
      });
  }
}
