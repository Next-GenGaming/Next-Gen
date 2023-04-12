const express = require('express')
const cors = require('cors')
const path = require('path')
const postsRouter = require('./routes/posts.router')
const morgan = require('morgan')


const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.use(morgan('combined'))

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/posts', postsRouter)
app.get('/*', (req, res) => {
    res.send(path.join(__dirname, '..', 'public', 'index.html'))
    // Sets all paths not named in the server to be set to be handled by the frontend
})

module.exports = app