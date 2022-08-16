//api后端服务的单点入口文件
const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');
const mainRouter = require('./routers/index')
// const crossDomain = require('./middleware/cross-domain') //支持跨域

app.use(cors())
app.use(mainRouter)
// app.use(crossDomain)

app.listen(3300,()=>{
    console.log("Your app is running");
});