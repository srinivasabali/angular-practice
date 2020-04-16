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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg\"></div>\n<div class=\"container main-bg\">\n  <app-products></app-products>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/editbook/editbook.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/editbook/editbook.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\" id=\"modal-basic-title\">{{booktitle}} Book details</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"bookGroup\">\n  <p><b>Title: &nbsp;</b><input formControlName=\"title\" type=\"text\"/></p>\n         <p><b>Author: &nbsp;</b><input formControlName=\"author\" type=\"text\"/></p>\n          <p><b>ISBN: &nbsp;</b><input type=\"number\" formControlName=\"isbn\"/></p>\n           <p><b>Publisher: &nbsp;</b><input type=\"text\" formControlName=\"publisher\"/></p>\n            <p class=\"d-flex\"><b>Publication Date: &nbsp;</b>\n            <span><div class=\"form-group\">\n      <div class=\"input-group\">\n        <input id=\"dateOf\" class=\"form-control\" formControlName=\"publication\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>\n        </div>\n      </div>\n    </div></span></p>\n      <p class=\"d-flex\"><b>Genre: &nbsp;</b><select formControlName=\"genre\">\n          <option *ngFor=\"let value of genrevalues\" [ngValue]=\"value\">{{value.name}}</option>\n        </select></p>\n          <p class=\"d-flex\"><b>Format: &nbsp;</b><select formControlName=\"format\">\n        <option *ngFor=\"let value of formatvalues\" [ngValue]=\"value\">{{value.name}}</option>\n      </select></p>\n      <p><b>Price($): &nbsp;</b><input type=\"number\" formControlName=\"price\"/></p>\n          \n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveDetails()\">Save</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-notfound/page-notfound.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-notfound/page-notfound.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-notfound works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2><br/>Book Store:</h2>\n<div class=\"container\">\n  <div class=\"row\">\n    <p class=\"padd8\" [ngStyle]=\"{'font-size':'14px','font-weight':'bold','color':'black'}\">Search your book: &nbsp; <input type=\"text\" [(ngModel)]=\"keytext\" placeholder=\"Search by title\" (ngModelChange)=\"filterBooks($event)\"/></p>\n    </div>\n      <div class=\"row\">\n<div *ngFor=\"let data of products;let i = index\" class=\"col-sm-4 padd8\">\n<div class=\"book-container col-sm-12\">\n        <div class=\"col-sm-5 padd0\">\n          <div class=\"checkitem\"><input type=\"checkbox\" [(ngModel)]=\"data.checked\"/></div>\n          <div><img src=\"./../assets/images/booksimg.jpeg\" alt=\"img\" class=\"img-fluid\"/></div>\n          <button (click)=\"editBook(i,data.id)\">Edit</button>\n          <button (click)=\"deleteBook(data.id)\">Delete</button>\n          </div>\n        <div class=\"col-sm-7 book-content padd8\">\n          <p><b>Title: &nbsp;</b>{{data.title}}</p>\n           <p><b>Author: &nbsp;</b>{{data.author}}</p>\n            <p><b>ISBN: &nbsp;</b>{{data.isbn}}</p>\n             <p><b>Publisher: &nbsp;</b>{{data.publisher}}</p>\n              <p><b>Publication Date: &nbsp;</b>{{data.publicationDate}}</p>\n              <p><b>Genre: &nbsp;</b>{{data.genre}}</p>\n              <p><b>Format: &nbsp;</b>{{data.format}}</p>\n              <p><b>Price: &nbsp;</b>{{data.price | currency}}</p>\n          </div>\n</div>\n      </div>\n      </div>\n</div>\n\n\n<br/>\n<div [ngStyle]=\"{'width':'50%'}\" *ngIf=\"!norecords\">\n  <button type=\"button\" (click)=\"addBook()\">Add Book</button>\n  <button type=\"button\" (click)=\"deleteAll()\">Delete All</button>\n</div>\n<p [ngStyle]=\"{'color':'black','font-size':'13px'}\" *ngIf=\"norecords\">No records found</p>\n<p [ngStyle]=\"{'color':'black','font-size':'13px'}\" *ngIf=\"!norecords\">Note: &nbsp; Select checkboxes to delete multiple items at a time using \"Delete All\" button</p>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgimg {\n  height: 100px;\n  background-image: url('bookheader.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFNyaW5pdmFzXFxMZWFybmluZ1xcSmF2YUZ1bGxTdGFja1xcQW5ndWxhclxcMjAxMTExNTEtU3Jpbml2YXNhIEJhbGktTFBBLTAwMS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxhQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQ0giLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdpbWd7XHJcbiAgIGhlaWdodDogMTAwcHg7XHJcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltYWdlcy9ib29raGVhZGVyLmpwZycpO1xyXG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4iLCIuYmdpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL2Jvb2toZWFkZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-notfound/page-notfound.component */ "./src/app/page-notfound/page-notfound.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modals_editbook_editbook_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/editbook/editbook.component */ "./src/app/modals/editbook/editbook.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_6__["PageNotfoundComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
            _modals_editbook_editbook_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        exports: [_modals_editbook_editbook_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"]],
        entryComponents: [_modals_editbook_editbook_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/modals/editbook/editbook.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/modals/editbook/editbook.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 13px;\n  margin: 0;\n  display: flex;\n}\n\n.modal-header, .modal-footer {\n  padding: 8px 16px;\n  border: 0;\n}\n\ninput, select {\n  height: 30px;\n  margin-bottom: 6px;\n  margin-left: auto;\n  width: 150px;\n}\n\n.modal-footer button {\n  font-weight: bold;\n  font-size: 13px;\n  color: white;\n}\n\np span {\n  margin-left: auto;\n}\n\ninput.form-control {\n  width: 125px;\n}\n\n.modal-header button:focus {\n  outline: none;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2VkaXRib29rL0M6XFxTcmluaXZhc1xcTGVhcm5pbmdcXEphdmFGdWxsU3RhY2tcXEFuZ3VsYXJcXDIwMTExMTUxLVNyaW5pdmFzYSBCYWxpLUxQQS0wMDEvc3JjXFxhcHBcXG1vZGFsc1xcZWRpdGJvb2tcXGVkaXRib29rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2RhbHMvZWRpdGJvb2svZWRpdGJvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtBQ0VGOztBREFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDSUY7O0FERkE7RUFDRSxpQkFBQTtBQ0tGOztBREhFO0VBQ0EsWUFBQTtBQ01GOztBREhFO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvZWRpdGJvb2svZWRpdGJvb2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ubW9kYWwtaGVhZGVyLC5tb2RhbC1mb290ZXJ7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbmlucHV0LHNlbGVjdHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5tb2RhbC1mb290ZXIgYnV0dG9ue1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxucCBzcGFue1xyXG4gIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgfVxyXG4gIGlucHV0LmZvcm0tY29udHJvbHtcclxuICB3aWR0aDoxMjVweDtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1oZWFkZXIgYnV0dG9uOmZvY3Vze1xyXG4gIG91dGxpbmU6bm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuIiwicCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubW9kYWwtaGVhZGVyLCAubW9kYWwtZm9vdGVyIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlcjogMDtcbn1cblxuaW5wdXQsIHNlbGVjdCB7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4ubW9kYWwtZm9vdGVyIGJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxucCBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbmlucHV0LmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMjVweDtcbn1cblxuLm1vZGFsLWhlYWRlciBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modals/editbook/editbook.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modals/editbook/editbook.component.ts ***!
  \*******************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let EditComponent = class EditComponent {
    constructor(modal) {
        this.modal = modal;
        this.formatvalues = [
            { name: 'kindle', abbrev: 'kindle' },
            { name: 'eBook', abbrev: 'eBook' },
            { name: 'MSReader', abbrev: 'MSReader' }
        ];
        this.genrevalues = [
            { name: 'Adventure', abbrev: 'Adventure' },
            { name: 'Fantasy', abbrev: 'Fantasy' },
            { name: 'Drama', abbrev: 'Drama' }
        ];
        this.emitEditedBook = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](this.data);
    }
    ngOnInit() {
        console.log(this.data);
        this.data = this.bookData;
        this.formatvalues.forEach((x, i) => {
            if (this.booktitle == "Add") {
                this.val = null;
            }
            else {
                if (x.abbrev.toLocaleLowerCase() == this.data.format.toLocaleLowerCase()) {
                    this.val = this.formatvalues[i];
                }
                else {
                    return;
                }
            }
        });
        this.genrevalues.forEach((x, i) => {
            if (this.booktitle == "Add") {
                this.genreval = null;
            }
            else {
                if (x.abbrev.toLocaleLowerCase() == this.data.genre.toLocaleLowerCase()) {
                    this.genreval = this.genrevalues[i];
                }
                else {
                    return;
                }
            }
        });
        let sample = new Date(this.data.publicationDate);
        this.publicationDate = { day: sample.getDate(), month: sample.getMonth() + 1, year: sample.getFullYear() };
        this.bookGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.data.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.data.author, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            isbn: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.data.isbn, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            publisher: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.data.publisher, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            publication: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.publicationDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            genre: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.genreval, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            format: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.val, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.data.price, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        console.log(this.bookGroup);
    }
    fieldValue(fieldname) {
        return this.bookGroup.controls[fieldname];
    }
    saveDetails() {
        let x = this.fieldValue('publication').value;
        const str = {
            title: this.fieldValue('title').value,
            author: this.fieldValue('author').value,
            isbn: this.fieldValue('isbn').value,
            publisher: this.fieldValue('publisher').value,
            publicationDate: x.year + "-" + x.month + "-" + x.day,
            genre: this.fieldValue('genre').value.name,
            format: this.fieldValue('format').value.name,
            price: this.fieldValue('price').value
        };
        this.modal.close('Close click');
        console.log(str);
        this.emitEditedBook.emit(str);
    }
};
EditComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EditComponent.prototype, "bookData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], EditComponent.prototype, "booktitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EditComponent.prototype, "emitEditedBook", void 0);
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editbook',
        template: __webpack_require__(/*! raw-loader!./editbook.component.html */ "./node_modules/raw-loader/index.js!./src/app/modals/editbook/editbook.component.html"),
        styles: [__webpack_require__(/*! ./editbook.component.scss */ "./src/app/modals/editbook/editbook.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
], EditComponent);



/***/ }),

/***/ "./src/app/page-notfound/page-notfound.component.scss":
/*!************************************************************!*\
  !*** ./src/app/page-notfound/page-notfound.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90Zm91bmQvcGFnZS1ub3Rmb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/page-notfound/page-notfound.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/page-notfound/page-notfound.component.ts ***!
  \**********************************************************/
/*! exports provided: PageNotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotfoundComponent", function() { return PageNotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotfoundComponent = class PageNotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-notfound',
        template: __webpack_require__(/*! raw-loader!./page-notfound.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-notfound/page-notfound.component.html"),
        styles: [__webpack_require__(/*! ./page-notfound.component.scss */ "./src/app/page-notfound/page-notfound.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageNotfoundComponent);



/***/ }),

/***/ "./src/app/products.service.ts":
/*!*************************************!*\
  !*** ./src/app/products.service.ts ***!
  \*************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductsService = class ProductsService {
    constructor(http) {
        this.http = http;
    }
    getBooks() {
        return this.http.get("http://localhost:3000/books/");
    }
    updateBook(x, id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put("http://localhost:3000/books/" + id, JSON.stringify(x), { headers: headers });
    }
    addBook(data) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-Type': 'application/json' });
        return this.http.post("http://localhost:3000/books/", JSON.stringify(data), { headers: header });
    }
    deleteBook(id) {
        return this.http.delete("http://localhost:3000/books/" + id);
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProductsService);



/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\np {\n  margin: 0;\n  font-size: 11px;\n  color: white;\n}\n\nbutton {\n  background: blue;\n  color: white;\n  border: 0px solid;\n  margin-bottom: 8px;\n  padding: 4px 8px;\n  width: 48%;\n  font-size: 12px;\n  font-weight: bold;\n  border-radius: 2px;\n  margin-left: 2px;\n}\n\nimg {\n  width: 100%;\n  height: 100px;\n  margin-bottom: 5px;\n}\n\n.book-content {\n  vertical-align: top;\n}\n\n.book-container {\n  border: 1px solid black;\n  display: flex;\n  padding: 8px;\n  background: rgba(0, 0, 0, 0.7);\n  box-shadow: 2px 2px 3px #000;\n  border-radius: 4px;\n}\n\n.padd0 {\n  padding: 0 !important;\n}\n\n.padd8 {\n  padding: 0 6px !important;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvQzpcXFNyaW5pdmFzXFxMZWFybmluZ1xcSmF2YUZ1bGxTdGFja1xcQW5ndWxhclxcMjAxMTExNTEtU3Jpbml2YXNhIEJhbGktTFBBLTAwMS9zcmNcXGFwcFxccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDRSxrQkFBQTtBQ0tKOztBREhBO0VBQ0UscUJBQUE7QUNNRjs7QURKQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxucHtcclxuICBtYXJnaW46MDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmJ1dHRvbntcclxuICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5pbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmJvb2stY29udGVudHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbi5ib29rLWNvbnRhaW5lcntcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ucGFkZDB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5wYWRkOHtcclxuICBwYWRkaW5nOiAwIDZweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG4iLCIucm93IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMHB4IHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIHdpZHRoOiA0OCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJvb2stY29udGVudCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5ib29rLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucGFkZDAge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wYWRkOCB7XG4gIHBhZGRpbmc6IDAgNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modals_editbook_editbook_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/editbook/editbook.component */ "./src/app/modals/editbook/editbook.component.ts");





let ProductsComponent = class ProductsComponent {
    constructor(prodservice, modalService) {
        this.prodservice = prodservice;
        this.modalService = modalService;
        this.products = [];
        this.tempProducts = [];
        this.norecords = false;
    }
    ngOnInit() {
        this.prodservice.getBooks().subscribe((data) => {
            console.log(data);
            this.tempProducts = data;
            this.products = data;
            this.products.forEach((e) => {
                e.checked = false;
            });
        }, (error) => {
            console.log(error);
        });
    }
    addBook() {
        const addbook = this.modalService.open(_modals_editbook_editbook_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"], { ariaLabelledBy: 'modal-basic-title' });
        addbook.componentInstance.booktitle = 'Add';
        addbook.componentInstance.bookData = {};
        addbook.componentInstance.emitEditedBook.subscribe((x) => {
            console.log('x', x);
            addbook.result.then((result) => {
                if (result) {
                    this.addbook(x);
                }
                else {
                    this.ngOnInit();
                }
            });
        }, (error) => {
            console.log('error', error);
        });
    }
    editBook(index, id) {
        const editedbook = this.modalService.open(_modals_editbook_editbook_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"], { ariaLabelledBy: 'modal-basic-title' });
        editedbook.componentInstance.booktitle = 'Edit';
        editedbook.componentInstance.bookData = this.products[index];
        editedbook.componentInstance.emitEditedBook.subscribe((x) => {
            editedbook.result.then((result) => {
                if (result) {
                    this.updatebook(x, id);
                }
                else {
                    this.ngOnInit();
                }
            });
        }, (error) => {
            console.log('error', error);
        });
    }
    updatebook(x, id) {
        this.prodservice.updateBook(x, id).subscribe((data) => {
            this.ngOnInit();
        }, (error) => {
            console.log(error);
        });
    }
    addbook(x) {
        this.prodservice.addBook(x).subscribe((data) => {
            this.ngOnInit();
        }, (error) => {
            console.log(error);
        });
    }
    deleteBook(id) {
        this.prodservice.deleteBook(id).subscribe((result) => {
            this.ngOnInit();
        }, (error) => {
            console.error(error);
        });
    }
    filterBooks(event) {
        const keytext = event;
        if (keytext) {
            const arr = this.tempProducts.filter((data) => {
                return data.title.toLocaleLowerCase().indexOf(keytext.toLocaleLowerCase()) > -1;
            });
            if (arr.length == 0) {
                this.norecords = true;
                this.products = [];
            }
            else {
                this.products = arr;
                this.norecords = false;
            }
        }
        else {
            this.products = this.tempProducts;
            this.norecords = false;
        }
    }
    deleteAll() {
        this.products.forEach(element => {
            if (element.checked) {
                this.deleteBook(element.id);
            }
            else {
                return;
            }
        });
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html"),
        styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
], ProductsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Srinivas\Learning\JavaFullStack\Angular\20111151-Srinivasa Bali-LPA-001\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map