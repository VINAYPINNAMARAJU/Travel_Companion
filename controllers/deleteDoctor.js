const doctor = require('../database/models/doctor')

module.exports = (req , res ) => {


     doctor.findOneAndRemove({_id: req.params.id},
        function(error , User){

            if(error){
                res.render('not-found')
            }
            else {
                res.redirect('/doctorManagement')
            }
        }
        )


}