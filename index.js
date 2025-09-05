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

//  let a= 1/0;
//  let b=-Infinity;
//  console.log(a)//-Infinity
//  console.log(b)//-Infinity
//  console.log(typeof a);
//  console.log(typeof b);
//  let s = "it's definitely not a number"
//  let n = s*10
//  console.log(n)// NAN
//  console.log(typeof n)//number

//  let big = 123456789000000n;
//  let big2 = 1n;
//  console.log(big)//1234567890000n
//  console.log(typeof big) //bigint
//  console.log(big2)// 1n
//  console.log(typeof big2)//bigint
//  console.log(7n / 4n)//1n

// //  let big3 = 1000n+20

// // let big4 = 1000n /0n

// let country = "Malwai"
// let continent = 'Africa'

// console.log(country)//mawai
// console.log(typeof country) //string
// console.log(continent) //africa
// console.log(typeof continent) //string

// let dialog = "he said then 'how are you ?' and the scene ended"
// let dialog1 = 'he said then "how are you ?" and the scene ended'
// console.log(dialog)
// console.log(dialog1)

//4/9/25 class

//primitive data types
// let message1 = 'The vessel\'Mars\'called at the port'
// let message2 = "Cyclone \"Cilida\" to pass close to mauritius."
// console.log(message1)
// console.log(message2)
// let path= "C:\\windows"
// console.log(path)


//arithmetic oprator
// let path= "c:\\Windows" - "windows"
// console.log(path)
// let test = "100" - "10"
// console.log(test)
// console.log(typeof test)

//  test = "100" + "10"//it's concadination..
// console.log(test)
// console.log(typeof test)

//  test = "100" * "10"
// console.log(test)
// console.log(typeof test)

//  test = "100" / "10"
// console.log(test)
// console.log(typeof test)

//interpolation
// let country = "Malawi"
// let continent ="Africa"
// let sentence =`${country} is located in ${continent}.`
// console.log(sentence)

// //isko ese bhi likh skte hai 
// let sentence1 =country+ "is located in" + continent + "." 
// console.log(sentence1)

// function myFUnction ()
// {

// }
//  myFUnction()

//  console.log(console)
// //it's method  like
//  console.time()
//  console.log("test console")// test console
//  console.timeEnd()//default 

////aotuboxing primitvite to (object) character
// let river = "Mekong"
// let character = river.charAt(2)
// console.log(character) //k

// console.log(river.length)

// ///Slice
// let str = "my name is Anjali sharma"
// let str1 ="my-name-is-Anjali-sharma"

// console.log(str.length)
// console.log("--"+str.slice(3,7)+"--")
// console.log("--"+str.slice(3)+"--")
// console.log(str1.split("-"))
// console.log(str.split(" "))
// console.log(str.split("a"))
// console.log(str.split("A"))

//undefined
// let declaredvar
// console.log(typeof declaredvar)//undefined
// declaredvar = 5

// console.log(typeof declaredvar)//number
// declaredvar = undefined;

// console.log(typeof declaredvar)//undefine
// //the undefined value can also be return by the typeOf opretor when a non-existent value
// console.log(typeof motDeclareedVar)//undefined
// console.log(notDeclaredVar)//referenceError

//5/9/25 class
//null
// let someResource
// console.log(someResource)//undefined
// console.log(typeof someResource)//undefined
// someResource =null
// console.log(someResource)//null
// console.log(typeof someResource)//object

//construction functions
// const str =String()
// const num = Number()
// const bool = Boolean()

// console.log("str :" , str)//-
// console.log("Type of str:", typeof str)//-
// console.log("num:",num)//0
// console.log("Type of num:", typeof num)//-
// console.log("bool :" , bool)//false
// console.log("Type of str:", typeof bool)//-
// const big1 = BigInt(42)
// console.log(big1)//42n
// console.log("Type of big1 :", typeof big1)//-
// const big2 = BigInt()// uncau:cannot convert undefined to a bigint

//conversions(typecasting)
// const num = 42
// console.log("num: ", num)
// const strFromNum1 =String(num)
// console.log("strFromNum1 :", strFromNum1)
// console.log("typeof strFromNum1 :",typeof strFromNum1)
// const strFormNum2 =String(8)
// console.log("strFormNum2 :", strFormNum2)
// console.log("typeof strFormNum2 :",typeof strFormNum2)
// const strFromBool = String(true)
// console.log("strFromBool :", strFromBool)
// console.log("typeof strFromBool :",typeof strFromBool)
// const  numFromStr = Number("312")
// console.log("numFromStr :", numFromStr)
// console.log("typeof numFromStr :",typeof numFromStr)
// const boolFromNumber = Boolean(0)
// console.log("boolFromNumber :", boolFromNumber)
// console.log("typeof boolFromNumber :",typeof boolFromNumber)

//type conversions (convert string)





//number 
// console.log(Number(42)) //42
// console.log(Number("11")) //11
// console.log(Number("0x11")) //17 -> 11 => 1* 16 + 1*1
// console.log(Number("0011"))//9
// console.log(Number("0b11"))//3
// console.log(Number("12e3"))//1200
// console.log(Number("Infinity"))//infinity
// console.log(Number("text"))//Nan
// console.log(Number(14n))//14
// console.log(Number(123456789987654321n))//123456789...
// console.log(Number(true))//1
// console.log(Number(false))//0
// console.log(Number(undefined))//Nan
// console.log(Number(null))//0

//convert boolean
// console.log(Boolean(true))//true
// console.log(Boolean(42))//true
// console.log(Boolean(1))//true
// console.log(Boolean(0))//false
// console.log(Boolean(NaN))//flase
// console.log(Boolean("text"))//true
// console.log(Boolean(""))//flase
// console.log(Boolean(" "))
// console.log(Boolean(undefined))//false
// console.log(Boolean(null))// false

//convert BigInt
// console.log(BigInt(11))
// console.log(BigInt(0x11))
// console.log(BigInt(11e2))
// console.log(BigInt(true))
// console.log(BigInt("11"))
// console.log(BigInt("0x11"))
// console.log(BigInt("hello"))
// console.log(BigInt(null))
// console.log(BigInt(undefined))
// console.log(BigInt(NaN))

//implicit conversions (automatically doing)
const str1= 42 + "1"
console.log(str1)
console.log(typeof str1)
const str2 = 42 -"1"
console.log(str2)
console.log(typeof str2)


