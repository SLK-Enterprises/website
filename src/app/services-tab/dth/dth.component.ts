import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-dth',
  templateUrl: './dth.component.html',
  styleUrls: ['./dth.component.scss'],
})
export class DthComponent implements OnInit {
  constructor(private route: ServiceService) {}
  nav(des) {
    this.route.go(des);
  }

  ngOnInit(): void {}
}
