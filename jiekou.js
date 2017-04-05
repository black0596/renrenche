const express=require('express');
const static=require('express-static');
const mysql=require('mysql');
let server=express();
server.listen(5222);
let db=mysql.createConnection({host:'localhost',user:'root',password:'',database:'last_sql'});
server.get('/sigbup',(req,res)=>{
    "use strict";
    db.query(`SELECT * FROM last WHERE username='${req.query.user}'`,(err,data)=>{
        if(err){
            res.send({error:false,msg:'失败原因'});
            res.end();
        }else{
            if(data.length>0){
                res.send({error:false,msg:'此用户名已存在'});
                res.end();
            }else{
                db.query(`INSERT INTO last VALUES(0,'${req.query.user}','${req.query.pass}',${req.query.age},'${req.query.sex}')`,(err,data)=>{

                    if(err){
                        res.send({error:false,msg:'数据库错误'});
                        res.end();
                    }else{
                        res.send({error:true});
                        res.end();
                    }

                });
            }

        }
    })
});


