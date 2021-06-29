import React from 'react'
import './Message.css'
import { Avatar } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {selectUser} from "./userSlice"
import {useDispatch , useSelector} from 'react-redux'

import {auth, provider} from "../Firebase/firebase";

function Message({timestamp, message}) {

    const user = useSelector(selectUser)

    return (
        <div className="message" >
            <Avatar src={user.photo}/>
            <div className="message__info">
                <h5>{user.displayName}
                </h5>
                <span className="message__mainmessage">
                   {message}
                </span>
                <span className="message__timestamp"> {new Date(parseInt(timestamp)).toDateString()}</span>

                
                
            </div>

            {/* <DeleteForeverIcon className="delete__message"/> */}

        </div>
    )
}

export default Message
