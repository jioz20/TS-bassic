let x: number;
x = 10;
console.log(x);

let hocvien: string[];
hocvien = ["an", "binh", "dat"];
// console.log(hocvien[0]);

for(let i =0; i <hocvien.length; i++)
{
    console.log(hocvien[i]);
    
}

let mangSoNguyen : number = [2,34,512,52];
for(let i = 0; i < mangSoNguyen.length; i++)
{
    console.log(mangSoNguyen[i]);
    
}


function tinhtong(a: number, b: number):number{
    return a + b;
}
console.log(tinhtong(2,6));


function doituonggame() : any{
    let nhanvat = {
        ten: "chuot",
        kynang: {
            kn1: "tang hinh",
            kn2: "phun doc"
        }
    }

    return nhanvat;
}

console.log(doituonggame());
console.log(doituonggame().kynang.kn1);



let f = (x:number) : number =>{
    return x + 10;
}

console.log(f(20));