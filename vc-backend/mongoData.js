import mongoose from 'mongoose'

const vcSchema = mongoose.Schema({
    channelName: String,

    user: [
        {
        userName: String,
        userEmail: String,
        userFiles: [
                    {
                        fileName: String,
                    }
                 ]
        
        }
    ],

    conversation: [
        {
            message: String,
            timestamp: String,
            user:{
                displayName: String,
                email: String,
                photo: String,
                uid: String
            }
        }
    ]
})


export default mongoose.model('conversations', vcSchema)