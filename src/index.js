const {app} = require('./app');
const requireDir = require('require-dir');

requireDir('./controllers', {recurse:true});

app.listen(3000, function(){
	console.log('SERVER RUNNING ON: http://localhost:3000/');
});