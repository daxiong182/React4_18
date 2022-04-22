const express=require('express')
const app=express()

app.use((req,res,next)=>{
    console.log('有人请求服务器1了');
    next()
})

app.get('/students',(req,res)=>{
    const cars=[
        {id:'001',name:'tom',age:18},
        {id:'002',name:'jerry',age:19},
        {id:'003',name:'tony',age:120},
    ]
    res.send(cars)
})

app.listen(5000,err=>{
    if(!err) console.log('服务器1启动成功了');
})







