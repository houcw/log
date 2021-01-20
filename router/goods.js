const express = require('express');

const goods = express.Router();

goods.get('/goodslist',(req,res)=>{
    res.send('goodslist列表');
})


module.exports = goods