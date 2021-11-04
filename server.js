/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-04 11:18:41
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-04 11:20:22
 */

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);