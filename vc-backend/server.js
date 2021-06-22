import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import mongoData from './mongoData.js'

//app config
const app = express()
const port = process.env.port || 8002

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

//listen
app.listen(port, ()=>console.log(`listening on localhost:${port}`))