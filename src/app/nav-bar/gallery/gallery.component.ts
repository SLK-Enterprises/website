import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  links = [
    'assets/gallery/gallery-dth-1.jpg',
    'assets/gallery/gallery-dth-2.jpg',
    'assets/gallery/gallery-dth-3.jpeg',
    'assets/gallery/gallery-dth-4.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
