const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const socketServer = require('./socketServer')
const authRoutes = require('./routes/authRoutes')

const PORT = process.env.PORT || process.env.API_PORT;

 const app = express();
 app.use(express.json());
 app.use(cors());

 // register routes
 app.use("/api/auth/", authRoutes)

 const server = http.createServer(app);
 socketServer.registerSocketServer(server);


 mongoose.connect(process.env.MONGO_URI).then(()=>{
    server.listen(PORT, ()=>{
        console.log('Server is listening on', PORT)
     });
 }).catch(err => {
    console.log("Database connection failer. Server not started.")
    console.error(err)
 })