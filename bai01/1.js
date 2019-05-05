var x;
x = 10;
console.log(x);
var hocvien;
hocvien = ["an", "binh", "dat"];
// console.log(hocvien[0]);
for (var i = 0; i < hocvien.length; i++) {
    console.log(hocvien[i]);
}
var mangSoNguyen = [2, 34, 512, 52];
for (var i = 0; i < mangSoNguyen.length; i++) {
    console.log(mangSoNguyen[i]);
}
function tinhtong(a, b) {
    return a + b;
}
console.log(tinhtong(2, 6));
function doituonggame() {
    var nhanvat = {
        ten: "chuot",
        kynang: {
            kn1: "tang hinh",
            kn2: "phun doc"
        }
    };
    return nhanvat;
}
console.log(doituonggame());
console.log(doituonggame().kynang.kn1);
var f = function (x) {
    return x + 10;
};
console.log(f(20));
