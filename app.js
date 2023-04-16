const express = require('express')
const app = express()
//const game = require('./game')
const story2 = require('./story')

app.get('/', (req, res) => {
    let answers = ""
    for ( const [key, value] of Object.entries(story2.answers)) {
    answers += `<a href="/${encodeURIComponent(story2.q)}/${encodeURIComponent(key)}"> ${key}</a> <br>`
    }
    let htmlQuestion = `${story2.q} <br>`;
    res.send(htmlQuestion + answers)
    console.log(story2.id)
})

app.get('/:q/:answer', (req, res) => {
    let answers = ""
    let question = decodeURIComponent(req.params.q)



    
    console.log("question", question)
    for ( const [key, value] of Object.entries(story2.answers)) {
    answers += `<a  href="/${encodeURIComponent(story2.q)}/${encodeURIComponent(key)}"> ${key}</a> <br>`
    }
    let htmlQuestion = `${story2.q} <br>`;
    res.send(htmlQuestion + answers)
    console.log(story2.id)
})



app.listen(3000, () => {
    console.log(`listen on port 3000`)
})