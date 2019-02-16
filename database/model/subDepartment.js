const mongoose = require('mongoose')

const subDepartmentSchema = new mongoose.Schema({

    subDepartmentName: {

        type: String,

        required : true
        
    },

    sDdepartment: {

        type: String

        
    }

})

const subDepartment = mongoose.model('subDepartment',subDepartmentSchema )

module.exports = subDepartment