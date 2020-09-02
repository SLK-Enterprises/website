"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavBarComponent = void 0;
var core_1 = require("@angular/core");
var gallery_component_1 = require("./gallery/gallery.component");
var contact_component_1 = require("./contact/contact.component");
var animations_1 = require("@angular/animations");
var nav_services_component_1 = require("./nav-services/nav-services.component");
var support_component_1 = require("./support/support.component");
var feedback_component_1 = require("./feedback/feedback.component");
var dth_component_1 = require("../services-tab/dth/dth.component");
var cctv_component_1 = require("../services-tab/cctv/cctv.component");
var broadband_digitaltv_component_1 = require("../services-tab/broadband-digitaltv/broadband-digitaltv.component");
var opticalfiber_component_1 = require("../services-tab/opticalfiber/opticalfiber.component");
var wireless_component_1 = require("../services-tab/wireless/wireless.component");
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(_bottomSheet, dialog, route, data) {
        this._bottomSheet = _bottomSheet;
        this.dialog = dialog;
        this.route = route;
        this.data = data;
        this.ismenu = false;
        this.menu = ['Services', 'Gallery', 'Contact', 'Support', 'Feedback'];
        this.icons = {};
        this.ng();
    }
    NavBarComponent.prototype.ng = function () {
        var _this = this;
        this.data.getIcons().subscribe(function (icon) {
            _this.icons = icon;
        });
        console.log(this.icons);
    };
    NavBarComponent.prototype.open = function (des) {
        this.ismenu = !this.ismenu;
        switch (des.toLowerCase()) {
            case 'gallery':
                this.gallery();
                break;
            case 'contact':
                this.contact();
                break;
            case 'support':
                this.support();
                break;
            case 'feedback':
                this.feedback();
                break;
            case 'home':
                this.home();
                break;
            case 'services':
                this.services();
                break;
            default:
                break;
        }
    };
    NavBarComponent.prototype.services = function () {
        this.dialog.open(nav_services_component_1.NavServicesComponent, { autoFocus: false });
    };
    NavBarComponent.prototype.support = function () {
        this.dialog.open(support_component_1.SupportComponent, { autoFocus: false });
    };
    NavBarComponent.prototype.feedback = function () {
        this.dialog.open(feedback_component_1.FeedbackComponent, { autoFocus: false });
    };
    NavBarComponent.prototype.home = function () {
        this.go('home');
    };
    NavBarComponent.prototype.gallery = function () {
        this._bottomSheet.open(gallery_component_1.GalleryComponent, {
            panelClass: 'bottom-sheet'
        });
    };
    NavBarComponent.prototype.contact = function () {
        this.dialog.open(contact_component_1.MainContactComponent, { autoFocus: false });
    };
    NavBarComponent.prototype.go = function (des) {
        this.route.go(des);
    };
    NavBarComponent.prototype.isDth = function () {
        return this.searchKey.includes('dth') ? true : false;
    };
    NavBarComponent.prototype.isCCTV = function () {
        return this.searchKey.includes('cctv') ? true : false;
    };
    NavBarComponent.prototype.isBroadband = function () {
        return this.searchKey.includes('broadband') ? true : false;
    };
    NavBarComponent.prototype.isOpticalFiber = function () {
        return this.searchKey.includes('opticalfiber')
            ? true
            : this.searchKey.includes('optical')
                ? true
                : this.searchKey.includes('fiber')
                    ? true
                    : this.searchKey.includes('optical-fiber')
                        ? true
                        : this.searchKey.includes('optical fiber')
                            ? true
                            : false;
    };
    NavBarComponent.prototype.isWireless = function () {
        return this.searchKey.includes('wireless') ? true : false;
    };
    NavBarComponent.prototype.check = function () {
        if (this.isDth()) {
            return 'dth';
        }
        else if (this.isCCTV()) {
            return 'cctv';
        }
        else if (this.isBroadband()) {
            return 'broadband';
        }
        else if (this.isOpticalFiber()) {
            return 'opticalfiber';
        }
        else if (this.isWireless()) {
            return 'wireless';
        }
    };
    NavBarComponent.prototype.search = function () {
        var component;
        var nothing = false;
        this.searchKey = this.searchKey.toLocaleLowerCase();
        switch (this.check()) {
            case 'dth':
                component = dth_component_1.DthComponent;
                break;
            case 'cctv':
                component = cctv_component_1.CctvComponent;
                break;
            case 'broadband':
                component = broadband_digitaltv_component_1.BroadbandDigitaltvComponent;
                break;
            case 'opticalfiber':
                component = opticalfiber_component_1.OpticalfiberComponent;
                break;
            case 'wireless':
                component = wireless_component_1.WirelessComponent;
                break;
            default:
                nothing = true;
                break;
        }
        nothing
            ? false
            : this.dialog.open(component, {
                data: { icon: this.icons },
                autoFocus: false
            });
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['./nav-bar.component.scss'],
            animations: [
                animations_1.trigger('openClose', [
                    animations_1.state('open', animations_1.style({
                        left: '0vw'
                    })),
                    animations_1.state('closed', animations_1.style({
                        left: '-55vw'
                    })),
                    animations_1.transition('open => closed', [animations_1.animate('0.1s ease-out')]),
                    animations_1.transition('closed => open', [animations_1.animate('0.1s ease-in')]),
                ]),
            ]
        })
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
