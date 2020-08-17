import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { MatDialog } from '@angular/material/dialog';
import { MainContactComponent } from '../nav-bar/contact/contact.component';

@Component({
  selector: 'app-dth-provider',
  templateUrl: './dth-provider.component.html',
  styleUrls: ['./dth-provider.component.scss'],
})
export class DthProviderComponent implements OnInit {
  providers: any;

  constructor(public data: DataService, public dialog: MatDialog) {
    // data.getdthproviders();
    // data.dataproviders.subscribe((data) => {
    //   this.providers = data;
    // });

    data.getLiveData().subscribe((collection) => {
      this.providers = collection;
    });
  }

  step = -1;
  type;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  getPlan(index) {
    return this.providers[index].plans[this.type];
  }

  open() {
    this.dialog.open(MainContactComponent, { autoFocus: false });
  }

  sortDirection = false;
  duration = false;
  price = false;

  sortData(who, index: number) {
    let data = this.providers[index].plans[this.type];
    if (who == 'duration') this.duration = !this.duration;
    else this.price = !this.price;

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (this.sortDirection) {
          if (data[i][who] < data[j][who]) {
            let t = data[i];
            data[i] = data[j];
            data[j] = t;
          }
        } else {
          if (data[i][who] > data[j][who]) {
            let t = data[i];
            data[i] = data[j];
            data[j] = t;
          }
        }
      }
    }

    this.sortDirection = !this.sortDirection;
    this.providers[index].plans[this.type] = data;
    console.log(data);
  }

  ngOnInit(): void {}
}
