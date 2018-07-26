import {Contact} from '../models/contact.model';

export class ContactService {
  contacts: Contact[] = [];

  constructor(){
    for (let i = 0; i < 10; i++){
      this.contacts.push(new Contact("Name " + i,
        "email " + i,
        "address " + i,
        "phone " + i,
        "description " + i));
    }
  }
}
