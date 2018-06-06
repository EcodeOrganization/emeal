var router = require('./router')
var pool = require('./pool')

var {getSingleOneTable, addLine, editLine, removeOneLine} = require('./api')

// 根据排序类型以及升降序查找菜单列表
router.get('/menu/list/:type/:order', (req, res) => {
	var sql = `select * from menu order by ${req.params.type} ${req.params.order}`
	pool.getConnection(function(err, connection) {
		connection.query(sql, (err, data) => {
			if (err) {
				res.status(500).send(err)
			} else {
				res.send(data)
				console.log(data)
			}
			connection.release()
		})
	})
})

// 根据菜单ID查找菜单详情
getSingleOneTable('/menu/info', '*', 'menu', {errMsg: '没有查到菜单详情'}, 'id')

// 根据菜单名模糊查询菜单列表
router.get('/menu/list/like/:type/:order', (req, res) => {
	var sql = `select * from menu where name like "%${req.query.name}%" order by ${req.params.type} ${req.params.order}`
	pool.getConnection((err, connection) => {
		connection.query(sql, (err, data) => {
			if (err) {
				console.log(err)
				res.status(500).send(err)
			} else {
				console.log(data)
				res.send(data)
			}
			connection.release()
		})
	})
})


module.exports = router