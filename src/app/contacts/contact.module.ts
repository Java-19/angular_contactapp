import {NgModule} from '@angular/core';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactViewComponent} from './contact-view/contact-view.component';
import {ContactService} from '../services/contact.service';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

const contactsRoutes: Routes = [
  {path:"",component:ContactListComponent, children:[
      {path:":indx",component:ContactViewComponent}
    ]}
];
@NgModule({
  declarations:[
    ContactListComponent,
    ContactViewComponent
  ],
  imports:[
    CommonModule,
    RouterModule.forChild(contactsRoutes)
  ],
  providers:[ContactService]
})
export class ContactsModule {

}
