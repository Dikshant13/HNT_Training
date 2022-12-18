//1 single argument
function f1(arg) {
    console.log(arg);
    return arg;
}
f1(100);
f1("Dikshant");
f1(true);
//2  Addinf 2 class
function gen2(varr1, varr2) {
    if (typeof varr1 === "number" && typeof varr2 === "number") {
        return varr1 + varr2;
    }
    else {
        return varr1;
    }
}
console.log("Adding two numbers");
console.log(gen2(100, 50));
//3 Generic Class 
// class Gen1<k,v>{
//     private map:Map<k,v>;
//     constructor(map:Map<k,v>){
//         this.map=map;
//     };
//    setMap(map:Map<k,v>){
//     this.map=map;
//    }
//     getMap(){
//     return this.map;
//    }
// }
// let map=new Map<string,number>();
// map.set("Dikshant",123);
// let map1=new Gen1<string,number>(map);
// console.log(map1.getMap());
