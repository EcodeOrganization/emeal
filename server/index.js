var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())

// 用户
var user = require('./user')
app.use(user)
// 菜单
var menu = require('./menu')
app.use(menu)
// 购物车
var shop = require('./shop')
app.use(shop)
// 收藏
var collect = require('./collect')
app.use(collect)
// 订单
var order = require('./order')
app.use(order)
// 评论
var rate = require('./rate')
app.use(rate)

var server = app.listen(9000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})


