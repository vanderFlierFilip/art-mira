(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["art-collections-art-collections-module"],{

/***/ "6Ave":
/*!**************************************************************!*\
  !*** ./src/app/art-collections/art-collections.component.ts ***!
  \**************************************************************/
/*! exports provided: ArtCollectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtCollectionsComponent", function() { return ArtCollectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _art_collections_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./art-collections.service */ "kfy2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function ArtCollectionsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/collections/", collection_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", collection_r1.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", collection_r1.name, " ");
} }
class ArtCollectionsComponent {
    constructor(artCollectionService) {
        this.artCollectionService = artCollectionService;
    }
    ngOnInit() {
        this.artCollectionService.getArtCollections().subscribe(response => {
            this.artCollections = response;
        }, error => console.log(error));
    }
}
ArtCollectionsComponent.ɵfac = function ArtCollectionsComponent_Factory(t) { return new (t || ArtCollectionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_art_collections_service__WEBPACK_IMPORTED_MODULE_1__["ArtCollectionsService"])); };
ArtCollectionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtCollectionsComponent, selectors: [["neg-art-collections"]], decls: 3, vars: 1, consts: [[1, "container-lg", 2, "margin-left", "140px"], [1, "row"], ["class", "col-md-4 gallery", 4, "ngFor", "ngForOf"], [1, "col-md-4", "gallery"], [1, "gallery-item"], ["alt", "", 1, "gallery", 3, "routerLink", "src"], [1, "container"], [1, "d-inline-block", "text-wrap", "price", 2, "max-width", "90px"], [1, "name", "h5", "text-left", "text-muted"], [1, "col"]], template: function ArtCollectionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArtCollectionsComponent_div_2_Template, 9, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.artCollections);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["img[_ngcontent-%COMP%] {\n  object-fit: contain;\n  max-width: 100%;\n}\n\n.gallery[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-top: 25px;\n  font-size: 21px;\n  text-align: center;\n  \n  \n  \n  \n  animation: fadein 3s;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n\n\n\n\n\n\n\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 0 4px;\n  text-align: center;\n}\n\n.gallery-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  \n  height: 90%;\n  width: 75%;\n}\n\n.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  margin: 10px;\n  padding: 0px 20px 0px 20px;\n  background-color: #f2f2f2;\n  cursor: pointer;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 5%;\n  margin: 5%;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FydC1jb2xsZWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0gsZUFBQTtBQUNEOztBQUVBO0VBQ0ksZ0JBQUE7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUU4QixvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUN0QixvQkFBQTtBQUdoQjs7QUFBSTtFQUNJO0lBQU8sVUFBQTtFQUliO0VBSE07SUFBTyxVQUFBO0VBTWI7QUFDRjs7QUFKSSxpQkFBQTs7QUFNQSxvQ0FBQTs7QUFNQSxzQkFBQTs7QUFNQSxpQkFBQTs7QUFPSjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFpQko7O0FBZEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUFvQix1QkFBQTtFQUNwQixXQUFBO0VBQ0EsVUFBQTtBQWtCSjs7QUFiQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDSCxlQUFBO0FBZ0JEOztBQVhBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQWNKIiwiZmlsZSI6ImFydC1jb2xsZWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgb2JqZWN0LWZpdDpjb250YWluO1xuXHRtYXgtd2lkdGg6IDEwMCU7XG4gIFxufVxuLmdhbGxlcnkge1xuICAgIG1hcmdpbi10b3AgOiAxMHB4O1xuICAgIFxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAzczsgLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xuICAgICAgICAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDNzOyAvKiBGaXJlZm94IDwgMTYgKi9cbiAgICAgICAgICAgIC1tcy1hbmltYXRpb246IGZhZGVpbiAzczsgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbiAgICAgICAgICAgICAtby1hbmltYXRpb246IGZhZGVpbiAzczsgLyogT3BlcmEgPCAxMi4xICovXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlaW4gM3M7XG4gICAgfVxuICAgIFxuICAgIEBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbiAgICB9XG4gICAgXG4gICAgLyogRmlyZWZveCA8IDE2ICovXG4gICAgQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG4gICAgfVxuICAgIFxuICAgIC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbiAgICB9XG4gICAgXG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbiAgICBALW1zLWtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgICAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxuICAgIH1cbiAgICBcbiAgICAvKiBPcGVyYSA8IDEyLjEgKi9cbiAgICBALW8ta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG4gICAgfVxuXG5cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICB9XG4uZ2FsbGVyeS1pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7IC8qZGVmYXVsdCB2YWx1ZSBpcyByb3cqL1xuICAgIGhlaWdodDo5MCU7XG4gICAgd2lkdGg6NzUlO1xuICAgIFxuXG4gICBcbn1cbi5nYWxsZXJ5IGltZ3tcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbjoxMHB4O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG5cdGN1cnNvcjogcG9pbnRlcjtcblxuXG59XG4gICAgXG5wIHtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBtYXJnaW46IDUlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59Il19 */"] });


/***/ }),

/***/ "Al5P":
/*!***********************************************************!*\
  !*** ./src/app/art-collections/art-collections.module.ts ***!
  \***********************************************************/
/*! exports provided: ArtCollectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtCollectionsModule", function() { return ArtCollectionsModule; });
/* harmony import */ var _artworks_shop_artwork_details_artwork_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artworks-shop/artwork-details/artwork-details.component */ "C8Mf");
/* harmony import */ var _artworks_shop_artworks_shop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artworks-shop/artworks-shop.component */ "m/lR");
/* harmony import */ var _art_collections_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./art-collections-routing.module */ "S2vy");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _art_collections_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./art-collections.component */ "6Ave");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class ArtCollectionsModule {
}
ArtCollectionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ArtCollectionsModule });
ArtCollectionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function ArtCollectionsModule_Factory(t) { return new (t || ArtCollectionsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _art_collections_routing_module__WEBPACK_IMPORTED_MODULE_2__["ArtCollectionsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ArtCollectionsModule, { declarations: [_art_collections_component__WEBPACK_IMPORTED_MODULE_5__["ArtCollectionsComponent"], _artworks_shop_artworks_shop_component__WEBPACK_IMPORTED_MODULE_1__["ArtworksShopComponent"], _artworks_shop_artwork_details_artwork_details_component__WEBPACK_IMPORTED_MODULE_0__["ArtworkDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _art_collections_routing_module__WEBPACK_IMPORTED_MODULE_2__["ArtCollectionsRoutingModule"]], exports: [_art_collections_component__WEBPACK_IMPORTED_MODULE_5__["ArtCollectionsComponent"]] }); })();


/***/ }),

/***/ "C8Mf":
/*!********************************************************************************************!*\
  !*** ./src/app/art-collections/artworks-shop/artwork-details/artwork-details.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ArtworkDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtworkDetailsComponent", function() { return ArtworkDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _art_collections_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../art-collections.service */ "kfy2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ArtworkDetailsComponent {
    constructor(artCollectionsService, activatedRoute) {
        this.artCollectionsService = artCollectionsService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.loadArtwork();
    }
    loadArtwork() {
        this.artCollectionsService.getArtwork(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(response => {
            this.artwork = response;
        }, error => {
            console.log('ERROR: ', error);
        });
    }
}
ArtworkDetailsComponent.ɵfac = function ArtworkDetailsComponent_Factory(t) { return new (t || ArtworkDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_art_collections_service__WEBPACK_IMPORTED_MODULE_1__["ArtCollectionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ArtworkDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtworkDetailsComponent, selectors: [["neg-artwork-details"]], decls: 2, vars: 1, template: function ArtworkDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.artwork.name, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnR3b3JrLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "S2vy":
/*!*******************************************************************!*\
  !*** ./src/app/art-collections/art-collections-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ArtCollectionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtCollectionsRoutingModule", function() { return ArtCollectionsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _art_collections_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./art-collections.component */ "6Ave");
/* harmony import */ var _artworks_shop_artworks_shop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artworks-shop/artworks-shop.component */ "m/lR");
/* harmony import */ var _artworks_shop_artwork_details_artwork_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artworks-shop/artwork-details/artwork-details.component */ "C8Mf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _art_collections_component__WEBPACK_IMPORTED_MODULE_1__["ArtCollectionsComponent"] },
    { path: ':id', component: _artworks_shop_artworks_shop_component__WEBPACK_IMPORTED_MODULE_2__["ArtworksShopComponent"] },
    { path: ':id/artworks/:id', component: _artworks_shop_artwork_details_artwork_details_component__WEBPACK_IMPORTED_MODULE_3__["ArtworkDetailsComponent"] }
];
class ArtCollectionsRoutingModule {
}
ArtCollectionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ArtCollectionsRoutingModule });
ArtCollectionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function ArtCollectionsRoutingModule_Factory(t) { return new (t || ArtCollectionsRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ArtCollectionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "kfy2":
/*!************************************************************!*\
  !*** ./src/app/art-collections/art-collections.service.ts ***!
  \************************************************************/
/*! exports provided: ArtCollectionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtCollectionsService", function() { return ArtCollectionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");


class ArtCollectionsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://localhost:5001/api/';
    }
    getArtCollections() {
        return this.http.get(this.baseUrl + 'artcollections');
    }
    getArtworks(id) {
        return this.http.get(this.baseUrl + 'artcollections/' + id);
    }
    getArtwork(id) {
        return this.http.get(this.baseUrl + 'artworks/' + id);
    }
}
ArtCollectionsService.ɵfac = function ArtCollectionsService_Factory(t) { return new (t || ArtCollectionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ArtCollectionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArtCollectionsService, factory: ArtCollectionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "m/lR":
/*!**************************************************************************!*\
  !*** ./src/app/art-collections/artworks-shop/artworks-shop.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArtworksShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtworksShopComponent", function() { return ArtworksShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _art_collections_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../art-collections.service */ "kfy2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a1) { return ["artworks", a1]; };
function ArtworksShopComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artwork_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", artwork_r1.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, artwork_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", artwork_r1.name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, artwork_r1.price), " ");
} }
class ArtworksShopComponent {
    constructor(artCollectionService, activatedRoute) {
        this.artCollectionService = artCollectionService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.loadArtworks();
    }
    loadArtworks() {
        this.artCollectionService.getArtworks(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(response => {
            this.artworks = response.artworks;
        }, error => {
            console.log('ERROR: ', error);
        });
    }
}
ArtworksShopComponent.ɵfac = function ArtworksShopComponent_Factory(t) { return new (t || ArtworksShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_art_collections_service__WEBPACK_IMPORTED_MODULE_1__["ArtCollectionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ArtworksShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtworksShopComponent, selectors: [["neg-artworks-shop"]], decls: 3, vars: 1, consts: [[1, "container-lg", 2, "margin-top", "140px", "margin-left", "140px"], [1, "row"], ["class", "col-md-4 gallery", 4, "ngFor", "ngForOf"], [1, "col-md-4", "gallery"], [1, "gallery-item"], ["routerLinkActive", "router-link-active", 3, "routerLink", "src"], [1, "container"], [1, "d-inline-block", "text-wrap", "price", 2, "max-width", "90px"], [1, "h6", "text-left", "stext-muted"], [1, "col"]], template: function ArtworksShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArtworksShopComponent_div_2_Template, 10, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.artworks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["img[_ngcontent-%COMP%] {\n  object-fit: contain;\n  max-width: 100%;\n}\n\n.gallery[_ngcontent-%COMP%] {\n  margin-top: 140px;\n  margin-top: 25px;\n  font-size: 21px;\n  text-align: center;\n  \n  \n  \n  \n  animation: fadein 1s;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n\n\n\n\n\n\n\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 0 4px;\n  text-align: center;\n}\n\n.gallery-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  \n  height: 90%;\n  width: 75%;\n  padding: 2% 0% 8% 0%;\n}\n\n.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  margin: 10px;\n  padding: 0px 20px 0px 20px;\n  background-color: #f2f2f2;\n  cursor: pointer;\n}\n\n.gallery[_ngcontent-%COMP%]   img.price[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FydHdvcmtzLXNob3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNILGVBQUE7QUFDRDs7QUFFQTtFQUNJLGlCQUFBO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFOEIsb0NBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDdEIsb0JBQUE7QUFHaEI7O0FBQUk7RUFDSTtJQUFPLFVBQUE7RUFJYjtFQUhNO0lBQU8sVUFBQTtFQU1iO0FBQ0Y7O0FBSkksaUJBQUE7O0FBTUEsb0NBQUE7O0FBTUEsc0JBQUE7O0FBTUEsaUJBQUE7O0FBT0o7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBaUJKOztBQWRBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFBb0IsdUJBQUE7RUFDcEIsV0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQWtCSjs7QUFaQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDSCxlQUFBO0FBZUQ7O0FBZEk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFnQlIiLCJmaWxlIjoiYXJ0d29ya3Mtc2hvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgb2JqZWN0LWZpdDpjb250YWluO1xuXHRtYXgtd2lkdGg6IDEwMCU7XG4gIFxufVxuLmdhbGxlcnkge1xuICAgIG1hcmdpbi10b3AgOiAxNDBweDtcbiAgICBcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMXM7IC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cbiAgICAgICAgICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAxczsgLyogRmlyZWZveCA8IDE2ICovXG4gICAgICAgICAgICAtbXMtYW5pbWF0aW9uOiBmYWRlaW4gMXM7IC8qIEludGVybmV0IEV4cGxvcmVyICovXG4gICAgICAgICAgICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMXM7IC8qIE9wZXJhIDwgMTIuMSAqL1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDFzO1xuICAgIH1cbiAgICBcbiAgICBAa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG4gICAgfVxuICAgIFxuICAgIC8qIEZpcmVmb3ggPCAxNiAqL1xuICAgIEAtbW96LWtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgICAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxuICAgIH1cbiAgICBcbiAgICAvKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG4gICAgfVxuICAgIFxuICAgIC8qIEludGVybmV0IEV4cGxvcmVyICovXG4gICAgQC1tcy1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbiAgICB9XG4gICAgXG4gICAgLyogT3BlcmEgPCAxMi4xICovXG4gICAgQC1vLWtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgICAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxuICAgIH1cblxuXG4ucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nOiAwIDRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgfVxuLmdhbGxlcnktaXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246cm93OyAvKmRlZmF1bHQgdmFsdWUgaXMgcm93Ki9cbiAgICBoZWlnaHQ6OTAlO1xuICAgIHdpZHRoOjc1JTtcbiAgICBwYWRkaW5nOiAyJSAwJSA4JSAwJTtcbiAgIFxuICAgXG5cbiAgIFxufVxuLmdhbGxlcnkgaW1ne1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcblx0Y3Vyc29yOiBwb2ludGVyO1xuICAgICYucHJpY2Uge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cblxufVxuXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=art-collections-art-collections-module.js.map