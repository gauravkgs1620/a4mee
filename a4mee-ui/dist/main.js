(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n    <!-- <div class=\"col-md-12\" *ngIf=\"NavigateTo === 'Recipes'\">\n      <app-recipes></app-recipes>\n    </div>\n    <div class=\"col-md-12\" *ngIf=\"NavigateTo === 'Shopping-list'\">\n      <app-shopping-list></app-shopping-list>\n    </div>\n  </div> -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n  \t\t\t<button type=\"button\" class=\"navbar-toggle\" (click)=\"collapsed = !collapsed\">\n\t\t\t\t<span class=\"icon-bar\" *ngFor=\"let iconBar of [1, 2, 3]\"></span>\n  \t\t\t</button>\t\t\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">Recipe Book</a>\n\t\t<div class=\"navbar-collapse\" [class.collapse]=\"collapsed\" (window:resize)=\"collapsed = true\"></div>\n    </div>\n\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a style=\"cursor: pointer;\" [routerLink]=\"['/recipes']\">Recipes</a></li>\n        <li routerLinkActive=\"active\"><a style=\"cursor: pointer;\" [routerLink]=\"['/shopping-list']\">Shopping List</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\" appdropdown>\n          <a style=\"cursor: pointer;\" class=\"dropdown-toggle\" role=\"button\">Manage <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a style=\"cursor: pointer\" (click)=\"OnSaveRecipes()\">Save Data</a></li>\n            <li><a style=\"cursor: pointer\" (click)=\"OnFetchRecipes()\">Fetch Data</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n\n<!-- <nav class=\"navbar navbar-default\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"navbar-header\">\n  \t\t\t<button type=\"button\" class=\"navbar-toggle\" (click)=\"collapsed = !collapsed\">\n\t\t\t\t<span class=\"icon-bar\" *ngFor=\"let iconBar of [1, 2, 3]\"></span>\n  \t\t\t</button>\t\t\n  \t\t\t<a class=\"navbar-brand\">Recipe Book</a>\n\t\t<div class=\"navbar-collapse\" [class.collapse]=\"collapsed\" (window:resize)=\"collapsed = true\"></div>\n\t\t</div>\n\t<div class=\"collapse navbar-collapse\">\n\t\t<ul class=\"nav navbar-nav\">\n\t\t\t<li><a href=\"#\">Recipes</a></li>\n\t\t\t<li><a href=\"#\">Shopping-list</a></li>\n\t\t</ul>\n\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t<li class=\"dropdown\">\n\t\t\t\t<a class=\"dropdown-toggle\" role=\"button\">Manage<span class=\"caret\"></span></a>\n\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t<li><a>Save</a></li>\n\t\t\t\t\t<li><a>Fetch</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t\t\t</div>\n\n\t</div>\n</nav> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"user-row\" *ngIf=\"recipeSelected; else notrecipe\"> -->\n<div class=\"row\">\n\t<div class=\"col-xs-12\">\n\t\t<img [src]=\"recipeSelected.imagePath\" alt=\"{{ recipeSelected.name }}\" class=\"img-responsive\">\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-xs-12\">\n\t\t<h1>{{ recipeSelected.name }}</h1>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-xs-12\">\n\t\t<div class=\"btn-group\" appdropdown>\n\t\t\t<button class=\"btn btn-primary dropdown-toggle\"\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t>Manage Recipe\n\t\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</button>\n\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t<li><a style=\"cursor: pointer\" (click) = \"OnAddtoShopping()\">To Shopping-list</a></li>\n\t\t\t\t<li><a style=\"cursor: pointer\" (click) = \"OnEditRecipe()\">Edit Recipe</a></li>\n\t\t\t\t<li><a style=\"cursor: pointer\" (click) = \"OnDeleteRecipe()\">Delete Recipe</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-xs-12\">\n\t\t{{ recipeSelected.description }}\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-xs-12\">\n\t\t<ul class=\"list-group\">\n\t\t\t<li class=\"list-group-item\" *ngFor=\"let ingredient of recipeSelected.ingredients\">\n\t\t\t\t{{ ingredient.name }} - {{ ingredient.amount }}\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n<!-- </div> -->\n<!-- <ng-template #notrecipe>Please select a recipe!</ng-template> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-edit/recipe-edit.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-edit/recipe-edit.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"recipeform\" (ngSubmit)=\"OnSubmit()\">\n\t<div class=\"form-group\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"recipeform.invalid\">{{ editMode ? 'Update' : 'Save'}}</button>\n\t\t\t\t<button class=\"btn btn-danger\" type=\"button\" style=\"margin-left: 5px\" (click)=\"OnCancel()\">Cancel</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"recipeName\">Recipe Name: </label>\n\t\t<input type=\"text\"\n\t\t\t   id=\"recipeName\"\n\t\t\t   class=\"form-control\"\n\t\t\t   formControlName=\"name\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"description\">Description: </label>\n\t\t<textarea id=\"description\" rows=\"5\" cols=\"7\" class=\"form-control\" formControlName=\"description\"></textarea>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"imagePath\">ImagePath: </label>\n\t\t<input type=\"text\"\n\t\t\t   id=\"imagePath\"\n\t\t\t   class=\"form-control\"\n\t\t\t   formControlName=\"imagePath\"\n\t\t\t   >\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12\">\n\t\t\t<img [src]=\"recipeform.value.imagePath\" alt=\"{{recipeform.value.recipeName}}\" class=\"img-responsive\" style=\"size: 30px; margin-bottom: 5px\">\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12\" formArrayName=\"ingredients\">\n\t\t\t\t\t<button class=\"btn btn-primary\" type=\"button\" (click)=\"OnAddIngredient()\">Add Ingredient: </button>\n\t\t\t\t\t<div class=\"row\" \n\t\t\t\t\t\t *ngFor=\"let control of controls; let i=index\"\n\t\t\t\t\t\t [formGroupName]=\"i\">\n\t\t\t\t\t\t<div class=\"col-xs-8\">\n\t\t\t\t\t\t\t<label for=\"ingredient\">Name: </label>\n\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t   id=\"ingredient\"\n\t\t\t\t\t\t\t\t   class=\"form-control\"\n\t\t\t\t\t\t\t\t   formControlName=\"name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t\t\t\t<label for=\"amount\">Amount: </label>\n\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t   id=\"amount\"\n\t\t\t\t\t\t\t\t   class=\"form-control\"\n\t\t\t\t\t\t\t\t   formControlName=\"amount\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t\t\t\t<button class=\"btn btn-danger\" style=\"margin-top: 20px\" (click)=\"OnDeleteIngredient(i)\">X</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a style=\"cursor: pointer\"\n   class=\"list-group-item clearfix\"\n   [routerLink]=\"[index]\"\n   routerLinkActive=\"active\">\n\t<div class=\"pull-left\">\n   \t\t<h4 class=\"list-group-item-heading\">{{ recipe.name }}</h4>\n   \t\t<p class=\"list-group-item-text\">{{ recipe.description }}</p>\n\t</div>\n   \t<span class=\"pull-right\">\n   \t\t<img [src]=\"recipe.imagePath\" \n\t\t\t alt=\"{{ recipe.name }}\" \n\t\t     class=\"image responsive\" \n\t\t     style=\"max-height: 50px\">\n    </span>\n</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-list.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\t<div class=\"col-xs-12\">\n\t\t<button class=\"btn btn-primary\" (click)=\"OnAddNewRecipe()\">New Recipe</button>\n\t</div>\n</div>\n<hr>\n<div class=\"row\">\n\t<div class=\"col-xs-12\">\n\t\t<app-recipe-item *ngFor=\"let recipe of recipes; let i=index\" [recipe]= \"recipe\" [index]=\"i\">{{recipe.name}}</app-recipe-item>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-start/recipe-start.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-start/recipe-start.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Please Select a Recipe!</h3>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12\">\n<div class=\"row\">\n\t<div class=\"col-md-5\">\n\t\t<app-recipe-list></app-recipe-list>\n\t</div>\n\t<div class=\"col-md-7\">\n\t\t<!-- <app-recipe-detail [recipe]=\"recipeSelected\"></app-recipe-detail> -->\n\t\t<router-outlet></router-outlet>\n\t</div>\n\t\t<!-- <ng-template #elseText>Please Select a Recipe!</ng-template> -->\n\t<!-- <div class=\"col-md-7\">\n\t\t<app-recipe-detail [recipe]=\"recipeSelected\"></app-recipe-detail>\n\t</div>\n\t\t<ng-template #elseText>Please Select a Recipe</ng-template> -->\n\n\t\t</div>\n\t</div>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\t<div class=\"col-xs-12\">\n\t\t<form #f= \"ngForm\" (ngSubmit)=\"OnIngredientAddorUpdate()\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-5 form-group\">\n\t\t\t\t\t<label for=\"name\">Name:</label>\n\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t   id=\"name\"\n\t\t\t\t\t\t   class=\"form-control\"\n\t\t\t\t\t\t   name=\"name\"\n\t\t\t\t\t\t   ngModel\n\t\t\t\t\t\t   required>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-2 form-group\">\n\t\t\t\t\t<label for=\"amount\">Amount: </label>\n\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t   id=\"amount\"\n\t\t\t\t\t\t   class=\"form-control\"\n\t\t\t\t\t\t   name=\"amount\"\n\t\t\t\t\t\t   ngModel\n\t\t\t\t\t\t   required\n\t\t\t\t\t\t   pattern=\"^[1-9]+[0-9]*$\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t<button class=\"btn btn-success\" \n\t\t\t\t\t\t\ttype=\"submit\" \n\t\t\t\t\t\t\tstyle=\"margin-right: 5px\"\n\t\t\t\t\t\t\t[disabled]=\"f.invalid\">{{ editMode ? 'Update' : 'Add'}}</button>\n\t\t\t\t\t<button class=\"btn btn-danger\" \n\t\t\t\t\t\t\ttype=\"button\" \n\t\t\t\t\t\t\tstyle=\"margin-right: 5px\"\n\t\t\t\t\t\t\t*ngIf=\"editMode\"\n\t\t\t\t\t\t\t(click)=\"OnDeleteIngredient()\">Delete</button>\n\t\t\t\t\t<button class=\"btn btn-primary\" type=\"button\" (click)=\"OnClearIngredient()\">Clear</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\t<div class=\"col-xs-10\">\n\t\t<app-shopping-edit></app-shopping-edit>\n\t\t<hr>\n\t\t<ul class=\"list-group\">\n\t\t\t<a class=\"list-group-item\"\n\t\t\t   style=\"cursor: pointer\"\n\t\t\t   *ngFor=\"let ingredient of ingredients; let i=index\"\n\t\t\t   (click)=\"OnClickIngredient(i)\">{{ ingredient.name }} ({{ ingredient.amount }})</a>\n\t\t</ul>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-Routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-Routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipes/recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes/recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shopping-list/shopping-edit/shopping-edit.component */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var _recipes_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipes/recipes-resolver.service */ "./src/app/recipes/recipes-resolver.service.ts");










const appRoutes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__["RecipesComponent"], children: [
            { path: '', component: _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_6__["RecipeStartComponent"] },
            { path: 'new', component: _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"] },
            { path: ':id', component: _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailComponent"], resolve: [_recipes_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_9__["RecipeResolverService"]] },
            { path: ':id/edit', component: _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"], resolve: [_recipes_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_9__["RecipeResolverService"]] }
        ]
    },
    { path: 'shopping-list', component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingListComponent"], children: [
            { path: 'edit', component: _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingEditComponent"] }
        ] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'RecipeBook';
        this.NavigateTo = '';
    }
    OnNavigationSelected(SelectedNav) {
        this.NavigateTo = SelectedNav;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-list.component */ "./src/app/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recipes/recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shopping-list/shopping-edit/shopping-edit.component */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-item/recipe-item.component */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./recipes/recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _app_Routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-Routing.module */ "./src/app/app-Routing.module.ts");
/* harmony import */ var _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./recipes/recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_6__["RecipesComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingListComponent"],
            _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_9__["RecipeListComponent"],
            _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_10__["RecipeDetailComponent"],
            _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_11__["ShoppingEditComponent"],
            _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_12__["RecipeItemComponent"],
            _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_13__["RecipeStartComponent"],
            _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_14__["DropdownDirective"],
            _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_16__["RecipeEditComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_Routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataStorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataStorage.service */ "./src/app/shared/dataStorage.service.ts");
/* harmony import */ var _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipes/recipe.service */ "./src/app/recipes/recipe.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(datastorageservice, recipeservice) {
        this.datastorageservice = datastorageservice;
        this.recipeservice = recipeservice;
        this.collapsed = true;
        this.navigationselected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    OnNavigationClicked(headerselected) {
        this.navigationselected.emit(headerselected);
    }
    OnSaveRecipes() {
        this.datastorageservice.CreateandStore();
    }
    OnFetchRecipes() {
        this.datastorageservice.FetchRecipes().subscribe();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _shared_dataStorage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] },
    { type: _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderComponent.prototype, "navigationselected", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




let RecipeDetailComponent = class RecipeDetailComponent {
    constructor(recipeservice, route, router) {
        this.recipeservice = recipeservice;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.index = +params['id'];
            this.recipeSelected = this.recipeservice.getRecipe(this.index);
        });
    }
    OnAddtoShopping() {
        this.recipeservice.addIngredientstoShoppinglist(this.recipeSelected.ingredients);
    }
    OnEditRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }
    OnDeleteRecipe() {
        this.recipeservice.deleteRecipe(this.index);
        this.router.navigate([''], { relativeTo: this.route });
    }
};
RecipeDetailComponent.ctorParameters = () => [
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-detail.component.css */ "./src/app/recipes/recipe-detail/recipe-detail.component.css")).default]
    })
], RecipeDetailComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched{\r\n\tborder: 1px solid red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9yZWNpcGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MscUJBQXFCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9yZWNpcGUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLCB0ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function() { return RecipeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");





let RecipeEditComponent = class RecipeEditComponent {
    constructor(route, recipeservice, router) {
        this.route = route;
        this.recipeservice = recipeservice;
        this.router = router;
        this.editMode = false;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.index = +params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
            // if (this.index >= 0) {
            //   this.editMode += true;
            // }
        });
    }
    get controls() {
        return this.recipeform.get('ingredients').controls;
    }
    initForm() {
        let recipeName = '';
        let description = '';
        let imagePath = '';
        let recipeingredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        if (this.editMode) {
            const recipe = this.recipeservice.getRecipe(this.index);
            recipeName = recipe.name;
            description = recipe.description;
            imagePath = recipe.imagePath;
            if (recipe['ingredients']) {
                for (let ingredient of recipe.ingredients) {
                    recipeingredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                        'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ingredient.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
                    }));
                }
            }
        }
        this.recipeform = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'imagePath': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](imagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'ingredients': recipeingredients
        });
    }
    OnAddIngredient() {
        this.recipeform.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
        }));
    }
    OnDeleteIngredient(i) {
        this.recipeform.get('ingredients').removeAt(i);
        console.log(this.recipeform.value);
    }
    OnSubmit() {
        // console.log(this.recipeform.value['recipeName']);
        console.log(this.recipeform.value.recipeName);
        if (this.editMode) {
            this.recipeservice.UpdateRecipe(this.recipeform.value, this.index);
        }
        else {
            this.recipeservice.AddNewRecipes(this.recipeform.value);
        }
        this.recipeform.reset();
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    OnCancel() {
        this.router.navigate([''], { relativeTo: this.route });
    }
};
RecipeEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RecipeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-edit/recipe-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-edit.component.css */ "./src/app/recipes/recipe-edit/recipe-edit.component.css")).default]
    })
], RecipeEditComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


let RecipeItemComponent = class RecipeItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipeItemComponent.prototype, "recipe", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipeItemComponent.prototype, "index", void 0);
RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-item.component.css */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css")).default]
    })
], RecipeItemComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




let RecipeListComponent = class RecipeListComponent {
    // recipes: Recipe[] = [
    //   new Recipe('Pasta', 'very delicious', 'https://p0.pikrepo.com/preview/870/417/pasta-dish.jpg'),
    //   new Recipe('Cheesecake', 'Should I say more?', 'https://p1.pxfuel.com/preview/987/274/461/cake-piece-of-cake-recipe-a-piece-of.jpg')
    // ]
    constructor(recipeservice, router, route) {
        this.recipeservice = recipeservice;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.recipeservice.recipesChanged.subscribe((recipes) => {
            this.recipes = recipes;
            console.log(this.recipes);
        });
        this.recipes = this.recipeservice.getRecipes();
    }
    OnAddNewRecipe() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
};
RecipeListComponent.ctorParameters = () => [
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-list.component.css */ "./src/app/recipes/recipe-list/recipe-list.component.css")).default]
    })
], RecipeListComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLXN0YXJ0L3JlY2lwZS1zdGFydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.ts ***!
  \****************************************************************/
/*! exports provided: RecipeStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeStartComponent", function() { return RecipeStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


let RecipeStartComponent = class RecipeStartComponent {
    constructor() { }
    ngOnInit() {
    }
};
RecipeStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-start',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-start/recipe-start.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-start.component.css */ "./src/app/recipes/recipe-start/recipe-start.component.css")).default]
    })
], RecipeStartComponent);



/***/ }),

/***/ "./src/app/recipes/recipe.service.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipe.service.ts ***!
  \*******************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");




let RecipeService = class RecipeService {
    constructor(shoppinglistservice) {
        this.shoppinglistservice = shoppinglistservice;
        // recipeSelected = new EventEmitter<Recipe> ();
        // recipeChanged = new EventEmitter<Recipe[]> ();
        this.recipesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // recipes: Recipe[] = [
        // 	new Recipe('Pasta', 'very delicious', 'https://p0.pikrepo.com/preview/870/417/pasta-dish.jpg',[
        // 		new Ingredient('spaghetti', 1),
        // 		new Ingredient('tomato sauce', 1)
        // 	]),
        // 	new Recipe('Cheesecake', 'Should I say more?', 'https://p1.pxfuel.com/preview/987/274/461/cake-piece-of-cake-recipe-a-piece-of.jpg', [
        // 		new Ingredient('cream cheese', 2),
        // 		new Ingredient('sugar', 1)
        // 	])
        //   ]
        this.recipes = [];
    }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index) {
        return this.recipes[index];
    }
    setRecipes(recipes) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
    addIngredientstoShoppinglist(ingredients) {
        this.shoppinglistservice.AddIngredients(ingredients);
    }
    AddNewRecipes(recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    UpdateRecipe(recipe, index) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
};
RecipeService.ctorParameters = () => [
    { type: _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"] }
];
RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], RecipeService);



/***/ }),

/***/ "./src/app/recipes/recipes-resolver.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/recipes/recipes-resolver.service.ts ***!
  \*****************************************************/
/*! exports provided: RecipeResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeResolverService", function() { return RecipeResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _shared_dataStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dataStorage.service */ "./src/app/shared/dataStorage.service.ts");




let RecipeResolverService = class RecipeResolverService {
    constructor(recipeservice, datastorageservice) {
        this.recipeservice = recipeservice;
        this.datastorageservice = datastorageservice;
    }
    resolve(route, state) {
        const recipes = this.recipeservice.getRecipes();
        if (recipes.length === 0) {
            return this.datastorageservice.FetchRecipes();
        }
        else {
            return recipes;
        }
    }
};
RecipeResolverService.ctorParameters = () => [
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] },
    { type: _shared_dataStorage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"] }
];
RecipeResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], RecipeResolverService);



/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/*!***********************************************!*\
  !*** ./src/app/recipes/recipes.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


let RecipesComponent = class RecipesComponent {
    constructor() { }
    ngOnInit() {
    }
};
RecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipes.component.css */ "./src/app/recipes/recipes.component.css")).default]
    })
], RecipesComponent);



/***/ }),

/***/ "./src/app/shared/dataStorage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/dataStorage.service.ts ***!
  \***********************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipes/recipe.service */ "./src/app/recipes/recipe.service.ts");





let DataStorageService = class DataStorageService {
    constructor(recipeservice, http) {
        this.recipeservice = recipeservice;
        this.http = http;
    }
    CreateandStore() {
        const recipes = this.recipeservice.getRecipes();
        this.http.put('https://ng-recipebook-1f43c-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(responsedata => {
            // console.log(responsedata);
        });
    }
    FetchRecipes() {
        return this.http.get('https://ng-recipebook-1f43c-default-rtdb.firebaseio.com/recipes.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(recipes => {
            return recipes.map(recipe => {
                return Object.assign({}, recipe, { ingredients: recipe.ingredients ? recipe.ingredients : [] });
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(recipes => {
            this.recipeservice.setRecipes(recipes);
        }));
    }
};
DataStorageService.ctorParameters = () => [
    { type: _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], DataStorageService);



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


let DropdownDirective = class DropdownDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.IsOpen = false;
    }
    toggleOpen(event) {
        this.IsOpen = this.elementRef.nativeElement.contains(event.target) ? !this.IsOpen : false;
    }
};
DropdownDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open')
], DropdownDirective.prototype, "IsOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document: click', ['$event'])
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appdropdown]'
    })
], DropdownDirective);



/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Ingredient {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}


/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctZWRpdC9zaG9wcGluZy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");




let ShoppingEditComponent = class ShoppingEditComponent {
    constructor(shoppinglistservice) {
        this.shoppinglistservice = shoppinglistservice;
        this.editMode = false;
    }
    ngOnInit() {
        this.subscription = this.shoppinglistservice.ingredientSelected.subscribe((index) => {
            this.index = index;
            this.editMode = true;
            this.ingredient = this.shoppinglistservice.getIngredient(this.index);
            this.IngredientForm.setValue({
                name: this.ingredient.name,
                amount: this.ingredient.amount
            });
        });
    }
    OnIngredientAddorUpdate() {
        this.name = this.IngredientForm.value.name;
        this.amount = this.IngredientForm.value.amount;
        const ingredient = new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"](this.name, this.amount);
        if (!this.editMode) {
            this.shoppinglistservice.AddIngredient(ingredient);
        }
        else {
            this.shoppinglistservice.UpdateIngredient(this.index, ingredient);
            this.editMode = false;
        }
        this.IngredientForm.reset();
        // this.IngredientAdded.emit(ingredient);
    }
    OnDeleteIngredient() {
        this.shoppinglistservice.DeleteIngredient(this.index);
        this.editMode = false;
        this.IngredientForm.reset();
    }
    OnClearIngredient() {
        if (!this.ingredient) {
            return;
        }
        this.clearconfirm = window.confirm('Are you sure you want to clear the fields?');
        if (this.clearconfirm) {
            this.IngredientForm.reset();
        }
        else
            return;
        if (this.editMode) {
            this.editMode = false;
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
ShoppingEditComponent.ctorParameters = () => [
    { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], ShoppingEditComponent.prototype, "IngredientForm", void 0);
ShoppingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-edit.component.css */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css")).default]
    })
], ShoppingEditComponent);



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");



let ShoppingListComponent = class ShoppingListComponent {
    constructor(shoppinglistservice) {
        this.shoppinglistservice = shoppinglistservice;
    }
    ngOnInit() {
        this.ingredients = this.shoppinglistservice.getIngredients();
        this.ingredientSub = this.shoppinglistservice.ingredientsChanged.subscribe((ingredients) => {
            this.ingredients = ingredients;
        });
    }
    OnClickIngredient(index) {
        this.shoppinglistservice.ingredientSelected.next(index);
    }
    // OnIngredientAdded(ingredient: Ingredient) {
    //   this.shoppinglistservice.IngredientsUpdate(ingredient);
    // }
    ngOnDestroy() {
        this.ingredientSub.unsubscribe();
    }
};
ShoppingListComponent.ctorParameters = () => [
    { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"] }
];
ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-list.component.css */ "./src/app/shopping-list/shopping-list.component.css")).default]
    })
], ShoppingListComponent);



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");




let ShoppingListService = class ShoppingListService {
    constructor() {
        this.ingredientsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ingredientSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ingredients = [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('apple', 5),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Tomato', 10)
        ];
    }
    getIngredients() {
        return this.ingredients.slice();
    }
    getIngredient(index) {
        return this.ingredients[index];
    }
    AddIngredient(ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    AddIngredients(ingredients) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    UpdateIngredient(index, ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    DeleteIngredient(index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
};
ShoppingListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ShoppingListService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rashm\CourseProject\RecipeBook\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map