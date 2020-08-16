const express = require("express")
const results = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const Result = require("../models/Result")

results.use(cors())

process.env.SECRET_KEY = 'secret'



// ADD RESULTS

results.post('/add', (req,res) => {
    const today = new Date()
    const resultData = {
        
        email : req.body.email,
        level : req.body.level,
        semester : req.body.semester,
        gpa : req.body.gpa,
        created : today
    }

}
)







module.exports = results