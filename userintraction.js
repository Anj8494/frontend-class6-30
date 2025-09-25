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