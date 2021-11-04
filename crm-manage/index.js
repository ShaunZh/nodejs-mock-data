/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-04 11:39:34
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-04 18:32:57
 */

const Router = require('koa-router');
const Mock = require('mockjs')

const router = new Router()

// 发布任务-列表
router.post('/publish/task/list.rjson', (ctx, next) => {
  console.log('ctx', ctx)
  const body = ctx.request.body
  const list = Mock.mock({
    'list|1-10': [{
      created: "@datetime",
      'grayStatus|0-1': 1,
      id: '@guid',
      modified: "@datetime",
      operatorId: "@guid",
      operatorName: "@cname",
      publishTitle: "@ctitle",
      relevantBackEnd: "@cname",
      relevantFrontEnd: "@cname",
      relevantProduct: "@cname",
      relevantTest: "@cname"
    }]
  })
  ctx.body = {
    data: {
      count: list.list.length + 10,
      list: list.list,
    },
    result: 200,
    success: true
  }
  console.log('/publish/task/list.rjson: ', body, ctx.body)
  next()
})

// 发布任务-删除任务
router.post('/publish/task/del.rjson', (ctx, next) => {
  ctx.body = {
    result: 200,
    success: true
  }
  next()
})

// 新增发布任务
router.post('/publish/task/add.rjson', (ctx, next) => {
  ctx.body = {
    result: 200,
    success: true
  }
  next()
})

// 编辑发布任务
router.post('/publish/task/upd.rjson', (ctx, next) => {
  ctx.body = {
    result: 200,
    success: true
  }
  next()
})



// 预发布模块 - 列表
router.post('/preview/publish/list.rjson', (ctx, next) => {
  console.log('ctx', ctx)
  const body = ctx.request.body
  const list = Mock.mock({
    'list|10-30': [{
      corpId: '@guid',
      corpName: '@ctitle',
      created: "@datetime",
      id: '@guid',
      modified: "@datetime",
      operatorId: "@guid",
      operatorName: "@cname",
      'publishBatch|1-10': 1,
      publishTaskId: '@guid',
      'publishType|0-1': 0
    }]
  })
  ctx.body = {
    data: {
      count: list.list.length + 10,
      list: list.list,
    },
    result: 200,
    success: true
  }
  console.log('/preview/publish/list.rjson: ', body, ctx.body)
  next()
})

// 预发布模块 - 删除
router.post('/preview/publish/del.rjson', (ctx, next) => {
  ctx.body = {
    result: 200,
    success: true
  }
  next()
})

// 预发布模块 - 新增
router.post('/preview/publish/add.rjson', (ctx, next) => {
  ctx.body = {
    result: 200,
    success: true
  }
  next()
})

module.exports = router