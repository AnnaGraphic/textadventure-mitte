const express = require('express')
const app = express()
//const game = require('./game')
const story2 = require('./story')

app.get('/', (req, res) => {
    // let question = story.id
    res.send(story2.q)
    console.log(story2.id)
})

app.listen(3000, () => {
    console.log(`listen on port 3000`)
})