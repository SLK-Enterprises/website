import { Component, OnInit } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MainContactComponent } from './contact/contact.component';
import { ServiceService } from '../services/service.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { NavServicesComponent } from './nav-services/nav-services.component';
import { SupportComponent } from './support/support.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DthComponent } from '../services-tab/dth/dth.component';
import { CctvComponent } from '../services-tab/cctv/cctv.component';
import { BroadbandDigitaltvComponent } from '../services-tab/broadband-digitaltv/broadband-digitaltv.component';
import { OpticalfiberComponent } from '../services-tab/opticalfiber/opticalfiber.component';
import { WirelessComponent } from '../services-tab/wireless/wireless.component';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          left: '0vw',
        })
      ),
      state(
        'closed',
        style({
          left: '-55vw',
        })
      ),
      transition('open => closed', [animate('0.1s ease-out')]),
      transition('closed => open', [animate('0.1s ease-in')]),
    ]),
  ],
})
export class NavBarComponent implements OnInit {
  ismenu = false;
  searchKey: String;
  menu = ['Home', 'Services', 'Gallery', 'Contact', 'Support', 'Feedback'];
  icons;
  constructor(
    private _bottomSheet: MatBottomSheet,
    private dialog: MatDialog,
    private route: ServiceService,
    public data: DataService
  ) {
    data.getIcons().subscribe((icon) => {
      this.icons = icon;
    });
  }

  open(des: String) {
    this.ismenu = !this.ismenu;

    switch (des.toLowerCase()) {
      case 'gallery':
        this.gallery();
        break;
      case 'contact':
        this.contact();
        break;
      case 'support':
        this.support();
        break;
      case 'feedback':
        this.feedback();
        break;
      case 'home':
        this.home();
        break;
      case 'services':
        this.services();
        break;
      default:
        break;
    }
  }

  services() {
    this.dialog.open(NavServicesComponent, { autoFocus: false });
  }

  support() {
    this.dialog.open(SupportComponent, { autoFocus: false });
  }

  feedback() {
    this.dialog.open(FeedbackComponent, { autoFocus: false });
  }

  home() {
    this.go('home');
  }

  gallery() {
    this._bottomSheet.open(GalleryComponent, {
      panelClass: 'bottom-sheet',
    });
  }

  contact() {
    this.dialog.open(MainContactComponent, { autoFocus: false });
  }

  go(des) {
    this.route.go(des);
  }

  isDth(): boolean {
    return this.searchKey.includes('dth') ? true : false;
  }
  isCCTV(): boolean {
    return this.searchKey.includes('cctv') ? true : false;
  }
  isBroadband(): boolean {
    return this.searchKey.includes('broadband') ? true : false;
  }
  isOpticalFiber(): boolean {
    return this.searchKey.includes('opticalfiber')
      ? true
      : this.searchKey.includes('optical')
      ? true
      : this.searchKey.includes('fiber')
      ? true
      : this.searchKey.includes('optical-fiber')
      ? true
      : this.searchKey.includes('optical fiber')
      ? true
      : false;
  }
  isWireless(): boolean {
    return this.searchKey.includes('wireless') ? true : false;
  }

  check(): String {
    if (this.isDth()) {
      return 'dth';
    } else if (this.isCCTV()) {
      return 'cctv';
    } else if (this.isBroadband()) {
      return 'broadband';
    } else if (this.isOpticalFiber()) {
      return 'opticalfiber';
    } else if (this.isWireless()) {
      return 'wireless';
    }
  }

  search() {
    let component;
    let nothing = false;
    this.searchKey = this.searchKey.toLocaleLowerCase();
    switch (this.check()) {
      case 'dth':
        component = DthComponent;
        break;
      case 'cctv':
        component = CctvComponent;
        break;
      case 'broadband':
        component = BroadbandDigitaltvComponent;
        break;
      case 'opticalfiber':
        component = OpticalfiberComponent;
        break;
      case 'wireless':
        component = WirelessComponent;
        break;
      default:
        nothing = true;
        break;
    }
    nothing
      ? false
      : this.dialog.open(component, {
          data: { icon: this.icons },
          autoFocus: false,
        });
  }

  ngOnInit(): void {}
}
