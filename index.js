const util = require('util')
const request = util.promisify(require('request'))
const _ = require('lodash')
const express = require('express')
const path = require('path')

const app = express()

const PORT = 3000
const ROOT_DIR = '/client/build'
// const REGEX = /^\/(?:\.html)?$/

// Serve the static files from the React app
app.use(express.json())
app.use(express.static(path.join(__dirname, ROOT_DIR)))

// app.get('/api/test', (req, res) => res.send('Hello World!'))


app.post('/upload/dataset', async (req, res) => {
    console.log('reqBody', req.body)
    try {
        // await getRecipes(req.body.ingredient, req, res)
    } catch (e) {
        logError(e)
        res.status(500).json({errorCode: 500, errorMessage: e.message})
    }
})

// Error handler
app.use(function(req, res) {
    console.error('Unexpected Internal Error')
    res.status(500)
})

app.listen(PORT, err => {
    if (err) console.log(err)
    console.log(`To Test:`)
    console.log(`http://localhost:3000`)
})
