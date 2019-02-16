const subDepartment = require('../database/models/subDepartment')

module.exports = (req ,res) => {

    subDepartment.create(req.body,(error ,user) =>{
        if(error) {
         
         return res.render('not-found')
        }
      res.redirect('/subdepartmentManagement')
  })
  }
