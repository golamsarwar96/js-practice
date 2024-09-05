function sum(numArray){
    let total = 0;
    for(let i=0; i<numArray.length; i++){
        total += numArray[i];
    }
    return total;
}


let numArray = [1,3,5,2,6,7];

let result = sum(numArray);
console.log(result);