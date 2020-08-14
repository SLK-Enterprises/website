import { Component, OnInit, Inject } from '@angular/core';
import { ServiceService } from '../../services/service.service';
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
    name: 'Dome CCTV Cameras',
  },
  {
    name: 'Bullet CCTV Cameras',
  },
  {
    name: 'C-Mount CCTV Cameras',
  },
  {
    name: 'PTZ Pan Tilt & Zoom Cameras',
  },
  {
    name: 'Day/Night CCTV Cameras',
  },
  {
    name: 'Infrared/night vision CCTV Cameras',
  },
  {
    name: 'Network/IP CCTV Cameras',
  },
  {
    name: 'Wireless CCTV Cameras',
  },
  {
    name: 'High Definition (HD) CCTV Camera Complaints',
  },
];

@Component({
  selector: 'app-cctv',
  templateUrl: './cctv.component.html',
  styleUrls: ['./cctv.component.scss', '../tree.scss'],
})
export class CctvComponent implements OnInit {
  icons;
  constructor(
    private route: ServiceService,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialog: MatDialog
  ) {
    this.icons = data.icon;
  }

  open(des) {
    this.route.go(des);
  }
  openu(data) {
    this.dialog.open(MainContactComponent, { autoFocus: false });
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
    this.openu('null');
  }

  ngOnInit(): void {}
}
