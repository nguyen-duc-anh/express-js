const shortid = require('shortid')
const db = require('../db')

module.exports.index = (req, res) => {
    res.render('users/index', {
        users: db.get('users').value() 
    })
}

module.exports.create = (req, res) => {
    res.render('users/create')
}

module.exports.search =  (req, res) => {
    let q = req.query.q;
    let matchedUser = db.get('users').value().filter((user) => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    })
   
    res.render('users/index', {
        users: matchedUser
    })
}

module.exports.view = (req, res) => {
    let id = req.params.id
    let user = db.get('users').find({ id: id }).value()
    
    console.log(user)

    res.render('users/view', {
        user: user
    })
}

module.exports.postCreate = (req, res) => {
    let id = shortid.generate();
    db.get('users').push({ 
        id: id, 
        name: req.body.name, 
        phone: req.body.phone, 
        address: req.body.address })
        .write()
    res.redirect('/users')
}