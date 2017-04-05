/*
接口：
	注册：
	接口:/sign_up?aaa=xxxx&pass=xxxx&age=xxx&sex=xxx

	{error:true}---成功
	{error:false,msg:'失败的原因'}---失败		

登录：
	接口:/login?user=xxxx&pass=xxxx
	
	{error:true}---成功
	{error:false,msg:'失败的原因'}---失败	


*/


const express=require('express');
const static=require('express-static');
const mysql=require('mysql');

let db=mysql.createConnection({host:'localhost',user:'root',password:'',database:'20170228'});

let server=express();

server.listen(8888);

//注册
server.get('/signup',(req,res)=>{//req.query
	db.query(`SELECT * FROM user_tab WHERE username='${req.query.user}'`,(err,data)=>{
		if(err){
			res.send({error:false,msg:'失败原因'});	
			res.end();	
		}else{
			if(data.length>0){
				res.send({error:false,msg:'此用户名已存在'});	
				res.end();
			}else{
				db.query(`INSERT INTO user_tab VALUES(0,'${req.query.user}','${req.query.pass}',${req.query.age},'${req.query.sex}')`,(err,data)=>{
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

//登录
server.get('/login',(req,res)=>{
		
	db.query(`SELECT * FROM user_tab WHERE username='${req.query.user}'`,(err,data)=>{
		
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
		
})

server.use(static('www'));















