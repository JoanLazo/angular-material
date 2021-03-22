"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TreeComponent = void 0;
var tree_1 = require("@angular/cdk/tree");
var core_1 = require("@angular/core");
var tree_2 = require("@angular/material/tree");
var TREE_DATA = [
    {
        name: 'Specialties',
        childreen: [
            { name: 'Angular' },
            { name: 'TypeScript' }
        ]
    },
    {
        name: 'Technologies',
        childreen: [
            { name: 'Angular', childreen: [
                    { name: 'Angular desde 0' },
                    { name: 'TypeScript' }
                ] },
            { name: 'Javascript', childreen: [
                    { name: 'Jquery' },
                    { name: 'Jquery UI' }
                ] }
        ]
    }
];
var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
        this._transformer = function (node, level) {
            return {
                expandable: !!node.childreen && node.childreen.length > 0,
                name: node.name,
                level: level
            };
        };
        this.treeControl = new tree_1.FlatTreeControl(function (node) { return node.level; }, function (node) { return node.expandable; });
        this.treeFlattener = new tree_2.MatTreeFlattener(this._transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.childreen; });
        this.dataSource = new tree_2.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.hasChild = function (_, node) { return node.expandable; };
    }
    TreeComponent.prototype.ngOnInit = function () {
        this.dataSource.data = TREE_DATA;
    };
    TreeComponent = __decorate([
        core_1.Component({
            selector: 'app-tree',
            templateUrl: './tree.component.html',
            styleUrls: ['./tree.component.css']
        })
    ], TreeComponent);
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;
