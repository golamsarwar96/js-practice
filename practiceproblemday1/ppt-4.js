let sentences = "among us game is back in new form called lock down protocol.";

let lenArr = [];
let words = sentences.split(" ");
for(let word of words){
    lenArr.push(word.length);
}
let max = Math.max(...lenArr);

for(let word of words){
    if(word.length>=max){
        console.log(word);
    }
}



