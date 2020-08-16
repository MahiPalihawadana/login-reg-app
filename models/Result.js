const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(

'result',
{
    id:{
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement :true

    },
    email:{
        type:Sequelize.STRING
    },
    level:{
        type:Sequelize.STRING
    },
    semester:{
        type:Sequelize.STRING
    },
    gpa:{
        type:Sequelize.STRING
    },
    created:{
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }

},
{
    timestamps:false
}
)