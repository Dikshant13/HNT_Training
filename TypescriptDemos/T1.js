var Product = /** @class */ (function () {
    function Product(id, name, brand, price, category) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.category = category;
    }
    Product.prototype.getDetails = function () {
        return "".concat(this.id, " ").concat(this.name, "  ").concat(this.brand, " ").concat(this.price, " ").concat(this.category);
    };
    return Product;
}());
var Oneplus = new Product(111, 'Nord2', 'oneplus', 30000, 'mobile');
console.log(Oneplus.getDetails());
