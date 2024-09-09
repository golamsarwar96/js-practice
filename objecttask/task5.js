let myObj = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}

for(let obj in myObj) {
    console.log("Key: " + obj + " | " + "type: " + typeof myObj[obj]);
}