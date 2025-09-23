
//ticket task+person name
// let ticket = {
//     from: "Indore",
//     to: "Ujjain",
//     price: "100"
// }
// console.log("starting station:",ticket.from)
// console.log("end station:", ticket.to)
// console.log("price of  station:", ticket.price)

// let person = {
//     fristName : "Anjali",
//     lastName : "Sharma"
// }
// console.log("frist name:", person.fristName)
// console.log("last name:",person.lastName)

//Assgiment 
let book =[
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        page: "460"
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        page: "254"
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        page: "352"
    }
]
console.log("title book1:", book[0].title)
console.log("auythor book1:", book[0].author)
console.log("page book1:", book[0].page)
console.log("------------------")
console.log("title book2 :", book[1].title)
console.log("author book2:", book[1].author)
console.log("page book2:", book[1].page)
console.log("--------------")
console.log("title book3 :", book[2].title)
console.log("author book3 :", book[2].author)
console.log("page book3 :", book[2].page)

book.push({title: " Learning JavaScript Design Patterns",
    author:" Addy Osmani",
    page:"254"
})
console.log(book.length)

// let lastBooks = book.slice(-2)
// console.log("last 2 books:" ,lastBooks)

// book.shift()
// console.log("bok shift :", book.length)

let totalPage = book[0].page + book[1].page + book[2].page + book[3].page
console.log("total page:", totalPage)