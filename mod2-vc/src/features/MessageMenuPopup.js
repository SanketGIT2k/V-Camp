import React from 'react'
import { useSelector } from 'react-redux';

import {Link} from 'react-router-dom'

import './MessageMenuPopup.css'

import axios from './axios'

import { AnimatePresence, motion } from 'framer-motion';

function MessageMenuPopup({id}) {

    const channelDelete = (channelId) =>{
        
        axios.delete(`/channelList/?channelId=${channelId.channelId}`)
        window.location.reload()
        console.log(channelId)
        console.log(channelId.channelId)
    }


    return (
        <AnimatePresence>
        <motion.div variants={{
                                hidden: {
                                    x:-50,
                                    opacity: 0
                                },
                                visible: () => ({
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay:  0.1,
                                    }
                                }),
                                removed:{
                                    opacity:0
                                }
                            }} animate='visible' initial='hidden' exit='removed' className="channel-menu-popup" id = "popup">

            {/* <Link to='' onClick = {() =>{channelRename({channelId})}} >Rename Channel</Link> */}

            <Link to='' onClick = {() =>{channelDelete({channelId})}} >Delete Channel</Link>
            
        </motion.div>
        </AnimatePresence>
    )
}

export default MessageMenuPopup
