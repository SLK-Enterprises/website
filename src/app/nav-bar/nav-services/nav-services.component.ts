import { Component, OnInit, Inject } from '@angular/core';
import { NetworkingProductsComponent } from 'src/app/services-tab/networking-products/networking-products.component';
import { BroadbandDigitaltvComponent } from 'src/app/services-tab/broadband-digitaltv/broadband-digitaltv.component';
import { CctvComponent } from 'src/app/services-tab/cctv/cctv.component';
import { WirelessComponent } from 'src/app/services-tab/wireless/wireless.component';
import { OpticalfiberComponent } from 'src/app/services-tab/opticalfiber/opticalfiber.component';
import { DthComponent } from 'src/app/services-tab/dth/dth.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-nav-services',
  templateUrl: './nav-services.component.html',
  styleUrls: ['./nav-services.component.scss', '../../services-tab/tree.scss'],
})
export class NavServicesComponent implements OnInit {
  icons;
  constructor(public dialog: MatDialog, public data: DataService) {
    data.getIcons().subscribe((icon) => {
      this.icons = icon;
    });
  }
  services: String[] = [
    'DTH',
    'Broadband Digitaltv',
    'Optical Fiber Cabel',
    'Wireless',
    'CCTV',
    'Networking Products',
  ];

  action(des: String) {
    let component;
    switch (des.split(' ').join('').toLowerCase()) {
      case 'dth':
        component = DthComponent;
        break;
      case 'opticalfibercabel':
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
  ngOnInit(): void {}
}
