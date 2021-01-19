const express = require('express');

const home = express.Router();

home.get('/index',(req,res)=>{
    res.send('index.首页');
})

home.get('/list',(req,res)=>{
    res.send('index.列表页');
})

module.exports = home