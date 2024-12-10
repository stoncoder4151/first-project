const {app} = require('../app')
const {User} = require('../models');
app.get('/', async function(req, res){
    let users = await User.findAll();
    res.render('bs-table', {users});

    // res.render('users-csr');
});