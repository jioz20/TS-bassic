// Interface

//Quy dinh bat buoc ve cac thuoc tinh
interface tuongInterface{
    ten:string;
    mau: number;
    satthuong: number;
    mota: string;

    xemtuong() : void;
    donkinang(mau: number):any;
    bienve(): void;
}


class tuong implements tuongInterface{

    ten:string;
    mau: number;
    satthuong: number;
    mota: string;
    mana: string;

    xemtuong() : void
    {
        console.log("Xem tuong");
        
    }

    donkinang(mau:number):any
    {
        console.log(mau);
        
    }
    bienve(): void{
        console.log("dang vien ve");
    };
}



//Dung de quan ly cac class de hon
module DienThoai {
    export class Iphone{

    }

    export class SamSung{

    }
}


let j7 = new DienThoai.SamSung();

