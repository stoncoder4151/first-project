const {app} = require('../../app')
const apiPath = require('easy-api-path');
app.get(apiPath(__filename), function(req, res){
    res.render('bs-table');
});