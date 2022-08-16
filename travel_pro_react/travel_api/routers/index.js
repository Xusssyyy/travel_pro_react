const router = require('koa-router')() 
const getcityData = require('../data/getcity')
const gethotrecommendData = require('../data/gethotrecommend')
const gethotlistData = require('../data/gethotlist')

router.get('/getcity',async(ctx)=>{
    ctx.body = getcityData
})

router.get('/gethotrecommend',async(ctx)=>{
    ctx.body = gethotrecommendData
})

router.get('/gethotlist',async(ctx)=>{
    ctx.body = gethotlistData
})


module.exports = router.routes()