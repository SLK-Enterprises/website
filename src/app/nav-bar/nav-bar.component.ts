import { Component, OnInit } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MainContactComponent } from './contact/contact.component';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private _bottomSheet: MatBottomSheet,
    private dialog: MatDialog,
    private route: ServiceService
  ) {}

  option(destination) {
    document.getElementById(destination).scrollIntoView({ behavior: 'smooth' });
  }

  gallery() {
    this._bottomSheet.open(GalleryComponent, {
      panelClass: 'bottom-sheet',
    });
  }

  contact() {
    this.dialog.open(MainContactComponent);
  }

  nav(des) {
    this.route.go(des);
  }

  ngOnInit(): void {}
}
