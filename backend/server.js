const express = require('express');
const notes=require('./data/notes');
const dotenv = require('dotenv')
const app=express();
const connectDB=require('./config/db')
const userRoutes=require('./routes/userRoutes')
const{notfound,errorHandler} = require("./Middleware/errorMiddleware")
dotenv.config();
connectDB();
app.use(express.json());
app.get('/',(req,res) => {
    res.send("API IS WORKING....")
});
app.get('/api/notes',(req,res) => {
    res.json(notes);
})

app.use('/api/users',userRoutes)
app.use(notfound)
app.use(errorHandler)
app.listen(5000,console.log("Server Started on PORT 5000"));
