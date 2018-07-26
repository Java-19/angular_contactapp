import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Contact} from '../../models/contact.model';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  current:Contact = null;
  constructor(public contactService:ContactService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.current = this.contactService.contacts[+params['indx']];
    });
  }

}
