import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import mongoData from './mongoData.js'

import fileUpload from 'express-fileupload'

//app config
const app = express()
const port = process.env.port || 8002

app.use(fileUpload());
app.use(express.static("public"));

// const cors = require("cors")
// const io = require("socket.io")(server,{
//     cors:{
//         origin:"*",
//         methods: ["GET" , "POST"]
//     }
// })

const router = express.Router()

//middleware
app.use(express.json())
app.use(cors())

//db config
const mongoURI = 'mongodb+srv://admin:6JqyWWuWcH0aD0u1@cluster0.sqoj2.mongodb.net/vcDB?retryWrites=true&w=majority'

mongoose.connect(mongoURI, {
    useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//api config
app.get('/',(req,res)=>res.status(200).send('hello world'))

app.post('/new/channel', (req,res)=>{
    const dbData = req.body

    mongoData.create(dbData, (err,data) =>{
        if (err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.get('/get/channelList', (req,res)=>{
    mongoData.find((err , data)=>{
        if (err){
            res.status(500).send(err)
        }
        
        else{

            let channels = []

            data.map((channelData)=>{
                const channelInfo ={
                    id: channelData._id,
                    name: channelData.channelName
                }
                channels.push(channelInfo)
            })

            res.status(200).send(channels)
        }
    })
})

app.delete('/channelList',async (req,res) => {
    const channelId = req.query.channelId;
    await mongoData.findOneAndDelete({"_id":channelId})

})

app.post('/new/message', (req,res)=>{

    mongoData.findOneAndUpdate(
        {_id: req.query.id},
        {$push: {conversation: req.body}},
        (err, data)=>{
            if(err){

            console.log("Error saving the message: ")
            console.log(err)

            res.status(500).send(err)

            }  
         else{
            res.status(201).send(data)
        }
        })
})



app.get('/get/data',(req,res)=>{
    mongoData.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.get('/get/conversation', (req,res)=>{

    const id = req.query.id

    mongoData.find({_id:id}, (err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
    
})

app.post('/uploadFile', async (req,res) => {

const userFile = req.files.file
console.log("ok ok",userFile.name)
userFile.mv('public/userFiles/'+userFile.name, function(err){

    if(err){
        res.json({status:"file not uploaded"});
    }

  else  {
    // const userFileName = req.files.userFile.name; 
    mongoData.findOneAndUpdate(
        {_id: req.query.id},
        {$push: {conversation: req.body}},
        (err, data)=>{
            if(err){

            console.log("Error saving the message: ")
            console.log(err)

            res.status(500).send(err)

            }  
         else{
            res.status(201).send(data)
        }
        })
    

    res.json({status:"insertion successfull!"});

        }
    })
})


// io.on('connection', (socket) => {
//     socket.on('join-room', (roomId, userId) => {
//       socket.join(roomId)
//       socket.to(roomId).broadcast.emit('user-connected', userId);
//       // messages
//       socket.on('message', (message) => {
//         //send message to the same room
//         io.to(roomId).emit('createMessage', message)
//       });
  
//       socket.on('disconnect', () => {
//         socket.to(roomId).broadcast.emit('user-disconnected', userId)
//       })
//     })
//   })

//listen
app.listen(port, ()=>console.log(`listening on localhost:${port}`))