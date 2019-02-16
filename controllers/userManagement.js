const user = require('../database/models/User')
const department = require('../database/models/Department')



module.exports = async (req , res) => {
    const users = await user.find({}).populate('author');
    const departments = await department.find({})
    res.render('userManagement',{

        users,departments

    })

}