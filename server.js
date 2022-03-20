const express = require('express')
const app = express()

var port = 5000

const server = app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})

app.use(function(req, res) {
    res.status(404).end("Endpoint does not exist")
    res.type("text/plain")
})
