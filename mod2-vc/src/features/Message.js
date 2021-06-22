import React from 'react'
import './Message.css'
import { Avatar } from '@material-ui/core';

function Message({timestamp, user, Message}) {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>{console.log(user)}
                <span className="message__timestamp">
                    {Message}
                </span>
                </h4>
                
                <span className="message-timestamp"> {new Date(parseInt(timestamp)).toDateString()}</span>

            </div>
        </div>
    )
}

export default Message
