import { Component, OnInit, Inject } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dth',
  templateUrl: './dth.component.html',
  styleUrls: ['./dth.component.scss'],
})
export class DthComponent implements OnInit {
  icons;
  constructor(
    private route: ServiceService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.icons = data.icon;
  }
  nav(des) {
    this.route.go(des);
  }

  ngOnInit(): void {}
}
