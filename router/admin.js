const express = require('express');
const admin = express.Router();
// 登录接口
admin.get('/login',(req,res)=>{
    // req.query.userName 获取前端传递的query参数
    // req.body.参数名称   获取前端传递的body参数
    res.send({
        state: 'success',
        data: req.query.userName     
    });
})
// 获取系统用户接口
admin.get('/list',(req,res)=>{
    res.send('admin用户列表页');
})

module.exports = admin;



