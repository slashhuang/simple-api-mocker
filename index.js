/*
 * @Author slashhuang
 * 17/5/26
 */
const webHookUrl = 'https://oapi.dingtalk.com/robot/send?access_token=41abd5415cb5c7b6da2c2dc69b675eecfe49cad7437a9f157acdec2a27b5b1a2';
const PORT = 3000;
const Koa = require('koa');
const app = new Koa();
const routerMiddleware = require('./src').router;
app.use(routerMiddleware);
app.listen(PORT, ()=>{
	console.log(`server listening on port ${PORT}`)
});