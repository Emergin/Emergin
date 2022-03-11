


const prompt = require("prompt-sync")();
let age = prompt("enter your age");

if (age<=6){
    console.log(free)
}
else if (age>6 && age<=17){
    console.log("child discount");
}
else if (age>17 && age<=26){
    console.log("student discount");
}
else if (age>26 && age<=66){
    console.log("full price");
}
else if (age>66){
    console.log("senior citizen discount");
}
