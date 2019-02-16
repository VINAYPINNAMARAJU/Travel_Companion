const Department = require('../database/models/Department')

module.exports = (req ,res) => {

    Department.create(req.body,(error ,user) =>{
        if(error) {
         
         return res.render('not-found')
        }
      res.redirect('/departmentManagement')
  })
  }
