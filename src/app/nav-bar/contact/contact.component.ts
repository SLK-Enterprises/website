import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class MainContactComponent implements OnInit {
  constructor() {}
  phone1 = '89856 44456';
  phone2 = '89854 89856';
  whatsapp = '89856 44456';
  mail = 'slkenterprises456@gmail.com';

  ngOnInit(): void {}
}
