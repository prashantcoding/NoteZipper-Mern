const express = require('express');
const notes=require('./data/notes');
const dotenv = require('dotenv')
const app=express();
const connectDB=require('./config/db')
const userRoutes=require('./routes/userRoutes')
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
app.listen(5000,console.log("Server Started on PORT 5000"));
