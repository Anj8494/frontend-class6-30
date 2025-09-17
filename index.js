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
// const str1= 42 + "1"
// console.log(str1)
// console.log(typeof str1)
// const str2 = 42 -"1"
// console.log(str2)
// console.log(typeof str2)

// 8/9 / 25
//complex data type - object 

// let testObj = {}
// console.log("testObj :", testObj)
// console.log(typeof testObj)

// let testObj = {
//     nr : 600,
//     str:" My text"
// }
// console.log("testObj :", testObj)
// console.log(typeof testObj)
// console.log("nr :", testObj.nr)
// console.log("str :", testObj.str)

//multipuledata like students data 
// let student_anjali = {
//     name: "Anjali",
//     couurse : "React",
//     contact: "98765421",
//     email:"asdg@23gmail.com"
// }
// let student_diksha = {
//     name: "Diksha",
//     couurse : "Node",
//     contact: "987429761",
//     email:"dhjakg@23gmail.com"
// }
// console.log("Name:", student_anjali.name)
// console.log("course:", student_anjali.couurse)
// console.log("contact:", student_anjali.contact)
// console.log("Email:", student_anjali.email)

// console.log("Name:", student_diksha.name)
// console.log("course:", student_diksha.couurse)
// console.log("contact:", student_diksha.contact)
// console.log("Email:", student_diksha.email)

// student_anjali.contact = 9876452938
// student_anjali.email = "anj@998.gmail.com"
// console.log("Name:", student_anjali.name)
// console.log("course:", student_anjali.couurse)
// console.log("contact:", student_anjali.contact)
// console.log("Email:", student_anjali.email)

//ad  more option like
// student_anjali.age = 20
// console.log("Anjali's age",student_anjali.age)

// console.log("Anjali's age",student_diksha.age)

//Arrays
//consecutive -- mean 11,12,13,14 like this type(consecutive memoey location)
//inizer store 2 byte data so that why 0,2,4,6.... [10,20,30,40....]
//index's - a[0], a[1], a[2]
//a[0] => address of a + (0*2) => 10
//a[1] => address of a +1 (*2)  => 20
//a[2] => address of a+ 2 (*2) => 30

//complex data type - Arrays

// let days = ["Sun", "Mon", "Tue", "Web","Thu", "Fri", "Sat"]
// console.log(days[0])
// console.log(days[2])
// console.log(days[5])
// days[0] = "Sunday"
// console.log(days[0])
// let emptyArray = []
// console.log(emptyArray[0])
// // new element add in array 
// let animals = []
// console.log(animals[0])
// animals[0] ="dog"
// animals[2] = "cat"
// console.log(animals[0])
// console.log(animals[1])
// console.log(animals[2])

// //multipule data type in array 
// let value = ["test", 7 , 12.3 ,false]//this show type of object
// console.log(typeof value)
// console.log(value[0])
// console.log(value[1])
// console.log(value[2])
// console.log(value[3])

//9/9/25
//array in array
// let names =[["Olivia", "Emma" , "Mia", "Sofia"],["william", "james", "daniel"]]
// console.log("names:", names)
// let myArray = names [0]
// console.log(names[0])
// console.log(names[1])
// console.log(names[0][3])
// console.log(names[1][2])

// let user1 = {
//     name: "Anjali",
//     surname : "sharma",
//     age : 12,
//     email: "anj234gmail.com"
// }
// let user2={
//     name: "abhi",
//     surname : "sharma",
//     age : 18,
//     email: "abvh@4tgamil.com"
// }

// let objArray = [user1, user2]
// console.log(objArray)
// console.log(objArray[1])
// console.log(objArray[1].surname)


// objArray[2]= {
//     name: "shan",
//     surname : "Dwivedi",
//     age : 25,
//     email: "shan65@gamil.com"
// }
// console.log(objArray)
// console.log(objArray[2].name)

//instance of oprater(it is do false and true )
// let days = ["Sun", "Mon", "Tue", "Web","Thu", "Fri", "Sat"]
// let day = "Sunday"
// console.log(typeof days)
// console.log(typeof day)
// console.log(days instanceof Array)
// console.log(day instanceof Array)

// console.log( "days length : ",days.length)
// // console.log("objArray length:", objArray.length)

// days[7] = "someday"
// console.log( "days length : ",days.length)

// //indexof method
// console.log("index of wednesday: ", days.indexOf("wed"))
// console.log("index of wednesday:", days.indexOf("wednesday"))

//push method (add new )
// let names = ["anjali", "abhi", "radha", "shan"]
// console.log(names.length)
// names.push("raj")
// console.log(names.length)
// console.log(names)

//unshift method
// let names = ["anjali", "shan", "raj", "abhi"]
// console.log(names.indexOf("raj"))
// console.log(names.indexOf("jan"))

// names.unshift("jan")
// console.log(names.indexOf ("jan"))
// console.log(names)

//pop method(remover last index in array)
// let names = ["anjali", "shan", "raj", "abhi"]
// console.log(names.length)
// let name = names.pop()
// console.log(names.length)
// console.log(name)
// console.log(names)

//shift method
// console.log(names.length)
//  name = names.shift()
// console.log(names.length)
// console.log(name)
// console.log(names)

//15/9/25
//reverse methode (interview quetions how to do reverse methoode and we say use preddefined methode)
// let name = ["anjali", "abhi", "radha", "shan"]
// console.log(name)
// name.reverse()
// console.log(name)

//slice method 
// let name = [ "anjali" , "abhi", "radha", "shan"]
// let n1 = name.slice(2)
// console.log(n1)
// let n2 = name.slice(1,3)
// console.log(n2)
// let n3 = name.slice(0,-1)
// console.log(n3)
// let n4 = name.slice(-1)
// console.log(n4)
// let n5 = name.slice(-2)
// console.log(n5)
// console.log(name)

//concat method
//  let name1 =  ["raj","ram", "diksha", "jon"]
// //  name = name.concat(name1)
// name1 =name1.concat(name)
//  console.log(name1)

//16/9/25
//operators(assigment operator)
//  let year  = 2050
//  let newYear = year = 2051
//  console.log("year:", year)
//  console.log("newYear", newYear) 

//Arithmetic opretor
// console.log(2+ 2*2)
// console.log(2+(2*2))
// console.log((2+2) *2)

// const x = 5
//  const y = 2 
//  console.log("addition;" , x+y)
//  console.log("subtraction:", x-y)
//  console.log("multipliction:", x*y)
//  console.log("division:", x/y)
//  console.log("division remainder:", x%y)
//  console.log("exponent:", x**y)//** */ its mean squar

//Unary Arrithmetic operatore
// let str = "123"
// let n1 = +str
// let n2 = -str
// let n3 = -n2 
// let n4 = +"abcd"

// console.log(`${str} : ${typeof str}`)
// console.log(`${n1} : ${typeof n1}`)
// console.log(`${n2} : ${typeof n2}`)
// console.log(`${n3} : ${typeof n3}`)
// console.log(`${n4} : ${typeof n4}`)

//unary increment and decrement opretors
// let a = 10
// console.log("a:", a)
// console.log("a++", a++)
// console.log("a:", a)
// console.log("++a", ++a)

// console.log("a:", a)
// console.log("a--", a--)//postfix
// console.log("a:", a)
// console.log("--a", --a)//prefix

// console.log(0.2 +0.1)
// console.log(0.2 * 0.1)
// console.log(0.3 /0.1)

//compound assigment operater
//exmaple (x= x+100)(x=x-10)
// let x = 10
// x +=2
// console.log(x)
// x-=4
// console.log(x)
// x *=3
// console.log(x)
// x/=6
// console.log(x)
// x %= 10
// console.log(x)

//logical operatore
//And Operator
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// //or
// console.log(true || true)
// console.log(true || false)
// console.log(false|| true)
// console.log(false || false)

// const a = false
// const b= true
// const c = false
// const d= true
// console.log(a&& b&&c ||d)
// console.log(a &&b ||c ||d)

//17/9/25
//logical oparetor and non boolean values 
// let nr =0
// let year = 1970
// let name= "Anjali"
// let empty= ""

// console.log(!nr)
// console.log(!year)
// console.log(!name)
// console.log(!empty)
// console.log(!!nr)
// console.log(!!name)//if we want to boolean value so we use !! )

//And or 
// console.log(true && 1991)
// console.log(false && 1991)
// console.log(2 && 5)
// console.log(0 && 5)
// console.log("Anjali" && "anj")
// console.log("" && "anj")
// console.log(true || 1991)
// console.log(false| 1991)
// console.log(2 || 5)
// console.log(0 || 5)
// console.log("Anjali" || "anj")
// console.log("" || "anj")

//short circuit evaluatuion 
// let x =0
// let y =0
// console.log(x++ && y++)
// console.log(x)
// console.log(y)
// console.log("-----------------")
//  x =1
//  y =0
// console.log(x++ && y++)
// console.log(x)
// console.log(y)
//or
// let x =0
// let y =0
// console.log(x++ || y++)
// console.log(x)
// console.log(y)
// console.log("-----------------")
//  x =1
//  y =0
// console.log(x++ || y++)
// console.log(x)
// console.log(y)

//compound Asssgiment operators
// let a = true
// a &&= false // a = a&& false
// console.log(a) 

// let b = false
// console.log(b)
// b ||= true // b= b|| true
// console.log(b) 

//string operator
// let greetings = "hi"
// console.log(greetings + " "+ "nj")
// let sentence = "happy new year"
// let newSentence = sentence + 10191
// console.log(newSentence)
// console.log(typeof newSentence)

let sentence = "happy new"
sentence += "year"
sentence += 10191
console.log(sentence)
