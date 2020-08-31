const express = require("express") // our express server
const app = express() // generate an app object
const bodyParser = require("body-parser") // requiring the body-parser
const PORT = process.env.PORT || 3000 // port that the server is running on => localhost:3000
app.use(bodyParser.json()) // telling the app that we are going to use json to handle incoming payload

app.get('/',(req,res)=>{
    res.json({"test":"Hello world"})
})

app.listen(PORT, () => {

    console.log(`listening on port ${PORT}`) // print this when the server starts
})