const User = require('../database/models/User')

const Doctor = require('../database/models/doctor')

const subDepartment = require('../database/models/subDepartment')



module.exports = async (req, res) => {


  const users = await User.findById(req.session.userId).populate('author')

  const subDepartments = await subDepartment.find({ sDdepartment: req.session.userDepartment })

  const Doctors = await Doctor.find({ doctorDepartment: req.session.userDepartment })

  res.render("createSchedule", {
    subDepartments, Doctors, users
  });

};
