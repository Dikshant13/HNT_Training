var newcolor = {
    color1: "red",
    color2: "pink",
    print: function () {
        console.log('Colors');
        console.log("".concat(this.color1, " ").concat(this.color2, " "));
    }
};
newcolor.print();
