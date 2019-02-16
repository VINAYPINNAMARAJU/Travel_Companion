const department = require('../database/models/Department')
const User = require('../database/models/User')



module.exports = async (req , res) => {
    
    const departments = await department.find({}).populate('author')

    const users = await User.findById(req.session.userId).populate('author');


    res.render('departmentManagement',{

        departments,users

    })

}