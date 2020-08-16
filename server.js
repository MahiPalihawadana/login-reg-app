var express = require("express") // express is a backend framework 
var cors = require("cors")
var bodyparser = require("body-parser")
const bodyParser = require("body-parser")
var app = express()
var port = process.env.PORT || 3000  // we assign a port either by getting it from a environemnt variable or giving the default  port


app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({extended:false})
)

var Users = require("./routes/Users")
var Results = require("./routes/Results")

app.use("/users",Users)
app.use("/results" , Results)

app.listen(port,function(){      
    console.log("Server is running on port " + port)
})