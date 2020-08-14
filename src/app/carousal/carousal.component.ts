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

  constructor(public data: DataService) {}

  move = () => {
    let carousal: any = document.getElementsByClassName('carousal-image');
    this.ind = this.ind + 1;

    if (this.ind == this.links.length) {
      this.ind = 0;
    }

    for (let i = 0; i < carousal.length; i++) {
      carousal[i].style.transform = 'translate(' + this.ind * -95 + '%)';
    }
  };

  ngAfterViewInit(): void {
    this.data.getLiveTrending().subscribe((trend) => {
      this.links = trend;
      setInterval(this.move, 2300);
    });
  }
}
