const Sequelize = require("sequelize")
const db ={}
const sequelize = new Sequelize("nodejs_login1","root","",{
    host:"localhost",
    dialect:"mysql",
    operatorsAliases:false,

    pool:{
        max: 5,
        min: 0,
        accquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.sequelize=sequelize

module.exports=db