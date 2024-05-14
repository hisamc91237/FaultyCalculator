/*
It performs wrong operations 10% of the time.
 + --> -
 * --> +
 - --> /
 / --> **

*/

// let random = Math.random();
// let a = prompt("Enter number 1");
// let b = prompt("Enter number 2")
// let c = prompt("Enter the operator to perform")

// if (random < 0.1) {
//     if (c == "+") {
//         console.log(a - b)
//         console.log("Wrong cal")
//     }
//     else if (c == "*") {
//         console.log(a + b)
//         console.log("Wrong cal")
//     }
//     else if (c == "-") {
//         console.log(a / b)
//         console.log("Wrong cal")
//     }
//     else {
//         console.log(a ** b)
//         console.log("Wrong cal")
//     }

// }
// else {
//     if (c == "+") {
//         console.log(Number(a) + Number(b))
//     }
//     else if (c == "*") {
//         console.log(a * b)
//     }
//     else if (c == "-") {
//         console.log(a - b)
//     }
//     else {
//         console.log(a / b)
//     }
// }


// Using Eval functions

let random = Math.random();
let a = prompt("Enter number 1");
let c = prompt("Enter the operator to perform")
let b = prompt("Enter number 2")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if(random > 0.1){
  
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c];
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
}


