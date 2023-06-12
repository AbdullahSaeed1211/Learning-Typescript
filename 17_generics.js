var score = [];
var names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(3)
// identityThree("3")
// identityThree(true)
function identityFour(val) {
    return val;
}
identityFour({ brand: "BottaOfWotah", type: 3 });
function getSearchProducts(products) {
    var myIndex = 3;
    return products[myIndex];
}
var getMoreSearchProducts = function (products) {
    //do something
    var myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());
