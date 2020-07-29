import { Component, OnInit } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  option(destination) {
    document.getElementById(destination).scrollIntoView({ behavior: 'smooth' });
  }

  gallery() {
    this._bottomSheet.open(GalleryComponent, {
      panelClass: 'bottom-sheet',
    });
  }

  ngOnInit(): void {}
}
