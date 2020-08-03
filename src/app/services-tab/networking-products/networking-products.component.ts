import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArrayDataSource } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';

interface Node {
  name: string;
  children?: Node[];
}

const TREE_DATA: Node[] = [
  {
    name: 'Optical Transceivers',
    children: [
      { name: 'QSFP 28 (100G)', children: [] },
      { name: 'QSFP (40G)', children: [] },
      { name: 'SFP+SM/MM DUAL FIBER', children: [] },
      { name: 'SFP-10G-CWDM', children: [] },
      { name: 'XFP 10G DUAL FIBER', children: [] },
      { name: 'AOC CABLE', children: [] },
      { name: 'DAC CABLE', children: [] },
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
    name: 'Networking Switches',
    children: [
      { name: 'AI POE SWITCH UNMANAGED', children: [] },
      { name: 'EPOE SWITCH MANAGED', children: [] },
      { name: 'REVERSE PoE SWITCH', children: [] },
      { name: 'PoE switch L2 managed', children: [] },
      { name: 'POE switch industry', children: [] },
      { name: 'Fiber switch', children: [] },
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
      { name: 'UTP cable', children: [] },
      { name: 'SFTP cable', children: [] },
      { name: 'FIBER / DROP cable', children: [] },
      { name: 'Fiber unarmoured cable', children: [] },
      { name: 'Patch cord', children: [] },
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
      { name: 'LIU/FMS wallmount', children: [] },
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
  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.icons = data.icon;
  }

  treeControl = new NestedTreeControl<Node>((node) => node.children);
  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: Node) =>
    !!node.children && node.children.length > 0;

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
