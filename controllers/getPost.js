const Post = require('../database/models/Post')
const User = require('../database/models/User')
const Doctor = require('../database/models/doctor')

module.exports = async (req, res) => {

  const users = await User.findById(req.session.userId).populate('author')
  const post = await Post.findById(req.params.id).populate('author');
  const Doctors = await Doctor.find({})

  const department = users.department

  res.render("viewSchedule", {
    post,Doctors,users
  });


}
