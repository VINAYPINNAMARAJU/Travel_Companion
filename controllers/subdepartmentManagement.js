const subDepartment = require('../database/models/subDepartment')
const User = require('../database/models/User')



module.exports = async (req , res) => {
    
    const subDepartments = await subDepartment.find({sDdepartment: req.session.userDepartment}).populate('author')

    const users = await User.findById(req.session.userId).populate('author');


    res.render('subDepartmentManagement',{

        subDepartments,users

    })

}