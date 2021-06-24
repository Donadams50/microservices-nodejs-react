const cors = require('cors')
const path = require('path')
const {randomBytes} = require('crypto')
const bodyparser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
app.use(bodyparser.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')))

const posts = {};
 
 app.get('/posts',(req, res )=> {
    res.send(posts);
 });
//post comment
 app.post('/posts',(req, res )=> {
    const id = randomBytes(4).toString('hex')
    const {title} = req.body

    posts[id] = {
        id, title
    }
    res.status(201).send(posts[id]);
  })
  
const server = app.listen(port, function () {
  console.log(`listening on port ${port}`)
})

module.exports = server