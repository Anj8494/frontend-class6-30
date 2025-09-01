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

const name = 6
console.log("constant:", name)

// name = Anjali
// console.log("constant:" , name)

const age= 20
console.log ("Age:",age)

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


function helloWorldFunction()
{
    console.log("hello");
    console.log("world");
}
console.log("let begin:");
helloWorldFunction();
console.log("and again");
helloWorldFunction()
console.log("and one more")
helloWorldFunction()

let counter = 100
console.log("count:", counter)
{
    let counter = 10
    console.log("count :", counter)
}
console.log("count:",counter)