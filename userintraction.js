console.log("this is my page")
        function helloWorld()
        {
            console.log("hello world")
        }

        function confirmDialog()
        {
            let descision = window.confirm("is it ok")
            console.log(descision)
        }
        function confirmDialog1()
        {
            let remove = confirm("Remove all data")
            let message = remove ? "delete data" : "canceled"
            console.log(message)
        }

        //promte dailogbox
        function promteDailogExample()
        {
            let name = window.prompt("what is your name","Anjali")
            name = name ? name : "anonymous"
            let age =prompt("hello"+ name + "how old are you")
            alert(name + " is " + age + "years old")
        }

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

    let isUserReady  = confirm("Are you ready")
        console.log(isUserReady)
        if(isUserReady)
        {
            alert("User Ready")
        }
        else
        {
            alert("User not ready")
        }




