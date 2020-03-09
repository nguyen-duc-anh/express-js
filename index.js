const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/user.route')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/users', userRoute)
app.use(express.static('public'))

// home-page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'nguyen-duc-anh'
    })
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})