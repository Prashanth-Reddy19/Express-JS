const express=require('express');
const fs=require('fs')

const app=express();

const bodyParser=require('body-parser')


app.use(bodyParser.urlencoded({extended:false}))


app.get("/",(req,res,next) => {
    fs.readFile('username.txt',(err,data) =>{
        if(err){
            console.log(err)
            data='No Chat Exists'
        }
        res.send
        (`${data} <form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
    <input type="text" name="message" id="message">
    <input type="hidden" name="username" id="username">
    <br>
    <button type="Submit">Send</button>
    </form>
    `)
    })
    
})

app.post("/",(req,res,next) => {
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{
        err ? console.log(err) : res.redirect("/")
    })
})

app.get("/login",(req,res,next) => {
    res.send(`<form action="/login" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
    <input type="text" name="username" id="username">
    
    <br>
    <button type="Submit">Login</button>
    </form>
    `)
})

app.post("/login",(req,res) => {
    res.redirect("/")
})



app.listen(3000);