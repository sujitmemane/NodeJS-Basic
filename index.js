const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000


// function middleware1(req, res, next) {
//     console.log("from the middleware" + req.headers.counter)
//     // res.send("From middleware")
//     next()
// }

// app.use(middleware1)


app.use(bodyParser.json())

function calculateSum(counter) {
    let sum = 0;
    for (let i = 0; i < counter; i++) {
        sum += i
    }
    return sum
}




function firstRequest(req, res) {

    const value = req.body.counter
    const calculatedSum = calculateSum(value)
    const output = {
        sum: calculatedSum
    }
    res.send(output)



}



app.get('/handleSum', firstRequest)



function started() {
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)


