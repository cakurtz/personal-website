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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <menu-bar></menu-bar>\n  <gallery-bar></gallery-bar>\n  <footer></footer>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\">\n\t<p>This website was designed and built by Coty Kurtz</p>\n\t<p>The source code can be found <a href=\"https://github.com/cakurtz/personal-website\" class=\"github-link\">here</a></p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/gallery-bar/gallery-bar.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/gallery-bar/gallery-bar.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-container\">\n\t<div class=\"gallery-bar-container\" *ngFor=\"let category of iconMapKeys\">\n\t\t<div class=\"icon-img-container\" *ngFor=\"let icon of getIcons(category)\">\n\t\t\t<img src=\"{{icon}}\">\n\t\t</div>\n\t\t<div class=\"arrow-icon\">\n\t\t\t<img src=\"../../assets/arrow-icon.png\">\n\t\t</div>\n\t\t<div class=\"category-header\">\n\t\t\t<p>{{ category }}</p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/gallery/gallery.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/gallery/gallery.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/menu-bar/menu-bar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/menu-bar/menu-bar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-bar-container\">\n\t<div class=\"menu-logo\">\n\t\t<img src=\"../../assets/ck-logo-white.png\">\n\t</div>\n\t<div class=\"menu-button-container\">\n\t\t<div class=\"menu-button\">\n\t\t\t<p>Home</p>\n\t\t</div>\n\t\t<div class=\"menu-button\">\n\t\t\t<p>Experience</p>\n\t\t</div>\n\t\t<div class=\"menu-button\">\n\t\t\t<p>Projects</p>\n\t\t</div>\n\t\t<div class=\"menu-button\">\n\t\t\t<p>Hobbies</p>\n\t\t</div>\n\t</div>\n</div>"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
    constructor() {
        this.title = 'coty-kurtz';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/footer/footer.component */ "./src/components/footer/footer.component.ts");
/* harmony import */ var src_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/gallery/gallery.component */ "./src/components/gallery/gallery.component.ts");
/* harmony import */ var src_components_gallery_bar_gallery_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/gallery-bar/gallery-bar.component */ "./src/components/gallery-bar/gallery-bar.component.ts");
/* harmony import */ var src_components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/menu-bar/menu-bar.component */ "./src/components/menu-bar/menu-bar.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            src_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["Footer"],
            src_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["Gallery"],
            src_components_gallery_bar_gallery_bar_component__WEBPACK_IMPORTED_MODULE_7__["GalleryBar"],
            src_components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_8__["MenuBar"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/file-retrieval.service.ts":
/*!*******************************************!*\
  !*** ./src/app/file-retrieval.service.ts ***!
  \*******************************************/
/*! exports provided: FileRetrievalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileRetrievalService", function() { return FileRetrievalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// var S3 = require('aws-sdk/clients/s3');
let FileRetrievalService = class FileRetrievalService {
    constructor() {
        this.params = {
            Prefix: 'images/'
        };
        AWS.config.region = 'us-east-1'; // Region
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-1:5bac0054-a95b-4b59-931d-7e1b052023c6',
        });
        this.s3 = new AWS.S3({
            apiVersion: '2006-03-01',
            params: { Bucket: "www.cotykurtz.com" }
        });
    }
    getS3ObjectList() {
        return new Promise((resolve, reject) => {
            this.s3.listObjects(this.params, function (err, data) {
                if (err) {
                    console.log(err);
                    reject();
                }
                else {
                    console.log(data);
                    console.log(data.Contents.length);
                    resolve(data.Contents);
                }
            });
        });
    }
};
FileRetrievalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FileRetrievalService);



/***/ }),

/***/ "./src/components/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/components/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-container {\n  background: #2f3030;\n  padding: 30px 0;\n  font-size: 12px;\n}\n.footer-container p {\n  color: #808080;\n  margin: 0;\n}\n.footer-container .github-link {\n  color: #0b9de6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3R5a3VydHovcGVyc29uYWwtd2Vic2l0ZS9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0ksY0FBQTtFQUNBLFNBQUE7QUNDUjtBREVJO0VBQ0ksY0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogIzJmMzAzMDtcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjODA4MDgwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgLmdpdGh1Yi1saW5rIHtcbiAgICAgICAgY29sb3I6ICMwYjlkZTY7XG4gICAgfVxufSIsIi5mb290ZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogIzJmMzAzMDtcbiAgcGFkZGluZzogMzBweCAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZm9vdGVyLWNvbnRhaW5lciBwIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIG1hcmdpbjogMDtcbn1cbi5mb290ZXItY29udGFpbmVyIC5naXRodWItbGluayB7XG4gIGNvbG9yOiAjMGI5ZGU2O1xufSJdfQ== */"

/***/ }),

/***/ "./src/components/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/components/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Footer = class Footer {
    ngOnInit() {
    }
};
Footer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/components/footer/footer.component.scss")]
    })
], Footer);



/***/ }),

/***/ "./src/components/gallery-bar/gallery-bar.component.scss":
/*!***************************************************************!*\
  !*** ./src/components/gallery-bar/gallery-bar.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  background: url('world-map-art.png');\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\ndiv.gallery-container {\n  border: 2px solid black;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 30px;\n  margin: 50px auto;\n  padding: 50px;\n}\n\ndiv.gallery-container div.gallery-bar-container {\n  display: flex;\n  align-items: center;\n}\n\ndiv.gallery-container div.gallery-bar-container .category-header {\n  padding-left: 25px;\n  font-size: 25px;\n}\n\ndiv.gallery-container div.gallery-bar-container .arrow-icon img {\n  padding-left: 25px;\n  height: 30px;\n  width: 30px;\n}\n\ndiv.gallery-container div.gallery-bar-container img {\n  height: 100px;\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3R5a3VydHovcGVyc29uYWwtd2Vic2l0ZS9zcmMvY29tcG9uZW50cy9nYWxsZXJ5LWJhci9nYWxsZXJ5LWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9jb21wb25lbnRzL2dhbGxlcnktYmFyL2dhbGxlcnktYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQ0NEOztBREVBO0VBQ0MsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ0Q7O0FEQ0M7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDRTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtBQ0NIOztBREVFO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0FIOztBREdFO0VBQ0MsYUFBQTtFQUNBLFdBQUE7QUNESCIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9nYWxsZXJ5LWJhci9nYWxsZXJ5LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvd29ybGQtbWFwLWFydC5wbmcnKTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG5kaXYuZ2FsbGVyeS1jb250YWluZXIge1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuXHRib3JkZXItcmFkaXVzOiAzMHB4O1xuXHRtYXJnaW46IDUwcHggYXV0bztcblx0cGFkZGluZzogNTBweDtcblxuXHRkaXYuZ2FsbGVyeS1iYXItY29udGFpbmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XG5cdFx0LmNhdGVnb3J5LWhlYWRlciB7XG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDI1cHg7XG5cdFx0XHRmb250LXNpemU6IDI1cHg7XG5cdFx0fVxuXG5cdFx0LmFycm93LWljb24gaW1nIHtcblx0XHRcdHBhZGRpbmctbGVmdDogMjVweDtcblx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdHdpZHRoOiAzMHB4O1xuXHRcdH1cblxuXHRcdGltZyB7XG5cdFx0XHRoZWlnaHQ6IDEwMHB4O1xuXHRcdFx0d2lkdGg6IDgwcHg7XG5cdFx0fVxuXHR9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy93b3JsZC1tYXAtYXJ0LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG5kaXYuZ2FsbGVyeS1jb250YWluZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgcGFkZGluZzogNTBweDtcbn1cbmRpdi5nYWxsZXJ5LWNvbnRhaW5lciBkaXYuZ2FsbGVyeS1iYXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmRpdi5nYWxsZXJ5LWNvbnRhaW5lciBkaXYuZ2FsbGVyeS1iYXItY29udGFpbmVyIC5jYXRlZ29yeS1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbmRpdi5nYWxsZXJ5LWNvbnRhaW5lciBkaXYuZ2FsbGVyeS1iYXItY29udGFpbmVyIC5hcnJvdy1pY29uIGltZyB7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cbmRpdi5nYWxsZXJ5LWNvbnRhaW5lciBkaXYuZ2FsbGVyeS1iYXItY29udGFpbmVyIGltZyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiA4MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/components/gallery-bar/gallery-bar.component.ts":
/*!*************************************************************!*\
  !*** ./src/components/gallery-bar/gallery-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: GalleryBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryBar", function() { return GalleryBar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_file_retrieval_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/file-retrieval.service */ "./src/app/file-retrieval.service.ts");



let GalleryBar = class GalleryBar {
    constructor(fileRetrievalService) {
        this.fileRetrievalService = fileRetrievalService;
        this.title = 'gallery-bar';
        this.baseUrl = 'https://s3.amazonaws.com/www.cotykurtz.com/';
        this.imagePath = 'images/';
        this.iconPath = 'icons/';
        this.imageEnding = ".jpeg";
    }
    ngOnInit() {
        this.iconMap = new Map();
        this.categoryNames = [];
        this.iconPaths = [];
        this.fileRetrievalService.getS3ObjectList().then(result => {
            this.barLength = result.length;
            this.urlPaths = this.extractUrlPath(result);
            this.extractCategoryNames();
        });
    }
    extractUrlPath(data) {
        const urls = [];
        for (const entry of data) {
            urls.push(entry.Key);
        }
        return urls;
    }
    extractCategoryNames() {
        var currentPath = "";
        var currentCategory = "";
        for (const path of this.urlPaths) {
            if (path.match(/^images\/[A-z]+\/$/)) {
                const splitName = path.split("/");
                currentCategory = splitName[1];
                this.categoryNames.push(currentCategory);
                this.iconMap.set(currentCategory, []);
                currentPath = path;
            }
            if (path.startsWith(currentPath + this.iconPath) && path.endsWith(this.imageEnding)) {
                const categoryValues = this.iconMap.get(currentCategory);
                categoryValues.push(this.baseUrl + path);
            }
        }
        this.iconMapKeys = this.iconMap.keys();
    }
    extractIconsForCategory(category) {
        const mapIconPaths = [];
        for (const path of this.urlPaths) {
            if (path.match(/^images\/[A-z]+\/icons\/.+\.jpeg$/)) {
                this.iconPaths.push(path);
                mapIconPaths.push(path);
            }
        }
        this.iconMap.set(category, mapIconPaths);
    }
    getIcons(category) {
        return this.iconMap.get(category);
    }
};
GalleryBar.ctorParameters = () => [
    { type: _app_file_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["FileRetrievalService"] }
];
GalleryBar = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gallery-bar',
        template: __webpack_require__(/*! raw-loader!./gallery-bar.component.html */ "./node_modules/raw-loader/index.js!./src/components/gallery-bar/gallery-bar.component.html"),
        styles: [__webpack_require__(/*! ./gallery-bar.component.scss */ "./src/components/gallery-bar/gallery-bar.component.scss")]
    })
], GalleryBar);



/***/ }),

/***/ "./src/components/gallery/gallery.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/gallery/gallery.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/components/gallery/gallery.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/gallery/gallery.component.ts ***!
  \*****************************************************/
/*! exports provided: Gallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return Gallery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Gallery = class Gallery {
};
Gallery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gallery',
        template: __webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/index.js!./src/components/gallery/gallery.component.html"),
        styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/components/gallery/gallery.component.scss")]
    })
], Gallery);



/***/ }),

/***/ "./src/components/menu-bar/menu-bar.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/menu-bar/menu-bar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-bar-container {\n  display: flex;\n  justify-content: center;\n  background: #2f3030;\n  color: #ffffff;\n}\n.menu-bar-container .menu-logo {\n  position: absolute;\n  top: 0;\n  left: 15px;\n}\n.menu-bar-container .menu-logo img {\n  max-height: 60px;\n}\n.menu-bar-container .menu-button-container {\n  display: flex;\n}\n.menu-bar-container .menu-button-container .menu-button {\n  padding: 5px 10px;\n  font-size: 20px;\n  border-left: 2px solid #454545;\n}\n.menu-bar-container .menu-button-container .menu-button p {\n  margin: 15px;\n}\n.menu-bar-container .menu-button:hover {\n  background: #3d3d3d;\n  color: #0b9de6;\n}\n.menu-bar-container .menu-button:last-child {\n  border-right: 2px solid #454545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3R5a3VydHovcGVyc29uYWwtd2Vic2l0ZS9zcmMvY29tcG9uZW50cy9tZW51LWJhci9tZW51LWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9jb21wb25lbnRzL21lbnUtYmFyL21lbnUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0Q7QURDQztFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDRjtBRENFO0VBQ0MsZ0JBQUE7QUNDSDtBREdDO0VBQ0MsYUFBQTtBQ0RGO0FER0U7RUFDQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ0RIO0FER0c7RUFDQyxZQUFBO0FDREo7QURNQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQ0pGO0FET0M7RUFDQywrQkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL21lbnUtYmFyL21lbnUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtYmFyLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRiYWNrZ3JvdW5kOiAjMmYzMDMwO1xuXHRjb2xvcjogI2ZmZmZmZjtcblxuXHQubWVudS1sb2dvIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDE1cHg7XG5cblx0XHRpbWcge1xuXHRcdFx0bWF4LWhlaWdodDogNjBweDtcblx0XHR9XG5cdH1cblxuXHQubWVudS1idXR0b24tY29udGFpbmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXG5cdFx0Lm1lbnUtYnV0dG9uIHtcblx0XHRcdHBhZGRpbmc6IDVweCAxMHB4O1xuXHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNDU0NTQ1O1xuXHRcblx0XHRcdHAge1xuXHRcdFx0XHRtYXJnaW46IDE1cHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Lm1lbnUtYnV0dG9uOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kOiAjM2QzZDNkO1xuXHRcdGNvbG9yOiAjMGI5ZGU2O1xuXHR9XG5cblx0Lm1lbnUtYnV0dG9uOmxhc3QtY2hpbGQge1xuXHRcdGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM0NTQ1NDU7XG5cdH1cbn0iLCIubWVudS1iYXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMyZjMwMzA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLm1lbnUtYmFyLWNvbnRhaW5lciAubWVudS1sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDE1cHg7XG59XG4ubWVudS1iYXItY29udGFpbmVyIC5tZW51LWxvZ28gaW1nIHtcbiAgbWF4LWhlaWdodDogNjBweDtcbn1cbi5tZW51LWJhci1jb250YWluZXIgLm1lbnUtYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWVudS1iYXItY29udGFpbmVyIC5tZW51LWJ1dHRvbi1jb250YWluZXIgLm1lbnUtYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNDU0NTQ1O1xufVxuLm1lbnUtYmFyLWNvbnRhaW5lciAubWVudS1idXR0b24tY29udGFpbmVyIC5tZW51LWJ1dHRvbiBwIHtcbiAgbWFyZ2luOiAxNXB4O1xufVxuLm1lbnUtYmFyLWNvbnRhaW5lciAubWVudS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2QzZDNkO1xuICBjb2xvcjogIzBiOWRlNjtcbn1cbi5tZW51LWJhci1jb250YWluZXIgLm1lbnUtYnV0dG9uOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjNDU0NTQ1O1xufSJdfQ== */"

/***/ }),

/***/ "./src/components/menu-bar/menu-bar.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/menu-bar/menu-bar.component.ts ***!
  \*******************************************************/
/*! exports provided: MenuBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBar", function() { return MenuBar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuBar = class MenuBar {
};
MenuBar = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'menu-bar',
        template: __webpack_require__(/*! raw-loader!./menu-bar.component.html */ "./node_modules/raw-loader/index.js!./src/components/menu-bar/menu-bar.component.html"),
        styles: [__webpack_require__(/*! ./menu-bar.component.scss */ "./src/components/menu-bar/menu-bar.component.scss")]
    })
], MenuBar);



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

module.exports = __webpack_require__(/*! /Users/cotykurtz/personal-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map