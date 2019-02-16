const bcrypt = require('bcryptjs')

const User = require('../database/models/User')

const salt = bcrypt.genSaltSync(10)


module.exports = (req , res ) => {

    const pas = bcrypt.hashSync(req.body.password, salt)

    User.findByIdAndUpdate(req.session.userId,
        {
            username: req.body.username,
            password: pas,

        }, 
       
        
        (error , user) =>{
            if(error)
            {
                res.render('not-found')
            }
            else{
                res.redirect('/')

            }
                        
            
        })
     
    }