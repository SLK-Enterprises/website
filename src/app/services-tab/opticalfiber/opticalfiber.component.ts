import { Component, OnInit } from '@angular/core';
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
    name: 'Splicing Works',
    children: [{ name: 'Broadband' }, { name: 'Cabel TV' }, { name: 'CCTV' }],
  },
  {
    name: 'Network Designing',
    children: [{ name: 'Broadband' }, { name: 'Cabel TV' }, { name: 'CCTV' }],
  },
  {
    name: 'Maintainance Works',
    children: [{ name: 'Broadband' }, { name: 'Cabel TV' }, { name: 'CCTV' }],
  },
];

@Component({
  selector: 'app-opticalfiber',
  templateUrl: './opticalfiber.component.html',
  styleUrls: ['./opticalfiber.component.scss', '../tree.scss'],
})
export class OpticalfiberComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  treeControl = new NestedTreeControl<Node>((node) => node.children);
  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: Node) =>
    !!node.children && node.children.length > 0;

  open(data) {
    this.dialog.open(MainContactComponent, { autoFocus: false });
  }

  ngOnInit(): void {}
}
