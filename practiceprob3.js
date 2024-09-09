function oddAvg(arr){
    let sum = 0;
    let count = 0;
    for(let num of arr){
        if(num%2===1){
            sum += num;
            count++;
        }
    }

    let avg = sum/count;

    return avg;
}

let arr = [12,3,5,21,42,33,44,10,5];
let result = oddAvg(arr);
console.log(result);


