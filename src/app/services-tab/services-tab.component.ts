import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChoiceComponent } from './choice/choice.component';
import { DthComponent } from './dth/dth.component';

@Component({
  selector: 'services-tab',
  templateUrl: './services-tab.component.html',
  styleUrls: ['./services-tab.component.scss'],
})
export class ServicesTabComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  open() {
    this.dialog.open(ChoiceComponent);
  }

  dth() {
    this.dialog.open(DthComponent);
  }
}
