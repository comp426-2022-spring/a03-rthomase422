const express = require('express')
const app = express()

var port = 5000

const server = app.listen(port, () => {
    console.log('App is running on port %PORT%'.replace('%PORT%',port))
});
function coinFlip() {
    return Math.random() > .5 ? ("heads") : ("tails")
}

app.get('/app', (req, res) => {
    res.status(200).end('OK')
    res.type('text/plain')

})
app.get('/app/flip', (req, res) => {
    var flip = coinFlip()
    res.status(200).json({ 'flip' : flip})
})


app.use(function(req, res) {
    res.status(404).end("Endpoint does not exist")
    res.type("text/plain")
})
