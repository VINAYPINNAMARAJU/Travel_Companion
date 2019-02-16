const subDepartment = require('../database/models/subDepartment')

module.exports = (req , res ) => {


     subDepartment.findOneAndRemove({_id: req.params.id},
        function(error , User){

            if(error){
                res.render('not-found')
            }
            else {
                res.redirect('/subdepartmentManagement')
            }
        }
        )


}