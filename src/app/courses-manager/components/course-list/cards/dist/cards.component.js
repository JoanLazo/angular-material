"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardsComponent = void 0;
var core_1 = require("@angular/core");
var CardsComponent = /** @class */ (function () {
    function CardsComponent(courseService) {
        this.courseService = courseService;
    }
    CardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.getCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    CardsComponent = __decorate([
        core_1.Component({
            selector: 'app-cards',
            templateUrl: './cards.component.html',
            styleUrls: ['./cards.component.css']
        })
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;
