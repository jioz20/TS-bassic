class Game{
    nhanvat: string;
    slogan: string;
    hp: number;

    constructor(nhanvat: string, slogan:string, hp: number)
    {
        this.nhanvat = nhanvat;
        this.slogan = slogan;
        this.hp = hp;
    }

    getInfo()
    {
        return `Nhân vật : ${ this.nhanvat}
        Slogan: ${this.slogan}
        HP: ${this.hp}`;
    }


}

let ire = new Game("Irelia", "ý chí kiếm khách", 200);

    // console.log(ire.getInfo());



enum numberState{
    Create = 10,
    Processing,
    Finish
}

class congViec {
    id: number;
    ten: string;
    trangthai: numberState;

    constructor(id: number, ten: string, trangthai: numberState)
    {
        this.id = id;
        this.ten = ten;
        this.trangthai = trangthai;
    }

    getCV()
    {
        return `ID: ${this.id} - Tên: ${this.ten} - Trạng thái: ${this.trangthai}`;
    }


    getTen(): void
    {
        console.log(this.ten);
    }
}

// let dev = new congViec(1, "IT", numberState.Processing);
// console.log(dev.getCV());


class IT extends congViec
{
    congcu: string[];

    constructor(id: number, ten: string, trangthai: numberState, congcu: string[])
    {
        super(id, ten, trangthai);
        this.congcu = congcu;
    }

    getCV()
    {
        let vat: string = '';
        for(let i = 0; i < this.congcu.length; i++)
        {
            vat += this.congcu[i];
            vat += ' | ';
        }

        return `ID: ${this.id} - Tên: ${this.ten} - Trạng thái: ${this.trangthai} - Công cụ: ${vat}`;
    }

    getTen(){
        //Ke thua bang ham void
        super.getTen();
        console.log(this.trangthai);
    }
}

let it = new IT(2,"Deverlopers", numberState.Finish, [" Chuột", " Bàn phím"," Mac"]);

console.log(it.getCV());
it.getTen();



function xemphim<T>(x:T) : T
{
    return x;
}


//Generic
console.log(xemphim<string>("phim ma"));

class mayTinh{
    static info<T>(x:T[]): void{
        console.log(x);
    } 
}

mayTinh.info<string>(["Dell", "Assus"]);
mayTinh.info<any>(["Dell", 3000]);



