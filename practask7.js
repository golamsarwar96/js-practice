let myScore = 79;
let friendScore = 35;

if(myScore > 80){
    if(friendScore>=80){
        console.log("go for lunch");
    }
    else if(friendScore<80 && friendScore>=60){
        console.log("good luck, next time");
    }
    else if(friendScore<60 && friendScore>=40){
        console.log("keep your friends message unseen");
    }
    else if(friendScore<40){
        console.log("block your friend");
    }
}
else{
    console.log("go home and sleep and act sad");
}