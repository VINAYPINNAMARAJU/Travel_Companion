const Post = require('../database/models/Post')
const Doctor = require('../database/models/doctor')

module.exports = async (req, res) => {
    const post = await Post.findById(req.params.id).populate('author');
    const Doctors = await Doctor.find({})
    res.render("outerSchedule", {
        post,Doctors
      });
    }
    