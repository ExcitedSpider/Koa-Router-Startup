var Koa = require('koa');
let router = require('./router/router')
let config = require('./config/config')
 
var app = new Koa();
 
app.use(router.routes()).use(router.allowedMethods());

app.listen(config.PORT)
console.log(`app runs in: http://localhost:${config.PORT}`)