const express=require('express')
const app=express()

app.use((req,res,next)=>{
    console.log('有人请求服务器2了');
    next()
})

app.get('/cars',(req,res)=>{
    const cars=[
        {id:'001',name:'奔驰',price:199},
        {id:'002',name:'宝马',price:109},
        {id:'003',name:'捷达',price:110},
    ]
    res.send(cars)
})

app.listen(5001,err=>{
    if(!err) console.log('服务器2启动成功了');
})







