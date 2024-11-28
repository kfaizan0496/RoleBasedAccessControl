const express =require('express');
const dbConnect = require('./config/mongoose');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
require('dotenv').config();

const app=express();
console.log(process.env.PORT);


// DataBase Connection

// Middlewares
app.use(express.json())

// Routes

app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)


const Port=process.env.PORT || 3000;

app.listen(Port,(req,res)=>{
    console.log(`server is running on port ${Port}`);
    dbConnect();
})