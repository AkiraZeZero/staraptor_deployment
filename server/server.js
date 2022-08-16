const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.static('client'))
app.use('/js', express.static(path.join(__dirname, 'client/main.js')))


app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../client/index.html`))
} )

app.get(`/js`, (req, res) => {
    res.sendFile(path.join(__dirname, `../client/main.js`))
})


const port = process.env.PORT || 4000


app.listen(port,console.log("Server running on 4000"))