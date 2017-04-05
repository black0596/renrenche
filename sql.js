const express=require('express');
const static=require('express-static');
const mysql=require('mysql');

let server=express();
server.listen(8000);
let db=mysql.createConnection({host:'localhost',user:'root',password:'',database:'mysql'});

server.get('/get',(req,res)=>{
    "use strict";
    db.query('SELECT * FROM first',(err,data)=>{
        if(err){
            res.send({error:false,msg:'出错了'})
        }else{
            res.send({error:true,data:data})
        }
        res.end();
    })
});

server .get('/src',(req , res)=>{
    "use strict";
    db.query('SELECT * FROM SRC',(err,data)=>{
        if(err){
            res.send({error:false,msg:'出错了'})
        }else{
            res.send({error:true,data:data})
        }
        res.end();
    })
});

server.get('/gengd',(req,res)=>{
    "use strict";
   db.query('SELECT * FROM gengd',(err,data)=>{
       if(err){
           res.send({error:false,msg:'数据库加载失败'})
       }else{
           res.send({error:true,data:data})
       }
       res.end();
   })
});
/*banner图*/
server.get('/one_1',(req,res)=>{
    "use strict";
   db.query('SELECT * FROM one_1',(err,data)=>{
       //console.log(data);
       if(err){
           res.send({error:false,msg:'戳错'})
       }else{
           res.send({error:true,data:data})
       }
       res.end();
   })
});
server.get('/one_2',(req,res)=>{
    "use strict";
    db.query('SELECT * FROM one_2',(err,data)=>{
        if(err){
            res.send({error:false,msg:'戳错'})
        }else{
            res.send({error:true,data:data})
        }
        res.end();
    })
});
server.get('/one_3',(req,res)=>{
    "use strict";
    db.query('SELECT * FROM one_3',(err,data)=>{
        if(err){
            res.send({error:false,msg:'戳错'})
        }else{
            res.send({error:true,data:data})
        }
        res.end();
    })
});
server.get('/carList',(req,res)=>{
    "use strict";
    db.query('SELECT * FROM carList',(err,data)=>{
        if(err){
            res.send({error:false,msg:'出错了'})
        }else{
            res.send({error:true,data:data})
        }
        res.end()
    })
});
server.get('/list',(req,res)=>{
    "use strict";
    db.query('SELECT * FROM NewsList',(err,data)=>{
        if(err){
            res.send({error:false,msg:'啦啦啦'})
        }else{
            res.send({error:true,data:data})
        }
        res.end();
    })
});
// 注册
server.get('/sing',(req,res)=>{
    "use strict";
    db.query(`SELECT * FROM sing WHERE user='${req.query.user}'`,(err,data)=>{
        if(err){
            res.send({error:false,msg:'失败原因'});
            res.end();
        }else{
            if(data.length>0){
                res.send({error:false,msg:'用户名已存在'})
            }else{
                db.query(`INSERT INTO user VALUES(0,'${req.query.user}','${req.query.pass}'`,(err,data)=>{
                    if(err){
                        res.send({error:false,msg:'数据库已存在'});
                        res.end();
                    }else{
                        res.send({error:true});
                        res.end();
                    }
                })
            }
        }
    })
});
//登录
server.get('/login',(req,res)=>{
    "use strict";
    db.query(`SELECT * FROM user WHERE username='${req.query.user}'`,(err,data)=>{

        if(err){
            res.send({error:false,msg:'失败原因'});
            res.end();
        }else{

            if(data.length==0){
                res.send({error:false,msg:'用户名或密码错误'});
                res.end();
            }else{
                //只是代表用户名对了！
                if(data[0].password==req.query.pass){
                    res.send({error:true});
                    res.end();

                }else{
                    res.send({error:false,msg:'用户名或密码错误'});
                    res.end();
                }

            }
        }

    })
});
server.use(static('www'));



