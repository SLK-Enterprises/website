"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarousalComponent = void 0;
var core_1 = require("@angular/core");
var CarousalComponent = /** @class */ (function () {
    function CarousalComponent(data) {
        var _this = this;
        this.data = data;
        this.links = ['assets/carousal/1.jpg'];
        this.ind = 0;
        this.move = function () {
            var carousal = document.getElementsByClassName('carousal-image');
            _this.ind = _this.ind + 1;
            if (_this.ind == _this.links.length) {
                _this.ind = 0;
            }
            for (var i = 0; i < carousal.length; i++) {
                carousal[i].style.transform = 'translate(' + _this.ind * -95 + 'vw)';
            }
        };
    }
    CarousalComponent.prototype.moveLeft = function () {
        this.ind = this.ind - 2;
        if (this.ind < 0) {
            this.ind = this.links.length - 2;
        }
        this.move();
    };
    CarousalComponent.prototype.start = function () {
        this.inter = setInterval(this.move, 3000);
    };
    CarousalComponent.prototype.clear = function () {
        clearInterval(this.inter);
    };
    CarousalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.data.getLiveTrending().subscribe(function (trend) {
            _this.links = trend;
            _this.inter = setInterval(_this.move, 3000);
        });
    };
    CarousalComponent = __decorate([
        core_1.Component({
            selector: 'carousal',
            templateUrl: './carousal.component.html',
            styleUrls: ['./carousal.component.scss']
        })
    ], CarousalComponent);
    return CarousalComponent;
}());
exports.CarousalComponent = CarousalComponent;
