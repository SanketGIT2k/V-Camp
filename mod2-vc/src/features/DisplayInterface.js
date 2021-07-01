import React , {useState, useEffect} from 'react'
import './DisplayInterface.css'
import DisplayIntHeader from './DisplayIntHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { selectUser } from './userSlice';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './appSlice';
import axios from './axios';

import {AnimatePresence, motion} from 'framer-motion'

function DisplayInterface() {

    const user = useSelector(selectUser)
    const channelId = useSelector (selectChannelId)
    const channelName = useSelector (selectChannelName)
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])


    const getConversation = (channelId) =>{
        if (channelId){
            axios.get(`/get/conversation?id=${channelId}`).then((res)=>{
                setMessages(res.data[0].conversation)

            })
        } 
    }

    console.log(user)

    useEffect (() =>{
        getConversation(channelId)
    },[channelId])

    const sendMessage = (e) => {
        e.preventDefault()

        axios.post(`/new/message?id=${channelId}`,{
            message: input,
            timestamp: Date.now(),
            user: user
        })
        setInput('')
        getConversation(channelId)
    }

    return (
        <div className='chat'>
            <DisplayIntHeader channelName={channelName} />

            <AnimatePresence>

            <div className="chat__messages">
               { messages.map((message) => {
                   return(
                       <motion.div animate={{opacity:1}} initial={{opacity:0}}>
                            <Message
                                timestamp={message.timestamp}
                                message={message.message}
                                user={message.user} />
                        </motion.div>
               )
               
                })}
                
            </div>
            
            </AnimatePresence>

            <div className="chat__input">
                <AddCircleIcon  />


                <form>
                    <input value={input} disabled={!channelId} onChange = {(e) => setInput(e.target.value)} placeholder={`Message # ${channelName}`} />
                    <button disabled={!channelId} className='chat__inputButton' type='submit' onClick={sendMessage}>
                        Send Message
                    </button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />

                </div>
            </div>

        </div>
    )
}

export default DisplayInterface
