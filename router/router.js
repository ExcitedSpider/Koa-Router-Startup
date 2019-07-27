var Router = require('koa-router');
var router = new Router();
var homeRoutes = require('./home/home-router');

router.use('/home', homeRoutes.routes())

module.exports = router