const {app} = require('../../../app');
const {User} = require('../../../models') ;

app.get('/api/read/users', async function(req, res){

    let {limit, offset} = req.query;

    let users = await User.findAndCountAll({
        // attributes:[`id`,`name`,`mobile`,`email`]
        attributes:{
            exclude:['createdAt','updatedAt']
        },
        limit:+limit,
        offset:+offset,
    });
    return res.json({rows:users.rows, total:users.count});
});