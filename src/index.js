const express = require("express")
const app = express() 
const bodyParser = require("body-parser") 
const PORT = process.env.PORT || 3000 
app.use(bodyParser.json()) 

app.get('/',(req,res)=>{
    res.json({"test":"Hello world"})
})

app.listen(PORT, () => {

    console.log(`listening on port ${PORT}`) 
})