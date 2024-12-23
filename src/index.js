const express =require('express');
const path=require('path')
const dbConnect = require('./config/mongoose');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');


require('dotenv').config();

const app=express();
console.log(process.env.PORT);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// DataBase Connection

// Middlewares
app.use(express.json())

// Routes

app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.get('/',(req,res)=>{
    // res.send('<h1>Welcome to Role Based Access Control Application</h1>')
    res.render('index',{
        title:"Role Based Access"
    })
})

const Port=process.env.PORT || 3000;

app.listen(Port,(req,res)=>{
    console.log(`server is running on port ${Port}`);
    dbConnect();
})