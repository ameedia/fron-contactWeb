import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../service/ContactService';
import {Router} from '@angular/router';
import {Contact} from '../../model/model.contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pagecontacts: any;
  motcle: '';
  page = 0;
  size = 5;
  pages: Array<number>;

  constructor(private contactservice: ContactService, public router: Router) {
  }

  ngOnInit() {}

  doSearch() {
    this.contactservice.getContacts(this.motcle, this.page, this.size)
      .subscribe(data => {
        this.pagecontacts = data;
        // @ts-ignore
        this.pages = new  Array(data.totalPages);
      }, error1 => {
        console.log(error1);
      });
  }

  cherchercontact() {
    this.doSearch();
  }


  pageSuivante(i: number) {
    this.page = i;
    this.doSearch();
  }

  onEditContact(id: number) {
    this.router.navigate(['editContact', id]);
  }

  onDeleteContact(c: Contact) {
    const confirm = window.confirm('Etes vous sure?');

    // tslint:disable-next-line:triple-equals
    if (confirm == true) {
      this.contactservice.deleteContact(c.id)
        .subscribe(data => {
          this.pagecontacts.content.splice(
            this.pagecontacts.content.indexOf(c), 1
          );
        }, error1 => {
          console.log(error1);
        });
    }
  }
}
