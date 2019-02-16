const department = require('../database/models/Department')



module.exports = (req , res ) => {


     department.findOneAndRemove({_id: req.params.id},
        function(error , User){

            if(error){
                res.render('not-found')
            }
            else {
                res.redirect('/departmentManagement')
            }
        }
        )


}