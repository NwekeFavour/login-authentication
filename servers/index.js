const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, '../dist')))
app.use(bodyParser.json())
const port = process.env.PORT || 5000

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.get('/', (req, res) => {
    res.json({ message: "welcome to backend"})
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})