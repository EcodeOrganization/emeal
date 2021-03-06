var router = require('./router.js')
var pool = require('./pool.js')
// get
// 从一张表获取列表 url：路径  colume：字段名   table：表  query：传参
function getListOneTable(url, colume, table, query, errMsg, type) {
    router.get(url, (req, res) => {
        var sql = `select ${colume} from ${table}`
        if (query) {
            var queryArr = query.split(',')
            console.log(queryArr)
            for (var i = 0; i < queryArr.length; i ++) {
                console.log(i)
                if (i === 0) {
                    sql = `${sql} where ${queryArr[i]}='${req.query[queryArr[i]]}'`
                } else {
                    sql = `${sql} and ${queryArr[i]}='${req.query[queryArr[i]]}'`
                }
            }
        }
        console.log(sql)
        pool.getConnection(function(err, connection) {
            connection.query(sql, (err, data) => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    if (type) {
                        data.length? res.send(data[0]) : errMsg? res.status(500).send(errMsg) : res.status(500).send({errMsg: '数据不存在'})
                    } else {
                        console.log(data)
                        res.send(data)
                    }
                }
                connection.release();
            })
        })
    })
}

// 从一张表获取单个数据 url：路径  colume：字段名   table：表 errMsg：错误信息  query：传参
function getSingleOneTable(url, colume, table, errMsg, query) {
    router.get(url, (req, res) => {
        var sql = `select ${colume} from ${table}`
        if (query) {
            var queryArr = query.split(',')
            console.log(queryArr)
            for (var i = 0; i < queryArr.length; i ++) {
                console.log(i)
                if (i === 0) {
                    sql = `${sql} where ${queryArr[i]}='${req.query[queryArr[i]]}'`
                } else {
                    sql = `${sql} and ${queryArr[i]}='${req.query[queryArr[i]]}'`
                }
            }
        }
        console.log(sql)
        pool.getConnection(function(err, connection) {
            connection.query(sql, (err, data) => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    if (data.length) {
                        console.log(data[0])
                        res.send(data[0])
                    } else {
                        errMsg? res.status(500).send(errMsg) : res.status(500).send({errMsg: '没有查到相关数据'})
                    }
                }
                connection.release();
            })
        })
    })
}

// post
function addLine(url, table, body, errMsg) {
    router.post(url, (req, res) => {
        var sql = `insert into ${table} values(${body})`
        var bodyArr = []
        for (var k in req.body) {
            bodyArr.push(req.body[k])
        }
        pool.getConnection(function(err, connection) {
            connection.query(sql, bodyArr, (err, data) => {
                if (err) {
                    console.log(err)
                    errMsg? res.status(500).send(errMsg) : res.status(500).send(err)
                } else {
                    console.log(data)
                    res.send(data)
                }
                connection.release();
            })
        })
    })
}
// put
function editLine(url, table, body, colume, errMsg) {
    router.put(url, (req, res) => {
        var queryArr = body.split(',')
        queryArr.forEach(item => {
            item = item + '=?'
        })
        var paramsArr = colume.split(',')
        var params
        paramsArr.forEach((item, index) => {
            if (index === 0) {
                params = item + '=?'
            } else {
                params = `${params}, ${item}=?`
            }
        })
        var sql = `update ${table} set ${String(queryArr)} where ${params}`
        var bodyArr = []
        for (var k in req.body) {
            bodyArr.push(req.body[k])
        }
        console.log(sql)
        pool.getConnection(function(err, connection) {
            connection.query(sql, bodyArr, (err, data) => {
                if (err) {
                    errMsg? res.status(500).send(errMsg) : res.status(500).send(err)
                } else {
                    console.log(data)
                    res.send(data)
                }
                connection.release();
            })
        })
    })
}
// delete
function removeOneLine(url, table, query, errMsg) {
    router.delete(url, (req, res) => {
        var sql = `delete from ${table} where`
        var queryArr = query.split(',')
        console.log(queryArr)
        for (var i = 0; i < queryArr.length; i ++) {
            console.log(i)
            if (i === 0) {
                sql = `${sql} where ${queryArr[i]}='${req.query[queryArr[i]]}'`
            } else {
                sql = `${sql} and ${queryArr[i]}='${req.query[queryArr[i]]}'`
            }
        }
        console.log(sql)
        pool.getConnection(function(err, connection) {
            connection.query(sql, bodyArr, (err, data) => {
                if (err) {
                    errMsg? res.status(500).send(errMsg) : res.status(500).send(err)
                } else {
                    console.log(data)
                    res.send(data)
                }
                connection.release();
            })
        })
    })
}

module.exports = {getListOneTable, getSingleOneTable, addLine, editLine, removeOneLine}