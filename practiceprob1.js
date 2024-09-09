function inchToFit(inch){
    let fit = inch/12;
    return fit;
}

let result = inchToFit(60);
console.log(result);

function milesToKm(miles){
    let km = 1.609344*miles;
    return km;
}

let km = milesToKm(12); 
console.log(km);
