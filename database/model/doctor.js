const mongoose = require('mongoose')

const DoctorSchema = new mongoose.Schema({

    doctorName: {

        type: String,

        required : true
        
    },
    doctorDescription: {

        type: String,

        required : true
        
    },
    image: {

        type: String,
        
    },

    doctorDepartment: {

        type: String

        
    }

})

const doctor = mongoose.model('doctor',DoctorSchema )

module.exports = doctor