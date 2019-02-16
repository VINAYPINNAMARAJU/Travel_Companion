
const Post = require('../database/models/Post')
module.exports = (req, res) => {
  req.body.rows = constructRows(req.body);
  const { department, createdFor } = req.body;
  const depver = Post.findOne({ department })
  depver.findOne({ createdFor },(error,done)=>{
    if(done)
    {
      res.render("not-found")
    }
    else{ 
      Post.create({
        ...req.body,
        author: req.session.userId
    })  
    res.redirect('/')

    }
    
  })
}

function constructRows(body) {
  var rows = [];
  for (var i = 0; i < body.type_row.length; i++) {
    var row = {
      number: body.number_row[i],
      type_: body.type_row[i],
      state: body.state_row[i],
      outTime: body.outTime_row[i]
    }
    rows.push(row);
  }
  return rows;
}

