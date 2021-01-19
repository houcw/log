const express = require('express');

const admin = express.Router();


admin.get('/list',(req,res)=>{
    res.send('admin用户列表页');
})
admin.get('/login',(req,res)=>{
    // req.query.userName 获取前端传递的query参数
    // req.body.参数名称   获取前端传递的body参数
    res.send({
        state: 'success',
        data: req.query.userName     
    });
    return
})

module.exports = admin;



