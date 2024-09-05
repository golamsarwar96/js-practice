function allEven(numArr){
    let even = [];
    for(let number of numArr){
        if(number % 2 === 0){
            even.push(number);
        }
    }

    return even;
}


let numArr = [1,24,13,4,56,7,17];
let evenNumbers = allEven(numArr);
console.log(evenNumbers);

function getMenu() {
 console.log("Burger, Pizza, Pasta");
}

getMenu();