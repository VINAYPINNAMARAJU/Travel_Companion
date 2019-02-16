const Post = require('../database/models/Post')
const User = require('../database/models/User')
const Department = require('../database/models/Department')
const SubDepartment = require('../database/models/subDepartment')
const Doctor = require('../database/models/doctor')


module.exports = async (req, res) => {
  function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
  var date1 = [year, month, day].join('-')
  var date2 = date1+" 00:00:00.000Z"
    return date2;
  }

  const posts = await Post.find({ author: req.session.userId }).populate('author');
  const users = await User.findById(req.session.userId).populate('author');
  const departments = await Department.find({});
  const todaysPosts = await Post.find({ createdFor: formatDate() }).populate('author');
  const allposts = await Post.find({}).populate('author');
  const departmentcount = await Department.find({}).count()
  const DoctorsCount = await Doctor.find({}).count()
  const postcount = await Post.find({}).count()
  const SubDepartments = await SubDepartment.find({}).count()
  
  res.render("index", {
    posts, users , departments, todaysPosts ,allposts,DoctorsCount,postcount,SubDepartments
  });
}