// Interface
var tuong = /** @class */ (function () {
    function tuong() {
    }
    tuong.prototype.xemtuong = function () {
        console.log("Xem tuong");
    };
    tuong.prototype.donkinang = function (mau) {
        console.log(mau);
    };
    tuong.prototype.bienve = function () {
        console.log("dang vien ve");
    };
    ;
    return tuong;
}());
//Dung de quan ly cac class de hon
var DienThoai;
(function (DienThoai) {
    var Iphone = /** @class */ (function () {
        function Iphone() {
        }
        return Iphone;
    }());
    DienThoai.Iphone = Iphone;
    var SamSung = /** @class */ (function () {
        function SamSung() {
        }
        return SamSung;
    }());
    DienThoai.SamSung = SamSung;
})(DienThoai || (DienThoai = {}));
var j7 = new DienThoai.SamSung();
