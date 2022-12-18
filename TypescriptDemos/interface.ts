
//interface 1 colorable
interface Colorable{
    color1:string;
    color2:string;  
}
//interface 2 printable
interface Printable{
    print:()=>void;

}
// interface digitalprint extends inteface colorable and printable 
interface DigitalPrint extends Colorable , Printable{
}
//creating object newcolor
const newcolor : DigitalPrint={
    color1:"red",
    color2:"pink",

    print : function ():void{
        console.log('Colors');
        console.log(`${this.color1} ${this.color2} `);

    }
}
//calling the object
newcolor.print();