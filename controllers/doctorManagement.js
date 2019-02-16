const Doctor = require('../database/models/doctor')
const User = require('../database/models/User')



module.exports = async (req , res) => {
    
    const doctors = await Doctor.find({doctorDepartment : req.session.userDepartment}).populate('author')

    const users = await User.findById(req.session.userId).populate('author');


    res.render('doctorManagement',{

        doctors,users

    })

}