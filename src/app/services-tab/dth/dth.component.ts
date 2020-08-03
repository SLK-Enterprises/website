import { Component, OnInit, Inject } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArrayDataSource } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';

interface Node {
  name: string;
  children?: Node[];
}

const TREE_DATA: Node[] = [
  {
    name: 'New Connection',
  },
  {
    name: 'House to House Shifting',
  },
  {
    name: 'Complaints',
  },
];

@Component({
  selector: 'app-dth',
  templateUrl: './dth.component.html',
  styleUrls: ['./dth.component.scss', '../tree.scss'],
})
export class DthComponent implements OnInit {
  icons;
  constructor(
    private route: ServiceService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.icons = data.icon;
  }

  open(des) {
    this.route.go(des);
  }

  treeControl = new NestedTreeControl<Node>((node) => node.children);
  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: Node) =>
    !!node.children && node.children.length > 0;

  action(target: String) {
    target = target.split(' ').join('').toLocaleLowerCase();
    switch (target) {
      case 'newconnection':
        this.newconnection();
        break;
      case 'housetohouseshifting':
        this.housetohouseshifting();
        break;
      case 'complaints':
        this.complaints();
        break;
      default:
        break;
    }
  }

  newconnection() {
    this.open('dth-provider');
  }

  housetohouseshifting() {}

  complaints() {}

  ngOnInit(): void {}
}
