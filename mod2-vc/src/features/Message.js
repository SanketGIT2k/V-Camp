import React from 'react'
import './Message.css'
import { Avatar } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Message({timestamp, user, message}) {
    return (
        <div className="message" >
            <Avatar />
            <div className="message__info">
                <h4>{console.log(user)}
                <span className="message__mainmessage">
                   {message}
                </span>
                </h4>
                
                <span className="message__timestamp"> {new Date(parseInt(timestamp)).toDateString()}</span>

                
                
            </div>

            {/* <DeleteForeverIcon className="delete__message"/> */}

        </div>
    )
}

export default Message
