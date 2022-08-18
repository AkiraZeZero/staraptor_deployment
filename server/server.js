const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.static('client'))
app.use('/js', express.static(path.join(__dirname, 'client/main.js')))
app.use(`/css`, express.static(path.join(__dirname, 'client/style.css')))

app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../client/index.html`))
} )

app.get(`/js`, (req, res) => {
    res.sendFile(path.join(__dirname, `../client/main.js`))
})

app.get(`/css`, (req, res) => {
    res.sendFile(path.join(__dirname, `../client/style.css`))
})

app.get(`/complimentBtn`, (req, res) => {
    const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
    res.status(200).send(randomCompliment);
    
})

const port = process.env.PORT || 4005


app.listen(port,console.log("Server running on 4005"))