// console.log("this is my page")
//         function helloWorld()
//         {
//             console.log("hello world")
//         }

//         function confirmDialog()
//         {
//             let descision = window.confirm("is it ok")
//             console.log(descision)
//         }
//         function confirmDialog1()
//         {
//             let remove = confirm("Remove all data")
//             let message = remove ? "delete data" : "canceled"
//             console.log(message)
//         }

//         //promte dailogbox
//         function promteDailogExample()
//         {
//             let name = window.prompt("what is your name","Anjali")
//             name = name ? name : "anonymous"
//             let age =prompt("hello"+ name + "how old are you")
//             alert(name + " is " + age + "years old")
//         }

        // 25/9/25 
        //control flow  (if)

        // let isUserReady  = confirm("Are you ready")
        // console.log(isUserReady)
        // if(isUserReady)
        // {
        //     alert("User Ready")
        // }

        // let unitPrice = 10 
        // let pieces = prompt("how many pices do you order ?",0)
        // if (pieces >0)
        // {
        //     let total = unitPrice * pieces
        //     console.log(total)
        // }
        // console.log(total)

        // let useerAge= prompt("enter your age:")
        // let isFemale = false
        // let points = 703
        // let carValue = 299
        // let shippinCost = 9.99
        // if(useerAge >21)
        // {
        //     if (carValue >= 300 || points >= 500)
        //     {
        //         shippinCost =0
        //     }
        // }
        // alert("Shipping Cost :" + shippinCost)

    //    let useerAge= prompt("enter your age:")
    //     let isFemale = false
    //     let points = 703
    //     let carValue = 299
    //     let shippinCost = 9.99 
    //     if (useerAge >21 && (carValue >= 300 || points >= 500))
    //         shippinCost = 0
    //     alert("Shipping Cost :" + shippinCost)

    // let num = 10
    // if (num>=0)
    // {
    //     console.log("the number is positive")
    // }
    // else{
    //     console.log("ngative")
    // }

    // let isUserReady  = confirm("Are you ready")
    //     console.log(isUserReady)
    //     if(isUserReady)
    //     {
    //         alert("User Ready")
    //     }
    //     else
    //     {
    //         alert("User not ready")
    //     }

//26/9/25 
// if else details concepts
// let age =prompt("Enter your age:")
// if(age >= 18)
// {
//     alert("your are able to vote")
// }
// else 
// {
//     alert("your are a minor , not eligible to vote")
// }

//if elseif else
// let age =prompt("Enter your age:")
// if(age >= 18)
// {
//     alert("your are able to vote")
// }
// else if(age>=13)
// {
//     alert("your are a teenager, welcome to teenage")
// }
// else
// {
//     alert("your are a minor , not eligible to vote")
// }

//if else if else multipule
// let number =prompt("Enter a Number:",0)
// if(number <10)
// {
//     alert("<10")
// }
// else if(number <30)
// {
//     alert("<30")
// }
// else if(number < 60)
// {
//     alert("<60")
// }
// else if(number <80)
// {
//     alert("<80")
// }
// else
// {
//     alert(">80")
// }

// let age = prompt("enter your age")
// let hasParentsAooroval =true;
// let cartValue = 350
// let points = 600
// let shippinCost=50
// let addInsurance= true
// let InSURANCE_COST = 40
// orderISValid = true
// hasPromoCode = false
// if(age< 21 && hasParentsAooroval === false)
// {
//     alert("oredr is vaild")
// }
// else if (age>21 && hasParentsAooroval === true)
// {
//     shippinCost = shippinCost -5
//     alert("shippinCost :",shippinCost)
// }
// else if (age >=65)
// {
//     shippinCost=0
//     alert(shippinCost)
// }
// else if(age >=21 && age <=64)
// {
//     if(hasParentsAooroval === true || cartValue >300  || points >500)
//     {
//         shippinCost =0
//     }
//     alert(shippinCost)
// }
// else (addInsurance === true && orderISValid === true && hasPromoCode === true) 
// {
//     shippinCost = shippinCost + InSURANCE_COST
//     alert(shippinCost)
// }

// 30/9/25 
//1. write a program to check number is even or odd
// let num = prompt("enter the num")
// if(num% 2===0)
// {
//     alert("num is even")
// }
// else 
// {
//     alert("num is odd")
// }

//2. write a program to get user name and age check check if user eligible to vote  or not if yes show an alert with respective message
// let name = prompt("enter name")
// let age = prompt("enter age")
//  if (age>= 18)
//  {
//     alert(name + " your eligible for vote")
//  }
//  else
//  {
//     alert (name + "you are not eligible for vote")
//  }

//3.wirte a program to let user enter number of  products, let the price of produce be 12/- per product calculate the total price of all products
// let numProduct = prompt("enter the number of product")
// let peroductPrice = 12
// let totalPrice = numProduct * peroductPrice
// alert("total price:" + totalPrice)

//write a program to ask for user's age and gender . show message "you are eligible for marrige accoring to old law",
//"you are eligible for marrige according to new law"
//(coorrect it its showing wrong) let gender = ("enter your gender")
// let age = prompt("Enter your age")
//  if ((gender == "male" && age >= 21) || (gender === "female" && age >=18))
//  {
//     alert ("your are eligible for merige according old law")
//  }
//  else if((gender == "male" && age >= 21) || (gender === "female" && age >=21))
// {
//     alert("you are not eligible for marrrige")
//  }
//  else{
//     alert ("your are eligible for merige according new law")

//  } 

//let user enter the mark base on the marks enter give user the grad he scored
//90-100 grade -a
//80-90 -> b
//70 -79-> c
//60-69-> d
//<60 ->fail
// let score = prompt("enter your marks")
// if(score>=90 && score <= 100)
// {
//     alert("grade A")
// }
// else if (score >= 80 && score<=89)
// {
//     alert("grade B")
// }
// else if (score >= 70 && score<=79)
// {
//     alert("grade C")
// }
// else if (score >= 60 && score<=69)
//  {
//         alert("grade D")
//     }
// else
// {
//     alert("you failed")

// }

//let user enter marks for 5 subject , calculate practentage of all marks and show hte % 
// let sub1= prompt("enter mark for sub 1")
// let sub2= prompt("enter mark for sub 2")
// let sub3= prompt("enter mark for sub 3")
// let sub4= prompt("enter mark for sub 4")
// let sub5= prompt("enter mark for sub 5")

// let totalMarks= sub1 + sub2 + sub3 + sub4 + sub5
// let maxMark= 5*100
// let percentage= (totalMarks/maxMark) *100
// alert("percentag :" ,percentage)

// 1-10-25
//conditional opretor
// let price = 48
// let shippingCost = price > 50 ? 0 :5
// console.log(`price = ${price}, shipping = ${shippingCost}`)

// let start =confirm("start")
// start ? alert("here we go") : alert("aborted")

// let start =confirm("Start")
// let message = start ? "here we go" : "aborted"
// alert(message)

// let age = 20 
// let message = (age >=80) ? "you are an adult" : "you are a minor"
// console.log("checking age",message)

// let number = 7
// let result = (number % 2 ===0) ? "even" : "odd"
// console.log("checking number is even or odd", result)

// let isLoggedIn = true 
// let welcomMessage = isLoggedIn ? "welcome back" : " please log in"
// console.log("login check", welcomMessage)

// let score = 85 
// let grade = (score >= 90) ? "A" : (score >= 80) ?"B" : (score >= 70) ? "C" : (score >=60) ? "D" :"F"
// console.log("grade:" ,grade)

// switch case 
// let gate = prompt("choose gate : a,b,c,d")
// let win = false
// switch (gate)
// {
//     case "a":
//         alert("gate a : empty")
//         break
//     case "b":
//         alert("gate b : main prize")
//         win = true
//         break
//     case "c":
//         alert("gate c is empty")
//         break;
//     default:
//         alert("no gate" + String(gate))
// }
// if(win)
// {
//     alert("winner")
// }
 

// 7/10/25
//loops
//while loop
// let n =0
// while(n< 91)
// {
//     console.log(n)
//     n += 10
// }

// let isOver = false
// let counter = 1
// while(isOver != true)
// {
//     let continueLoop = confirm(`[${counter}] Contiue the loop??`)
//     isOver = continueLoop === true ? false :true
//     counter = counter+1
// }
// alert("COmpleted the loop")

// let isOver = false 
//  let counter = 1
//  while(!isOver)
//  {
//     isOver = !confirm(`[${counter++}] Contiue the loop`)
//  }
// alert("completed the loop")

// let fruits = ["apple", "banana", "mango", "grapes", "orange"]
// let index = 0
// while(index< fruits.length)
// {
//     console.log(fruits[index])
//     index ++;
// }

// let fruits = ["apple", "banana", "mango", "grapes", "orange"]
// let index = 0
// let myLine= ""
// while(index< fruits.length)
// {
//     console.log(fruits[index])
//     myLine += fruits[index]+" "
//     index ++;
// }
// console.log(fruits.join(" "))
// let fruits = ["apple", "banana", "mango", "grapes", "orange"]
// let index = 0
// let myLine= ""
// while(index< fruits.length)
// {
//     // console.log(fruits[index])
//     // myLine += fruits[index]+" "
//     document.write(fruits[index]+ " ")
//     index ++;
// }
// console.log(fruits.join(" "))

//13/10/25
//for in 
// let user =
//  {
//     name: "nj",
//      age : 25
// }
// for(let key in user)
// {
//     console.log(`${key}: ${user[key]}`);
// }

// const array1 =["a", "b", "c","d"]
// for(const element of array1)
// {
//     console.log(element)
// }

//braek and countinue
// let i =0 
// while(true)
// {
//     console.log(i)
//     i++
//     console.log("....")
//     if(i >= 5)
//     {
//         console.log("now breaking")
//         break
//         console.log("breaked now")
//     }
// }
// console.log('exited the loop with break')


// for (let i=0; i< 10; i++)
// {
//     if (i == 3)
//     {
//         continue
//     }
//     console.log("i: ", i)
// }
 
// let fruits = ["apple", "banana","mango", "orange", "graps"]
// for(let i = 0 ; i< fruits.length ; i++)
// {
//     if (fruits[i] === "mango")
//     {
//         console.log("mango found at index" + i) 
//         break
//     }
//     console.log("fruit: ", fruits[i])
// }
// console.log("outside the loop")

// for (let i = 1; i <= 10; i++)
// {
//     if(i % 2 !==0 )
//     {
//         continue
//     }
//     console.log("i:",i)
// }

// let gate  =prompt("choose gate : a,b,or c")
// let win = false
// switch(gate)
// {
//     case 1:
//     case "1":
//     case "A":
//     case "a":
//         alert("gate A : empty")
//         break

//     case 2:
//     case "2":
//     case "B":
//     case "b":
//         alert("gate B : win prize")
//         break
//     case 3:
//     case "3":
//     case "C":
//     case "c":
//         alert("gate c : empty")
//         break

//     default:
//         alert("no gate "+ String(gate))
// }
// if(win)
// {
//     alert(" winner")
// }

//16/10/25
//functions
//hoisting
// showName()
// function showName()
// {
//     console.log(name)
// }
// // let name = "nj"
// var name = "nj"

//calling function 
// let name ="nj"
// function showName()
// {
//     console.log(name)
// }
// showName()
// function sayHello()
// {
//     console.log("hello , nj")
// }
// console.log("about to call function")
// sayHello()
// console.log("function call finished")
// function showMessage()
// {
//     alert("hello everyone")
// }
// showMessage()
// let userName = "nj"
// function showMessage()
// {
//     let message = 'hello, '+userName;
//     console.log("message:", message)
// }
// showMessage()
// // console.log("message:", message)
// console.log("userName:", userName)

// function showMsg()
// {
//     console.log("msg 2")
//     return
//     console.log("msg 3")
// }
// console.log("msg 1")
// showMsg()
// console.log("msg 4")

// function getTrue()
// {
//     return true
// }
// let test =getTrue()
// console.log(test)
// if(test)
// {
//     console.log("yay!!!!!")
// }
// else{
//     console.log("oh no !!!!!!")
// }

// let tempratures;
// let sum;
// let meantemp;
// tempratures =[12,11,13,14,11,10,9,25,21,26,23,15,34]
// console.log("mean temp :", getMenTemp(tempratures))
// console.log("-----------------------")
// tempratures=[17,18,19,18,10,12,18,17,15,14,13]
// meantemp = getMenTemp(tempratures)
// console.log("mean temp ", meantemp)

// function getMenTemp(tempratures)
// {
//     sum = 0;
//     for(let i = 0; i<tempratures.length ; i++)
//     {
//         sum += tempratures[i]
//     }
//     meantemp = sum / tempratures.length
//     return meantemp
// }

// function getMenTemp(tempratures)
// {
//     sum = 0;
//     for(let i = 0; i<tempratures.length ; i++)
//     {
//         sum += tempratures[i]
//     }
//     return sum / tempratures.length
// }


//24/10/25
// function showMessage(message)
// {
//     console.log(`message: ${message}`);
// }
// console.log(showMessage)

// let sm = showMessage
// console.log("sm :",sm)
// sm("sm")
// showMessage("show message")

// function doNothing()
// {
//     return undefined
// }
// let a= doNothing();
// let b= doNothing;
// console.log(typeof a)
// console.log(typeof b)

// function add(a,b)
// {
//     return a+b
// }
// function multiply(a,b)
// {
//     return a*b
// }
// function opration(func, first, second)
// {
//     return func(first , second)
// }
// console.log(opration(add , 10, 20))
// console.log(opration(multiply, 10,20))

//named function expression
// let myAdd = function(a,b)
// {
//     return a+b
// }
// console.log(myAdd(20,40))

// function add(a,b)
// {
//     return a+b
// }
// function multiply(a,b)
// {
//     return a*b
// }
// function opration(func, first, second)
// {
//     return func(first , second)
// }
// console.log(opration(add , 10, 20))
// console.log(opration(function(a,b)
// {
//     return a+b
// }, 40,60))
// console.log(opration(multiply, 10,20))
// function getMenTemp(tempratures)
// {
//     if (!(tempratures instanceof Array))
//     {
//         return NaN;
//     }
//     let sum = 0;
//     for(let i=0 ; i<tempratures.length; i++)
//     {
//         sum +=tempratures[i]
//     }
//     return sum/tempratures.length;
// }
// console.log(getMenTemp([10,20,30]))
// console.log(getMenTemp("not an aary"))

// function add(a,b)
// {
//     if (typeof a !== "number" || typeof b !== "number")
//     {
//         return "invaild input: numbers expected"
//     }
//     return a+b
// }
// console.log(opration(add , "ten", 20))
// console.log(opration(add , 10, "twenty"))
// function multiply(a,b)
// {
//     return a*b
// }
// function opration(func, first, second)
// {
//     return func(first , second)
// }
// console.log(opration(add , 10, 20))
// console.log(opration(function(a,b)
// {
//     return a+b
// }, 40,60))

//27/10/25
//callbacks 
// let inner = function()
// {
//     console.log('inner 1');
// }
// let outer = function(callback)
// {
//     console.log('outer 1')
//     callback()
//     console.log('outer 2')
// }

// console.log('test 1')
// outer(inner)
// console.log('test 2')

// function calculate(a,b , operation)
// {
//     return operation(a,b);
// }
// function add(x,y)
// {
//     return x+y
// }
// function subtract(x,y)
// {
//     return x-y
// }
// console.log(calculate(5,3,add))
// console.log(calculate(5,3,subtract))

///asychoronous callbacks
// console.log("start")
// setTimeout(function()
// {
//     console.log("this run after 1 second");
// },1000)
// console.log("end")

// let counter = 0 
// console.log("strat")
// let intervaild = setInterval(function()
// {
//     console.log("reapting:", ++counter)
// },1000)
// setTimeout(function()
// {
//     clearInterval(intervaild)
//     console.log("sttoped")
// },5500)
// console.log("end")

// window .addEventListener("click", function()
// {
//     console.log("clicked")
// })

// 28/10/25
//arrow function
//filter method
//even number
// let array =[1,2,3,4,5,6,7,8,9,10]
// let evenArray =array.filter(function(element)
// {
//     if(element %2 === 0)
//     {
//         return true
//     }
//     return false
// })
// console.log(array)
// console.log(evenArray)

//odd number
// let array =[1,2,3,4,5,6,7,8,9,10]
// let evenArray =array.filter(function(element)
// {
//     if(element %2 !== 0)
//     {
//         return true
//     }
//     return false
// })
// console.log(array)
// console.log(evenArray)

// let array = ["aditya","sandeep","dikasha","george", "chandresh","anjali"]
// let newArray = array.filter(function(element)
// {
//     if(element === "aditya" || element === "dikasha" || element ==="chandresh")
//     {
//         return true
//     }
//     return false
// })
// console.log(array)
// console.log(newArray)
// let array = ["aditya","sandeep","dikasha","george", "chandresh","anjali"]
// let newArray = array.filter(function(element)
// {
//     return element === "aditya" || element === "dikasha" || element ==="chandresh"
// })
// console.log(array)
// console.log(newArray)

// let array = ["aditya","sandeep","dikasha","george", "chandresh","anjali"]
// let newArray = array.filter(function(element)
// {
//     if(element !== "aditya" && element !== "dikasha" && element !=="chandresh")
//     {
//         return true
//     }
//     return false
// })
// console.log(array)
// console.log(newArray)

// let array = ["aditya","sandeep","dikasha","george", "chandresh","anjali"]
// let newArray = array.filter(function(element)
// {
//     return element !== "aditya" && element !== "dikasha" && element !=="chandresh"
// })
// console.log(array)
// console.log(newArray)

// let array = ["aditya","sandeep","dikasha","george", "chandresh","anjali"]
// let newArray = array.map(function(element)
// {
//     if(element === "aditya")
//         return "aditya gupta"
//     return element+"----"
// })
// console.log(array)
// console.log(newArray)

// let array =[1,2,3,4,5,6,7,8,9,10]
// let newArray = array.map(function(element)
// {
//         return element+3
// })
// console.log(array)
// console.log(newArray)

// let array = [10,20,30,40,50,60,70]
// let newArray = array.map(function(element)
// {
//     return element+2
// })
// console.log(array)
// console.log(newArray)
// function sum(a,b)
// {
//     return a+b
// }
// console.log(sum(5,3))
// let sum =(a,b) => a+b
// console.log(sum(4,6))
// let sum =(a,b) => { return a+b }
// console.log(sum(4,6))

//29/10/25 
//foreach
// let names = ['Alice', 'eve', 'john']
// function showName(element)
// {
//     console.log(element)
// }
// names.forEach(showName)

// let names = ['Alice', 'eve', 'john']
// let showName =(element) => console.log(element)
// names.forEach(showName)

// let names = ['Alice', 'eve', 'john']
// let showName =(element) => console.log(element)
// names.forEach(showName)
// showName("nj")

// let array = [1,2,3,4,5,6,7,8,9,10]
// let myFunction = (element) => console.log(element+11)
// array.forEach(myFunction)
// console.log(array)

// let square = x => x *x;
// console.log(square(5))

//recursion
// function factorial(n)
// {
//     return n> 1 ? n * factorial(n-1) :1
// }
// console.log(factorial(5))

function factorial(n)
{
    let result = 1
    while(n>1)
    {
        result *=n;
        n--
    }
    return result
}
console.log(factorial(5))