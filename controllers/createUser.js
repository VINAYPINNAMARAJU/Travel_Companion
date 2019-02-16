const Department = require('../database/models/Department')


module.exports = async (req, res) => {

  const departments = await Department.find({})

  
  res.render('register', {
  departments
  })
}
