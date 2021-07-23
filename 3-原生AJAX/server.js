/*
json服务启动:json-server --watch db.json
node启动:node server.js
nodemon启动:nodemon server.js
网页：[127.0.0.1:8000]*/
// 1 引入express
const express = require('express')

//2 创建应用对象
const app = express()

//3 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    //设置响应体
    response.send('hello ajax get')
})

app.get('/ie', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    //设置响应体
    response.send('hello ie -2')
})

app.get('/delay', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    setTimeout(()=>{
        response.send('延时响应')
    },3000)

})

//all 可以接受任意类型的请求
app.all('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    //设置响应体
    response.send('hello ajax post')
})

app.all('/json-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    //响应一个数据
    const data = {
        name:'Icrani'
    }
    //对对象进行字符串传唤
    let str = JSON.stringify(data)

    //设置响应体
    response.send(str)
})

//axios服务
app.all('/axios-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    const data = {
        name:'Icrani'
    }
    //对对象进行字符串传唤
    let str = JSON.stringify(data)

    //设置响应体
    response.send(str)
})

//fetch服务
app.all('/fetch-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    const data = {
        name:'Icrani'
    }
    //对对象进行字符串传唤
    let str = JSON.stringify(data)

    //设置响应体
    response.send(str)
})




//jsonp服务
app.all('/jsonp-server',(request,response)=>{
    // response.send('console.log("hello jsonp-server")')
    const data = {
        name:'尚硅谷icrani'
    }
    //将数据转化为字符串
    let str = JSON.stringify(data)
    //返回结果
    response.end(`handle(${str})`)
})


//用户名检测是否存在
app.all('check-username',(request,response)=>{
    const data = {
        exist:1,
        msg:'用户名已存在'
    }
    let str = JSON.stringify(data)

    response.end(`handle(${str})`)
})





//4 监听端口启动服务
app.listen(8000, () => {
    console.log("服务已启动，8000端口监听中.....")
})
