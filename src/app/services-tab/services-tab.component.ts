import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChoiceComponent } from './choice/choice.component';
import { DthComponent } from './dth/dth.component';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'services-tab',
  templateUrl: './services-tab.component.html',
  styleUrls: ['./services-tab.component.scss'],
})
export class ServicesTabComponent implements OnInit {
  icons;
  constructor(public dialog: MatDialog, public data: DataService) {
    data.getIcons().subscribe((icon) => {
      this.icons = icon;
    });
  }

  ngOnInit(): void {}

  open() {
    this.dialog.open(ChoiceComponent, { data: { icon: this.icons } });
  }

  dth() {
    this.dialog.open(DthComponent, { data: { icon: this.icons } });
  }
}
