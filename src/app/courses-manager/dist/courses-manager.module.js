"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoursesManagerModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var courses_manager_routing_module_1 = require("./courses-manager-routing.module");
var courses_manager_component_1 = require("./courses-manager.component");
var sidenav_component_1 = require("./components/sidenav/sidenav.component");
var material_module_1 = require("../material/material.module");
var course_add_component_1 = require("./components/course-add/course-add.component");
var forms_1 = require("@angular/forms");
var course_list_component_1 = require("./components/course-list/course-list.component");
var cards_component_1 = require("./components/course-list/cards/cards.component");
var tree_component_1 = require("./components/course-list/cards/tree/tree.component");
var expansion_component_1 = require("./components/course-list/expansion/expansion.component");
var table_component_1 = require("./components/course-list/table/table.component");
var course_edit_component_1 = require("./components/course-edit/course-edit.component");
var CoursesManagerModule = /** @class */ (function () {
    function CoursesManagerModule() {
    }
    CoursesManagerModule = __decorate([
        core_1.NgModule({
            entryComponents: [course_edit_component_1.CourseEditComponent],
            declarations: [courses_manager_component_1.CoursesManagerComponent, sidenav_component_1.SidenavComponent, course_add_component_1.CourseAddComponent, course_list_component_1.CourseListComponent, cards_component_1.CardsComponent, tree_component_1.TreeComponent, expansion_component_1.ExpansionComponent, table_component_1.TableComponent, course_edit_component_1.CourseEditComponent],
            imports: [
                common_1.CommonModule,
                courses_manager_routing_module_1.CoursesManagerRoutingModule,
                material_module_1.MaterialModule,
                forms_1.FormsModule
            ]
        })
    ], CoursesManagerModule);
    return CoursesManagerModule;
}());
exports.CoursesManagerModule = CoursesManagerModule;
