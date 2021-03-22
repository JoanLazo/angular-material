"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CourseService = void 0;
var core_1 = require("@angular/core");
var data = [
    {
        id: 0,
        name: 'Angular desde Cero',
        description: 'Angular es un framework para el desarrollo web...',
        specialty: 'angular',
        startDate: '10/11/2019',
        categories: ['web', 'angular', 'javascript'],
        isActive: true,
        level: 5
    },
    {
        id: 1,
        name: 'Typescript desde Cero',
        description: 'Typescript es un framework para el desarrollo web...',
        specialty: 'Typescript',
        startDate: '05/10/2019',
        categories: ['web', 'angular', 'javascript'],
        isActive: true,
        level: 3
    },
];
var CourseService = /** @class */ (function () {
    function CourseService() {
    }
    CourseService.prototype.getCourses = function () {
        return new Promise(function (resolve, rejects) {
            resolve(data);
        });
    };
    CourseService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
