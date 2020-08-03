import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DthComponent } from './dth/dth.component';
import { DataService } from '../services/data/data.service';
import { OpticalfiberComponent } from './opticalfiber/opticalfiber.component';
import { WirelessComponent } from './wireless/wireless.component';
import { CctvComponent } from './cctv/cctv.component';
import { BroadbandDigitaltvComponent } from './broadband-digitaltv/broadband-digitaltv.component';
import { NetworkingProductsComponent } from './networking-products/networking-products.component';

@Component({
  selector: 'services-tab',
  templateUrl: './services-tab.component.html',
  styleUrls: ['./services-tab.component.scss'],
})
export class ServicesTabComponent implements OnInit {
  services = [
    'DTH',
    'Broadband & Digital TV',
    'Optical Fiber Cable',
    'Wireless',
    'CCTV',
    'Networking Products',
  ];

  getIcon(link: String) {
    return this.icons[
      link.split(' ').join('').split('&').join('').toLowerCase()
    ];
  }

  icons;
  constructor(public dialog: MatDialog, public data: DataService) {
    data.getIcons().subscribe((icon) => {
      this.icons = icon;
    });
  }

  ngOnInit(): void {}

  open(key: String) {
    let component;
    switch (key.split('&').join('').split(' ').join('').toLowerCase()) {
      case 'dth':
        component = DthComponent;
        break;
      case 'opticalfibercable':
        component = OpticalfiberComponent;
        break;
      case 'wireless':
        component = WirelessComponent;
        break;
      case 'cctv':
        component = CctvComponent;
        break;
      case 'broadbanddigitaltv':
        component = BroadbandDigitaltvComponent;
        break;
      case 'networkingproducts':
        component = NetworkingProductsComponent;
        break;
      default:
        break;
    }
    this.dialog.open(component, {
      data: { icon: this.icons },
      autoFocus: false,
    });
  }
}
