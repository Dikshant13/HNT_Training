class Demo{

    constructor(){
        this.msg = " hello ";
        console.log("Demo initialized");
    }

    // function1(arr) {
    //     return arr.filter(function(element){
    //         return (element === this.msg);
    //     })  }

        arrowfunction(arr){
            return arr.filter(element=>(element === this.msg));
        }
    }
    
const d1 = new Demo("hello");
// console.log(d1.function1(["hello"]));

console.log(d1.arrowfunction(["hello"]));
