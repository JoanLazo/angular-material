"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.CourseEditComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var CourseEditComponent = /** @class */ (function () {
    function CourseEditComponent(dialogRef, course) {
        this.dialogRef = dialogRef;
        this.course = course;
        course.startDate = new Date(course.startDate).toISOString();
    }
    CourseEditComponent.prototype.ngOnInit = function () {
    };
    CourseEditComponent.prototype.update = function () {
        this.dialogRef.close(this.course);
    };
    CourseEditComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    CourseEditComponent = __decorate([
        core_1.Component({
            selector: 'app-course-edit',
            templateUrl: './course-edit.component.html',
            styleUrls: ['./course-edit.component.css']
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], CourseEditComponent);
    return CourseEditComponent;
}());
exports.CourseEditComponent = CourseEditComponent;
