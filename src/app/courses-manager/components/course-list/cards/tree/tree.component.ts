import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface Node {
  name: string;
  childreen?: Node[];
}
const TREE_DATA: Node[] = [
  {
    name: 'Specialties',
    childreen: [
      {name: 'Angular'},
      {name: 'TypeScript'}
    ]
  },
  {
    name: 'Technologies',
    childreen: [
      {name: 'Angular' , childreen: [
        {name: 'Angular desde 0'},
        {name: 'TypeScript'}
      ]},
      {name: 'Javascript',  childreen: [
        {name: 'Jquery'},
        {name: 'Jquery UI'}
      ]}
    ]
  }
];

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number; 
}
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
 private _transformer = (node: Node, level: number) => {
  return {
    expandable: !!node.childreen && node.childreen.length > 0,
    name: node.name,
    level: level
  }
 }

 treeControl = new FlatTreeControl<FlatNode>(
   node => node.level, node => node.expandable
 );

treeFlattener = new MatTreeFlattener(
  this._transformer, node => node.level, node => node.expandable, node => node.childreen
)

 dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: FlatNode) => node.expandable;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = TREE_DATA;
  }

}
