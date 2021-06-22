import React from 'react'
import "./SidebarChannel.css"
import {useDispatch} from 'react-redux'
import {setChannelInput} from '../features/appSlice'


function SidebarChannel({id, channel}) {
    const dispatch = useDispatch();

    return (
        <div className="sidebarChannel" onClick={() => dispatch(setChannelInput({channelId: id, channelName: channel}))}>
            <h4>
                <span className='sidebarChannel__hash'>#</span>
                {channel}
            </h4>
        </div>
    )
}

export default SidebarChannel
