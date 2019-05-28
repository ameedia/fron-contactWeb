import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../model/model.contact';


@Injectable()
export class ContactService {

  constructor(private http: HttpClient) {
  }

  public getContacts(motcle: string, page: number, size: number) {
    return this.http.get('http://localhost:8080/chercherContacts?mc=' + motcle + '&page=' + page + '&size=' + size);
  }

  // tslint:disable-next-line:ban-types
  public saveContact(contact: Object) {
    return this.http.post('http://localhost:8080/contacts', contact);
  }

  public getContact(id: number) {
    return this.http.get('http://localhost:8080//contacts/' + id);
  }
  // tslint:disable-next-line:ban-types
  public updateContact(contact: Object) {
    // @ts-ignore
    return this.http.put('http://localhost:8080/contacts/' + contact.id, contact);
  }

  public deleteContact(id: number) {
    return this.http.delete('http://localhost:8080//contacts/' + id);
  }

}
