// 1. Fill in the missing operators to get the expected result (replace the underscore symbol with the appropriate operator):
// 	console.log(2 _ 3 _ 1);       // expected 7
// 	console.log(2 _ 4);           // expected 16
// 	console.log(5 _ 1);           // expected 5
// 	console.log(8 _ 2 _ 5 _ 2);   // expected 39

// console.log(2*3+1)
// console.log(2**4)
// console.log(5*1)
// console.log(8**2-5**2)
/////////////////////////////////
// 2. Fill in the missing comparison operators in that such a way that all expressions result in true (replace the underscore symbol with the appropriate operator):
	// console.log(4 * 5 _ 20);
	// console.log(6 * 5 _ "30");
	// console.log(-17 _ 0); 
	// console.log(25 _ 1); 
	// console.log(2 + 2 * 2 _ 4);
    // console.log(4 * 5 == 20);
	// console.log(6 * 5 == "30");
	// console.log(-17 < 0); 
	// console.log(25 > 1); 
	// console.log(2 + 2 * 2 > 4);

//    3.  Fill in the missing comparison operators in that such a way that all expressions result in true (replace the underscore symbol with the appropriate operator):
// 	console.log(true _ false); 
// 	console.log(false _ false); 
// 	console.log(false _ false _ true); 
// 	console.log(true _ false _ false && true);

// console.log(true || false); 
// console.log(false == false); 
// console.log(false || false || true); 
// console.log(true || false || false && true);

//Module 4 task
//task 1
// let width = prompt("Enter the widthof box")
// let height = prompt("Enter the heigth of box")
// let length = prompt("Enter the length of the box")

// let volume = width*height*length
// alert("The volume of the box is: " + volume);
// console.log("volume of the box:", + volume)

/// module 4 
//calculator
// let num1 = Number(prompt("enter num 1"));
// let num2 = Number(prompt("enter num 2"));
// let operator = prompt("enter operator (+, -, *, /):");
// let result;
// if (!Number.isNaN(num1) && !Number.isNaN(num2)) {

//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;

//         case "-":
//             result = num1 - num2;
//             break;

//         case "*":
//             result = num1 * num2;
//             break;

//         case "/":
//             if (num2 === 0) {
//                 alert("Error: Division by zero is not allowed");
//             } else {
//                 result = num1 / num2;
//             }
//             break;

//         default:
//             alert("Invalid operation symbol");
//     }

// } else {
//     alert("Error: One or both values are not valid numbers");
// }
// if (result !== undefined) {
//     alert("The result is: " + result);
//     console.log("Result:", result);
// }

//module 4 practice question
//1. Write a program that determines whether a given number is positive or not.
let num = prompt("enter the number")
if(num >0)
{
    alert("numberis positive")
}
else
{
    alert("number is nagative")
}

