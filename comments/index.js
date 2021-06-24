const cors = require('cors')
const path = require('path')
const {randomBytes} = require('crypto')
const bodyparser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 8008
app.use(bodyparser.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')))

const commentsByPostId = {};
 
 app.get('/posts/:id/comments',(req, res )=> {
    res.send(commentsByPostId[req.params.id] || []);
 });

 app.post('/posts/:id/comments',(req, res )=> {
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;
    
    const comments = commentsByPostId[req.params.id] || []
    
    comments.push({id : commentId, content})

    commentsByPostId[req.params.id] = comments
   
    res.status(201).send(comments);
  })
  
const server = app.listen(port, function () {
  console.log(`listening on port ${port}`)
})

module.exports = server