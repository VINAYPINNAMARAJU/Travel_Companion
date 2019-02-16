const Doctor = require('../database/models/doctor')

module.exports = async (req , res) => {    
    const doctors = await Doctor.findOne({doctorName : req.params.name}).populate('author')
    res.render('doctorDetails',{

        doctors

    })

}