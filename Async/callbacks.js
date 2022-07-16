

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }
//
// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     myDisplayer(sum);
// }
//
// myCalculator(5, 5);



//Using Callbacks function
function myDisplayer(something) {
    document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(5, 5, myDisplayer);


//Callback using setTimeout
function  greet(name , myFunction) {
    console.log("Hello World");

    myFunction(name);
}
function sayName(name) {
    console.log("Hello " + name );
}

setTimeout(greet, 5000, "Kaiser", sayName);
//greet("Kaiser", sayName);


//Asynchronous
// function greet(){
//     console.log("Hello!!!!!!");
// }
//
// function sayName(name){
//     console.log("Hello  " + name);
// }
//
// setTimeout(greet,2000);
// sayName("Kaiser");