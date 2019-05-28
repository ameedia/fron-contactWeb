import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../../service/ContactService';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  mode = 1;
  // tslint:disable-next-line:ban-types
  contact: Object = new Contact();
  idContact: number
  constructor(public activatedRoute: ActivatedRoute, public contactservice: ContactService, public router: Router) {
    this.idContact = activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.contactservice.getContact(this.idContact)
      .subscribe(data => {
        this.contact = data;
      }, error1 => {
        console.log(error1);
      });
  }

  updateContact() {
  this.contactservice.updateContact(this.contact)
    .subscribe(data => {
      alert('mise a jour effectuer');
      this.router.navigate(['contacts']);
    }, error1 => {
      alert('mise a jour non effectuer');
    });
  }
}
