var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = /** @class */ (function () {
    function Game(nhanvat, slogan, hp) {
        this.nhanvat = nhanvat;
        this.slogan = slogan;
        this.hp = hp;
    }
    Game.prototype.getInfo = function () {
        return "Nh\u00E2n v\u1EADt : " + this.nhanvat + "\n        Slogan: " + this.slogan + "\n        HP: " + this.hp;
    };
    return Game;
}());
var ire = new Game("Irelia", "ý chí kiếm khách", 200);
// console.log(ire.getInfo());
var numberState;
(function (numberState) {
    numberState[numberState["Create"] = 10] = "Create";
    numberState[numberState["Processing"] = 11] = "Processing";
    numberState[numberState["Finish"] = 12] = "Finish";
})(numberState || (numberState = {}));
var congViec = /** @class */ (function () {
    function congViec(id, ten, trangthai) {
        this.id = id;
        this.ten = ten;
        this.trangthai = trangthai;
    }
    congViec.prototype.getCV = function () {
        return "ID: " + this.id + " - T\u00EAn: " + this.ten + " - Tr\u1EA1ng th\u00E1i: " + this.trangthai;
    };
    congViec.prototype.getTen = function () {
        console.log(this.ten);
    };
    return congViec;
}());
// let dev = new congViec(1, "IT", numberState.Processing);
// console.log(dev.getCV());
var IT = /** @class */ (function (_super) {
    __extends(IT, _super);
    function IT(id, ten, trangthai, congcu) {
        var _this = _super.call(this, id, ten, trangthai) || this;
        _this.congcu = congcu;
        return _this;
    }
    IT.prototype.getCV = function () {
        var vat = '';
        for (var i = 0; i < this.congcu.length; i++) {
            vat += this.congcu[i];
            vat += ' | ';
        }
        return "ID: " + this.id + " - T\u00EAn: " + this.ten + " - Tr\u1EA1ng th\u00E1i: " + this.trangthai + " - C\u00F4ng c\u1EE5: " + vat;
    };
    IT.prototype.getTen = function () {
        //Ke thua bang ham void
        _super.prototype.getTen.call(this);
        console.log(this.trangthai);
    };
    return IT;
}(congViec));
var it = new IT(2, "Deverlopers", numberState.Finish, [" Chuột", " Bàn phím", " Mac"]);
console.log(it.getCV());
it.getTen();
function xemphim(x) {
    return x;
}
console.log(xemphim("phim ma"));
var mayTinh = /** @class */ (function () {
    function mayTinh() {
    }
    mayTinh.info = function (x) {
        console.log(x);
    };
    return mayTinh;
}());
mayTinh.info(["Dell", "Assus"]);
mayTinh.info(["Dell", 3000]);
