import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NewContactComponent} from './new-contact/new-contact.component';
import {NouveauContactComponent} from './nouveau-contact/nouveau-contact.component';
import {EditContactComponent} from './edit-contact/edit-contact.component';

const routes: Routes = [
  {path: 'about' , component: AboutComponent },
  {path: 'contacts' , component: ContactsComponent },
  {path: 'editContact/:id' , component: EditContactComponent },
  {path: 'new-contact' , component: NewContactComponent },
  {path: '', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
