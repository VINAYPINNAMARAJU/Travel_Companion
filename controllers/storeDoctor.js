const doctor = require('../database/models/doctor')
const path = require("path");

module.exports = (req ,res) => {
  const {image} = req.files

image.mv(path.resolve(__dirname, '..', 'public/images', image.name),(error) => {

    doctor.create({
      ...req.body,
      image: `/images/${image.name}`
    },(error ,doct) => {
      res.redirect('/doctorManagement')
    }
    )
    
  })
}