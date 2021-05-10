const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');
const pool = mysql.createPool({
    host: dbConfig.mysql.host,
    user: dbConfig.mysql.user,
    password: dbConfig.mysql.password,
    database: dbConfig.mysql.database,
    port: dbConfig.mysql.port,
    multipleStatements: true    // 多語句查詢
});
// set UTF8
pool.getConnection((err, connection) => {

    var sql = "alter database uidd2021_groupH character set utf8;"
    var sql2 = "SET NAMES 'utf8'";

    var sql3="drop tables reservation";
    connection.query(sql, function (err, result) {
        if (err) throw err;
    });

    connection.query(sql2, function (err, result) {
        if (err) throw err;
    });
    /*
    connection.query(sql3, function (err, result) {
        if (err) throw err;
    });
    */
    
    connection.release();
})
//  check whether the tables are exist , if not create it

pool.getConnection((err, connection) => {

    if (err) throw err;
    var sql = "SHOW TABLES LIKE 'user'"
    var sql2 = "CREATE TABLE user (id VARCHAR(20), password VARCHAR(20) , name VARCHAR(20) , DepartmentLevel VARCHAR(20) )";

    var sql3 = "SHOW TABLES LIKE 'reservation'"
    var sql4 = "CREATE TABLE reservation (Year INTEGER , months INTEGER , day INTEGER , time INTEGER , user_id VARCHAR(20) , teacher VARCHAR(20) )";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql2, function (err, result) {
                if (err) throw err;
                console.log("table of user created");
            })
        }
    });
    connection.query(sql3, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql4, function (err, result) {
                if (err) throw err;
                console.log("table of reservation created");
            })
        }
        else {
            console.log("Table of reservation exists");
        }
    });
    connection.release();
})

//  check whether the table has data , if not add it
pool.getConnection((err, connection) => {

    var sql = "select * from user"
    var sql2 = "insert into user(id,password,name,DepartmentLevel) values(?,?,?,?)";

    var sql3 = "select * from reservation"
    var sql4 = "insert into reservation(Year,months,day,time,user_id,teacher) values(?,?,?,?,?,?)"

    var id = "F74072120";
    var password = "f74072120";
    var name = "彭皓瑜"
    var DepartmentLevel = "資訊系 大三";

    var year = 2021;
    var months = 5;
    var user_id = "";
    var teacher = "";

    // add user information
    connection.query(sql, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            connection.query(sql2, [id, password, name, DepartmentLevel], function (err, result) {
                if (err) throw err;
                console.log("add user");
            })
        }
    });
    connection.query(sql3, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            for (i = 1; i <= 31; i++) {
                for (j = 9; j <= 17; j++) {
                    connection.query(sql4, [year, months, i, j, user_id, teacher], function (err, result) {
                        if (err) throw err;
                    })
                }
            }
        }
        else{
            console.log("the table has been established");
        }
    });
    connection.release();
})

/*
//  check whether the reservation table has user data , if not add it
pool.getConnection((err, connection) => {

    var sql = "select * from reservation where user_id=?";
    var sql2 = "update reservation set user_id=?, teacher=? where  Year=? and months=? and day=?  AND time=?";
    var year = 2021;
    var months = 5;
    var day1 = 1;
    var time1 = 14;
    var day2 = 15;
    var time2 = 13;
    var user_id = "F74072120";
    var teacher = "teacher1"
    
    connection.query(sql2, [user_id, teacher, year, months, day1, time1], function (err, result) {
        if (err) throw err;
    });
    connection.query(sql2, [user_id, teacher, year, months, day2, time2], function (err, result) {
        if (err) throw err;
    });
    
    
    // add user information
    connection.query(sql, [user_id], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
            console.log(result);
        }
    });
    

    connection.release();
})
*/

module.exports = {

    login(req, res, next) {

        var id = req.body.id;
        var password = req.body.password;
        pool.getConnection((err, connection) => {
            var sql = sqlMap.login;
            connection.query(sql, [id], (err, result) => {

                if (result.length == 0) {
                    res.send("無此帳號")
                }
                else {
                    if (password != result[0].password) {
                        res.send("密碼錯誤")
                    }
                    else {
                        res.send("success")
                    }
                }
                connection.release();
            })
        })
    },
    register(req, res, next) {

        var id = req.body.id;
        var password = req.body.password;
        pool.getConnection((err, connection) => {
            var sql = sqlMap.register;
            connection.query(sql, [id, password], (err, result) => {
                connection.release();
            })
        })
    },
    getValue(req, res, next) {
        var id = req.query.id;
        pool.getConnection((err, connection) => {
            var sql = sqlMap.getValue;
            connection.query(sql, [id], (err, result) => {
                res.json(result);
                connection.release();
            })
        })
    },
    setValue(req, res, next) {
        console.log(req.body);
        var id = req.body.id, name = req.body.name;
        console.log(id);
    }
}