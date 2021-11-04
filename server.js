/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-04 11:18:41
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-04 13:46:05
 */

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors')

const crmManageRouter = require('./crm-manage/')

const app = new Koa();
const router = new Router();


router.get('/index', (ctx) => {
  ctx.body = 'hello'
})

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(crmManageRouter.routes())

app.listen(3000);