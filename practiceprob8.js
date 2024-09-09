
function shoppingCart(products){
    let total = 0;
    for(let product of products){
        total += product.price * product.q;
    }
    return total;
}

const products = [
    {name : "shampoo", price : 20, q : 3},
    {name : "conditioner", price : 40, q : 2},
    {name : "bodywash", price : 50, q : 1},
    {name : "toothpaste", price : 20, q : 5},
    {name : "Shirt", price : 70, q : 2}
];

let result = shoppingCart(products);
console.log(result);