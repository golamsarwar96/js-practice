
function removeDuplicate(arr){
    const uniqueArr = [];
    for(let num of arr){
        if(uniqueArr.includes(num)){
            continue
        }
        else{
            uniqueArr.push(num);
        }
    }

    return uniqueArr;
}


let arr = [3,5,4,1,6,7,6,5,1];
let result = removeDuplicate(arr);
console.log(result);


x=14;
y= 'z';
(x,y)=(y,x);
console.log(x,y);