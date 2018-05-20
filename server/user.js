var router = require('./router')
var pool = require('./pool')

var {getSingleOneTable, addLine, editLine, removeOneLine} = require('./api')

// 注册/新增用户(phone, name, password)
addLine('/user/add', 'user', 'null, ?, ?, ?, "客户", null, null, null, null', {errMsg: '手机号已经注册过了'})

// 登录(根据用户手机号和密码查找用户信息)
getSingleOneTable('/user/login', '*', 'user', {errMsg: '手机号或密码不正确'}, 'phone,password')

// 根据ID查找用户信息
getSingleOneTable('/user/info/byId', '*', 'user', {errMsg: '没有查到用户信息'}, 'id')

// 根据手机号查找用户信息
getSingleOneTable('/user/info/byPhone', '*', 'user', {errMsg: '没有查到用户信息'}, 'phone')

// 用户自行修改密码
editLine('/user/editPassword', 'user', 'password', 'id')

// 修改用户信息(不包含修改手机号和密码)
editLine('/user/edit', 'user', 'name,age,minesign,artsign,avatar', 'id')

// 删除用户
removeOneLine('/user/remove', 'user', 'id')

module.exports = router