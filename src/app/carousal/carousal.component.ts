import { Component, AfterViewInit } from '@angular/core';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss'],
})
export class CarousalComponent implements AfterViewInit {
  links: any[] = ['assets/carousal/1.jpg'];
  ind = 0;
  inter;

  constructor(public data: DataService) {}

  moveLeft() {
    this.ind = this.ind - 2;
    if (this.ind < 0) {
      this.ind = this.links.length - 2;
    }
    this.move();
  }

  move = () => {
    let carousal: any = document.getElementsByClassName('carousal-image');
    this.ind = this.ind + 1;

    if (this.ind == 1) {
      for (let i = 0; i < carousal.length; i++) {
        carousal[i].style.transition = 'transform 750ms ease-out';
      }
    }

    if (this.ind == this.links.length) {
      this.ind = 0;
      for (let i = 0; i < carousal.length; i++) {
        carousal[i].style.transition = 'transform 2000ms ease-out';
      }
    }

    for (let i = 0; i < carousal.length; i++) {
      carousal[i].style.transform = 'translate(' + this.ind * -95 + 'vw)';
    }
  };

  start() {
    this.inter = setInterval(this.move, 3000);
  }

  clear() {
    clearInterval(this.inter);
  }

  sortLinks() {
    for (let i = 0; i < this.links.length; i++) {
      for (let j = 0; j < this.links.length - 1; j++) {
        if (this.links[j].order > this.links[j + 1].order) {
          let temp = this.links[j];
          this.links[j] = this.links[j + 1];
          this.links[j + 1] = temp;
        }
      }
    }
  }

  ngAfterViewInit(): void {
    try {
      clearInterval(this.inter);
    } catch (ex) {
      console.log(ex);
    }
    this.data.getLiveTrending().subscribe((trend) => {
      this.links = trend;
      this.sortLinks();
      this.inter = setInterval(this.move, 3000);
    });
  }
}
