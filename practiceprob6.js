function findLargest(arr){
    let largest = arr[0];
    for(let num of arr){
        if(num > largest){
            largest = num;
        }
    }

    return largest;
}

let arr = [11,334,133,451,55,115];
let result = findLargest(arr);
console.log(result);