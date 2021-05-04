"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var grid_list_1 = require("@angular/material/grid-list");
var card_1 = require("@angular/material/card");
var menu_1 = require("@angular/material/menu");
var layout_1 = require("@angular/cdk/layout");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var tree_1 = require("@angular/material/tree");
var sidenav_1 = require("@angular/material/sidenav");
var list_1 = require("@angular/material/list");
var toolbar_1 = require("@angular/material/toolbar");
var input_1 = require("@angular/material/input");
var select_1 = require("@angular/material/select");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var checkbox_1 = require("@angular/material/checkbox");
var radio_1 = require("@angular/material/radio");
var slider_1 = require("@angular/material/slider");
var tabs_1 = require("@angular/material/tabs");
var expansion_1 = require("@angular/material/expansion");
var tooltip_1 = require("@angular/material/tooltip");
var dialog_1 = require("@angular/material/dialog");
var snack_bar_1 = require("@angular/material/snack-bar");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                grid_list_1.MatGridListModule,
                card_1.MatCardModule,
                menu_1.MatMenuModule,
                layout_1.LayoutModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                tree_1.MatTreeModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
                toolbar_1.MatToolbarModule,
                input_1.MatInputModule,
                select_1.MatSelectModule,
                datepicker_1.MatDatepickerModule,
                core_2.MatNativeDateModule,
                checkbox_1.MatCheckboxModule,
                radio_1.MatRadioModule,
                slider_1.MatSliderModule,
                tabs_1.MatTabsModule,
                expansion_1.MatExpansionModule,
                tooltip_1.MatTooltipModule,
                dialog_1.MatDialogModule,
                snack_bar_1.MatSnackBarModule,
            ],
            exports: [
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                grid_list_1.MatGridListModule,
                card_1.MatCardModule,
                menu_1.MatMenuModule,
                layout_1.LayoutModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                tree_1.MatTreeModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
                toolbar_1.MatToolbarModule,
                input_1.MatInputModule,
                select_1.MatSelectModule,
                datepicker_1.MatDatepickerModule,
                core_2.MatNativeDateModule,
                checkbox_1.MatCheckboxModule,
                radio_1.MatRadioModule,
                slider_1.MatSliderModule,
                tabs_1.MatTabsModule,
                expansion_1.MatExpansionModule,
                tooltip_1.MatTooltipModule,
                dialog_1.MatDialogModule,
                snack_bar_1.MatSnackBarModule,
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
