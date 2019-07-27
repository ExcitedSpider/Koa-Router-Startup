let Router = require('koa-router');
let router = new Router();

let Controller = require('../../controller/home/home-controller')

router.get('/welcome', Controller.welcome);

module.exports = router