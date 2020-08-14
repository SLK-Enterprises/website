import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArrayDataSource } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatDialog } from '@angular/material/dialog';
import { MainContactComponent } from 'src/app/nav-bar/contact/contact.component';

interface Node {
  name: string;
  children?: Node[];
}

const TREE_DATA: Node[] = [
  {
    name: 'OPTICAL TRANSCEIVERS',
    children: [
      { name: 'QSFP 28 (100G)', children: [] },
      { name: 'QSFP (40G)', children: [] },
      { name: 'SFP+SM/MM Dual Fiber', children: [] },
      { name: 'SFP-10G-CWDM', children: [] },
      { name: 'XFP 10G Dual Fiber', children: [] },
      { name: 'AOC Cable', children: [] },
      { name: 'DAC Cable', children: [] },
    ],
  },
  {
    name: 'GPON & EPON',
    children: [
      { name: 'EPON ONU', children: [] },
      { name: 'PON SFPs', children: [] },
      { name: 'GPON OLT', children: [] },
      { name: 'GPON SFPs', children: [] },
      { name: 'MDU', children: [] },
      { name: 'DWDM MUX-DEMUX', children: [] },
    ],
  },
  {
    name: 'NETWORKING SWITCHES',
    children: [
      { name: 'AI POE Switch Unmanaged', children: [] },
      { name: 'EPOE Switch Managed', children: [] },
      { name: 'Reverse PoE Switch', children: [] },
      { name: 'PoE Switch L2 Managed', children: [] },
      { name: 'POE Switch Industry', children: [] },
      { name: 'Fiber Switch', children: [] },
    ],
  },
  {
    name: 'CATV EQUIPMENT',
    children: [
      { name: 'SY-EDFA-16*4-23SD', children: [] },
      { name: 'SY-EDFA-16*4-23DD', children: [] },
      { name: 'SY-EDFA-16*16-30WDM', children: [] },
      { name: 'SY-EDFA-16*19-33MDW', children: [] },
      { name: 'SY-FTTHN-1F', children: [] },
      { name: 'SY-FWDM-NA', children: [] },
      { name: 'SY-FWDM-NP', children: [] },
    ],
  },
  {
    name: 'PASSIVE NETWORKING',
    children: [
      { name: 'UTP Cable', children: [] },
      { name: 'SFTP Cable', children: [] },
      { name: 'Fiber / Drop Cable', children: [] },
      { name: 'Fiber Unarmoured Cable', children: [] },
      { name: 'Patch Cord', children: [] },
    ],
  },
  {
    name: 'FTTH PASSIVE NETWORKING',
    children: [
      { name: 'PLC Spliter', children: [] },
      { name: 'Triple Window Coupler', children: [] },
      { name: 'FDB with Loaded', children: [] },
      { name: 'FTTH Box', children: [] },
      { name: 'Fast Connector', children: [] },
      { name: 'LIU/FMS Wallmount', children: [] },
      { name: 'LIU/FMS Rackmount', children: [] },
    ],
  },
  {
    name: 'TESTING EQUIPMENT',
    children: [
      { name: 'SYRO -66C', children: [] },
      { name: 'SYRO-64L', children: [] },
      { name: 'Power Meter', children: [] },
      { name: 'SYRO-3020-OTDR', children: [] },
      { name: 'FTTH Tools', children: [] },
    ],
  },
];

@Component({
  selector: 'app-networking-products',
  templateUrl: './networking-products.component.html',
  styleUrls: ['./networking-products.component.scss', '../tree.scss'],
})
export class NetworkingProductsComponent {
  icons;
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialog) {
    this.icons = data.icon;
  }

  treeControl = new NestedTreeControl<Node>((node) => node.children);
  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: Node) =>
    !!node.children && node.children.length > 0;

  open(data) {
    this.dialog.open(MainContactComponent, { autoFocus: false });
  }

  action(target: String) {
    // target = target.split(' ').join('').toLocaleLowerCase();
    // switch (target) {
    //   case 'newconnection':
    //     this.newconnection();
    //     break;
    //   case 'housetohouseshifting':
    //     this.housetohouseshifting();
    //     break;
    //   case 'complaints':
    //     this.complaints();
    //     break;
    //   default:
    //     break;
    // }
  }
}
