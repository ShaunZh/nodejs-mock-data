/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-04 11:39:34
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-04 13:44:31
 */

const Router = require('koa-router');

const crmManageRouter = new Router({
  prefix: '/crm-manage'
})

crmManageRouter.post('/publish/task/list.rjson', (ctx, next) => {
  console.log('ctx', ctx)
  const body = ctx.request.body
  ctx.body = {
    data: {
      count: 10,
      list: [
        {
          created: new Date(),
          id: 'sdsd'
        }
      ]
    }
  }
  console.log('/publish/task/list.rjson: ', body)
  next()
})


module.exports = crmManageRouter