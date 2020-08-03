import { Component, OnInit } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';

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
  constructor() {}
  treeControl = new NestedTreeControl<Node>((node) => node.children);
  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: Node) =>
    !!node.children && node.children.length > 0;

  ngOnInit(): void {}
}
