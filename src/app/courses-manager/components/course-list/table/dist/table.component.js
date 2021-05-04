"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TableComponent = void 0;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var table_1 = require("@angular/material/table");
var course_edit_component_1 = require("../../course-edit/course-edit.component");
var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var TableComponent = /** @class */ (function () {
    function TableComponent(courseService, dialog, snackBar) {
        this.courseService = courseService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.displayedColumns = ['id', 'name', 'description', 'specialty', 'edit'];
        this.dataSource = new table_1.MatTableDataSource();
    }
    // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    // dataSource = ELEMENT_DATA;
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.courseService.getCourses()
            .then(function (courses) {
            _this.dataSource.data = courses;
        });
    };
    TableComponent.prototype.applyFilter = function (texto) {
        this.dataSource.filter = texto.trim().toLocaleLowerCase();
    };
    TableComponent.prototype.edit = function (course) {
        console.log("Edit", course);
        this.openDialog(course);
    };
    TableComponent.prototype.openDialog = function (course) {
        var _this = this;
        var dialogRef = this.dialog.open(course_edit_component_1.CourseEditComponent, {
            width: '600px',
            data: course
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result) {
                console.log("El dialogo fue cerrado");
                return;
            }
            course = result;
            _this.snackBar.open('Curso Actualizado', 'Cerrar', {
                duration: 3000
            });
        });
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator, { static: true })
    ], TableComponent.prototype, "paginator");
    TableComponent = __decorate([
        core_1.Component({
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css']
        })
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
