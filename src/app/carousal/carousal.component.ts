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

    if (this.ind == this.links.length) {
      this.ind = 0;
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

  ngAfterViewInit(): void {
    this.data.getLiveTrending().subscribe((trend) => {
      this.links = trend;
      this.inter = setInterval(this.move, 3000);
    });
  }
}
