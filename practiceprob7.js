
function findMin(arr){
    let min = arr[0];
    for(let phone of arrOfPhones){
        if(phone.price<min.price){
            min = phone;
        }
    }
    return min;
}


let arrOfPhones = [
     { model: "Galaxy S22", price : 900},
     { model : "Iphone 12", price : 700},
     { model : "Note 10 pro", price : 200},
     { model : "Realme 6", price : 300,},
     { model : "V23 Pro", price : 500,},
];

let result = findMin(arrOfPhones);
console.log(result);