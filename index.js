const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdouy,
});

readline.question("a", a => {
    readline.question("b", b =>{
        readline.question("c", c=>{
            discrim = (-parseFloat(b)^2) - 4*parseFloat(a)*parseFloat(c)
            dRoot = Math.sqrt(discrim)
            console.log(`discrim ${discrim}`)
            if (discrim < 0){
                console.log("No roots")
            } else if (discrim = 0){
                x1 = -parseFloat(b)/(2*parseFloat(a))
                console.log(`x = ${x1}`)
            } else{
                x1 = ((-parseFloat(b))+dRoot)/(2*parseFloat(a))
                x2 = ((-parseFloat(b))-dRoot)/(2*parseFloat(a))
                console.log(`x1 = ${x1} x2 = ${x2}`)
            }
        })
    } )
})