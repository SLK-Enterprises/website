import { Component, OnInit } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';

interface Node {
  name: string;
  children?: Node[];
}

const TREE_DATA: Node[] = [
  {
    name: 'Broadband',
    children: [
      { name: 'FTTH New Broadband Connection' },
      { name: 'Wireless New Broadband Connection' },
    ],
  },
  {
    name: 'Digital TV',
    children: [],
  },
];

@Component({
  selector: 'app-broadband-digitaltv',
  templateUrl: './broadband-digitaltv.component.html',
  styleUrls: ['./broadband-digitaltv.component.scss', '../tree.scss'],
})
export class BroadbandDigitaltvComponent implements OnInit {
  constructor() {}
  treeControl = new NestedTreeControl<Node>((node) => node.children);
  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: Node) =>
    !!node.children && node.children.length > 0;

  ngOnInit(): void {}
}
