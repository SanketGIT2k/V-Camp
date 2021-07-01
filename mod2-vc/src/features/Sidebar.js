import React, { Fragment, useState, useEffect } from 'react'

import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Avatar } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';

import { AnimatePresence } from 'framer-motion';

import SidebarChannel from './SidebarChannel';
import Call from '@material-ui/icons/Call';

import axios from './axios'
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

import {motion} from 'framer-motion'
import {auth, provider} from "../Firebase/firebase";

function Sidebar() {
    const user = useSelector(selectUser)
    const [state, setState] = useState(true)
    const [channels, setChannels] = useState([])

    const getChannels = () =>{  
        axios.get('/get/channelList')
        .then((res)=>{
            setChannels(res.data)
        })
    }

    useEffect(() => {
        getChannels()
    }, [])

    const handleAddChannel = () =>{
        const channelName = prompt("Enter a new channel name");

        if (channelName){
            axios.post('/new/channel',{channelName})
            window.location.reload()
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Channel Name</h3>
                <ExpandMoreIcon/>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header" onClick ={() => setState(!state)}>
                        <ExpandMoreIcon  />
                        
                            
                        <h4>Text Channels</h4>
                        
                    </div>
                    
                    <AddIcon onClick = {handleAddChannel} className="sidebar__addChannel"/>
                    
                </div>
                
                <div className="sidebar__channelsList">

                <AnimatePresence>
                        {state && ( 
                        channels.map((channel, i)=>(
                            <motion.div variants={{
                                hidden: {
                                    y:-50,
                                    opacity: 0
                                },
                                visible: (i) => ({
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: i * 0.1,
                                        
                                    }
                                }),
                                exitHidden:{
                                    y:-50,
                                    opacity:0
                                }
                            }} animate='visible' initial='hidden' exit='exitHidden' custom={i} >
                                    <SidebarChannel key={channel.id} id={channel.id} channel={channel.name}/>
                            </motion.div>
                            
                        ))
                         )}

                         </AnimatePresence>
                    
                </div>
                

            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon className="sidebar__voiceIcon" 
                />

                <div className="sidebar__voiceInfo">
                    <h4>Voice Connected</h4>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>

            </div>

            <div className="sidebar__profile">
                <Avatar onClick={()=>auth.signOut()} src={user.photo} />
                <div className="sidebar__profileInfo">
                    <h4>{user.displayName}</h4>
                    <p>#{user.uid.substring(0,5)}</p>
                </div>

                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>

            </div>
        </div>

        

    )
}

export default Sidebar
