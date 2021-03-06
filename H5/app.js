//使用express构建web服务器
const express = require('express');
const bodyParser = require('body-parser');
//引入路由模块

var app = express();
var server=app.listen(8080,()=>{
    console.log("服务器创建成功！")
});

//使用body-paser中间件
app.use(bodyParser.urlencoded({extrnded:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
//使用路由器来管理路由