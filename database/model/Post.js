const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({  //this is the schema which is for that form 

  rows:[ 
    {
      number: String,
      type_: String,
      state: String,
      outTime:String
    }
  ],
  
  createdFor: {
    type: Date
    
  },
  department: {
    type: String
    
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post