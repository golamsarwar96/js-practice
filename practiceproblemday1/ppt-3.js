let words = "Exodonatsi";
let count = 0;
let lowerWord = words.toLowerCase();
for(let i= 0; i<lowerWord.length; i++){
    if(lowerWord[i]==="a"||lowerWord[i]==="e"||lowerWord[i]==="i"||lowerWord[i]==="o"||lowerWord[i]==="u"){
        count++;
    }
}

console.log(count);