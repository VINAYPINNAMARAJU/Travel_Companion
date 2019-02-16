const user = require('../database/models/User')

module.exports = (req , res ) => {


     user.findOneAndRemove({_id: req.params.id},
        function(error , User){

            if(error){
                res.render('not-found')
            }
            else {
                res.redirect('/userManagement')
            }
        }
        )


}