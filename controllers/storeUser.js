const User = require('../database/models/User')

module.exports = (req, res) => {
  User.create(req.body, (error, user) => {

    if (error) {

      return res.render('not-found')
    }
    res.redirect('/userManagement')
  })
}
