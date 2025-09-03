console.log("hello")
// let  height = 165
// console.log(height)

// let  height 
// console.log(height)

// var length = 155
// console.log(length)

// var length = 210
// console.log(length)

// length = 1000
// console.log(length)

// let height = 180
// let anotheraheight = height
//  console.log(height)//180
//  console.log("hieght") // heigth

//  console.log("height:" +height)
//  console.log(anotheraheight)

//  let weight//Declaration

//  weight = 100//initilisation
//  console.log(weight) // accessing the variable
// "use strict";
//  count = 10
//  console.log(count)
//  count = count +100
//  console.log(count)

//  weight="100"
//  console.log(weight)

//  weight = weight+count
//  console.log(weight)
//  console.log(count + weight)

// const name = 6
// console.log("constant:", name)

// // name = Anjali
// // console.log("constant:" , name)

// const age= 20
// console.log ("Age:",age)

///programing blocks
// let counter;
// console.log(counter);//undi=efined
// {
//     counter = 1;
//     {
//         console.log(counter);//1
//     }
//     let count = 2
//     console.log("count:", count)

//     var number = 10//define all the variable as globle for whole file 
//     console.log("number:", number)
// }

// count= 3
// console.log("count:",count)//erroneous
//number = 12
// console.log("number:", number)
// counter = counter+1;
// console.log(counter);//2

// let heigth = 180 
// {
//     let weight = 70
//     console.log(heigth)//180
//     console.log(weight) //70
// }
// console.log(heigth)
// console.log(weight)

// let height = 200;
// {
//    let weight = 100;
//    {
//       let info = "tall";
//       console.log(height); // -> 200
//       console.log(weight); // -> 100
//       console.log(info); // -> tall
//    }
//    console.log(height); // -> 200
//    console.log(weight); // -> 100
//    console.log(info); // -> Uncaught ReferenceError: info is not defined
// }
// var height = 180;
// {
//    var weight = 70;
//    console.log(height); // -> 180
//    console.log(weight); // -> 70  
// }
// console.log(height); // -> 180
// console.log(weight); // -> 70


// function helloWorldFunction()
// {
//     console.log("hello");
//     console.log("world");
// }
// console.log("let begin:");
// helloWorldFunction();
// console.log("and again");
// helloWorldFunction()
// console.log("and one more")
// helloWorldFunction()

// let counter = 100
// console.log("count:", counter)//100
// {
//     let counter = 10
//     console.log("count :", counter)//10
// }
// console.log("count:",counter)//100

// 2 sep 25 class
// var counter =100
// function printCounter()
// {
//     let counter=200 //shadow variable
//     console.log("Counter:", counter)//200
// }
// console.log("Counter:", counter)//100
// printCounter()//200
// console.log("Counter:", counter)//100
//hoisting-js
// console.log("counter:",counter)
// var counter = 100
// console.log("counter:", counter)
// printCounter()

// function printCounter()
// {
//     let counter=200 //shadow variable
//     console.log("Counter:", counter)//200
// }

//typeof
// let year = 1990
// console.log("Year :", year)

// console.log("Type of year variable is: ", typeof year)

// let month
// console.log("Month :", month)
// console.log("Type of Month variable is :", typeof month)

// let name = "Anjali"
// console.log("name :", name)
// console.log("Type of name variable is :", typeof name)

// let typeOfName = typeof name
// console.log("type of name variable is :", typeof name)
// console.log("typeOfName :", typeOfName)

//boolean value (data type)
// let isDataValid = true;
// let isStringTooLOng= false;
// let isGAmeOver = false;
// countinuLoop = true;

// console.log(false)//false
// console.log(typeof false) //boolean
// console.log(isDataValid) //true
// console.log(typeof isDataValid) // boolean

//  const year = 1991
//  let delayInSeconds = 0.00016
//  let area = (16 * 3.14)
//  let thalfArea = area/2
//  console.log(year) // 1991
//  console.log(typeof year) // number
//  console.log(typeof delayInSeconds)

//  let a=10; //decimal -default
//  let b = 0x10; //hexadecimal
//  let c= 0o10 ; // octal
//  let d = 0b10; //binary
//  console.log(a)//10
//  console.log(b)//16
//  console.log(c)//8
//  console.log(d)//2
//  let x = 9e3;
//  let y = 123e-5;
//  console.log(x)//9000
//  console.log(y)//0.00123

 let a= 1/0;
 let b=-Infinity;
 console.log(a)//-Infinity
 console.log(b)//-Infinity
 console.log(typeof a);
 console.log(typeof b);
 let s = "it's definitely not a number"
 let n = s*10
 console.log(n)// NAN
 console.log(typeof n)//number

 let big = 123456789000000n;
 let big2 = 1n;
 console.log(big)//1234567890000n
 console.log(typeof big) //bigint
 console.log(big2)// 1n
 console.log(typeof big2)//bigint
 console.log(7n / 4n)//1n

//  let big3 = 1000n+20

// let big4 = 1000n /0n

let country = "Malwai"
let continent = 'Africa'

console.log(country)//mawai
console.log(typeof country) //string
console.log(continent) //africa
console.log(typeof continent) //string

let dialog = "he said then 'how are you ?' and the scene ended"
let dialog1 = 'he said then "how are you ?" and the scene ended'
console.log(dialog)
console.log(dialog1)