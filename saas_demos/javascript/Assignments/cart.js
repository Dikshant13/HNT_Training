const cart ={
    addItem:function(name){
        console.log("adding item "+name+" to cart");

    },

    removeItem:function(){
        console.log("removing item  from cart");

    }
}

cart.checkout=function(){
    console.log("checking out: ")
}

cart.addItem("mobile");
cart.removeItem();
cart.checkout();