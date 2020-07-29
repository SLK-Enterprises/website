import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss'],
})
export class CarousalComponent implements OnInit {
  constructor() {}
  current = 'assets/carousal/carousal-1.png';
  currentIndex = 0;
  previousIndex = 0;
  interval;

  links = [
    'assets/carousal/carousal-1.png',
    'assets/carousal/carousal-2.png',
    'assets/carousal/carousal-3.png',
  ];

  set() {
    document
      .getElementById(this.currentIndex.toString())
      .classList.add('active');
    document
      .getElementById(this.previousIndex.toString())
      .classList.remove('active');
  }

  move = () => {
    this.previousIndex = this.currentIndex;
    this.currentIndex++;
    if (this.currentIndex == 3) this.currentIndex = 0;
    this.current = this.links[this.currentIndex];
    this.set();
  };

  moved() {
    this.previousIndex = this.currentIndex;
    this.currentIndex--;
    if (this.currentIndex == -1) this.currentIndex = 2;
    this.current = this.links[this.currentIndex];
    this.set();
  }

  custom(index) {
    this.previousIndex = this.currentIndex;
    this.currentIndex = index;
    this.current = this.links[this.currentIndex];
    this.set();
  }

  enter() {
    clearInterval(this.interval);
  }

  leave() {
    this.interval = setInterval(this.move, 2000);
  }

  ngOnInit(): void {
    this.leave();
  }
}
