import { Component, AfterViewInit } from '@angular/core';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss'],
})
export class CarousalComponent implements AfterViewInit {
  links: any[] = ['assets/carousal/1.jpg'];
  slides;
  previous;
  current;
  next;
  interval;

  constructor(public data: DataService) {}

  enter() {
    clearInterval(this.interval);
  }

  leave() {
    this.interval = setInterval(this.moveSlide, 3500);
  }

  reverseSlide = () => {
    this.slides[this.previous].classList.remove('previous');
    this.slides[this.current].classList.remove('current');
    this.slides[this.next].classList.remove('next');

    this.next = this.current;
    this.current = this.previous;
    this.previous = this.previous - 1;

    if (this.previous == -1) this.previous = this.slides.length - 1;

    this.slides[this.previous].classList.add('previous');
    this.slides[this.current].classList.add('current');
    this.slides[this.next].classList.add('next');
  };

  moveSlide = () => {
    this.slides[this.previous].classList.remove('previous');
    this.slides[this.current].classList.remove('current');
    this.slides[this.next].classList.remove('next');

    this.previous = this.current;
    this.current = this.next;
    this.next = this.next + 1;

    if (this.next == this.slides.length) this.next = 0;

    this.slides[this.previous].classList.add('previous');
    this.slides[this.current].classList.add('current');
    this.slides[this.next].classList.add('next');
  };

  startInterval() {
    this.slides = document.getElementsByClassName('carousal_image');
    this.previous = 0;
    this.current = 1;
    this.next = 2;
    this.interval = setInterval(this.moveSlide, 3500);
  }

  ngAfterViewInit(): void {
    this.data.getLiveTrending().subscribe((trend) => {
      this.links = trend;
    });
    this.startInterval();
  }
}
