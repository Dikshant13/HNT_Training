export{}

class Product {
    id:number;
    name:string;
    brand:string;
    price:number;
    category:string


    constructor(id:number,name:string,brand:string,price:number,category:string){
        this.id=id;
        this.name=name;
        this.brand=brand;
        this.price=price;
        this.category=category;
    }
    
    public getDetails(){
        return `${this.id} ${this.name}  ${this.brand} ${this.price} ${this.category}`;
    }

}


class ShoppingCart{
    cart: Map<Product,number>;

    constructor(cart){
        this.cart=cart

    }
}


let Mobile = new Product(111,'Nord2','oneplus',30000,'mobile');
let Watch = new Product(222,'Buzz','noise',2500,'watch')
console.log(Mobile.getDetails());