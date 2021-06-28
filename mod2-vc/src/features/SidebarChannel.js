import React , {useState} from 'react'
import "./SidebarChannel.css"
import {useDispatch} from 'react-redux'
import {setChannelInput} from '../features/appSlice'

import ChannelMenuPopup from './ChannelMenuPopup' 


function SidebarChannel({id, channel}) {
    const dispatch = useDispatch();

    const [popUpMenu, setPopUpMenu] = React.useState(false);

    return (
        <div className="sidebarChannel"  onClick={() => dispatch(setChannelInput({channelId: id, channelName: channel}))}>
            <div>

            <h5>
                <a onClick={() => setPopUpMenu(!popUpMenu)} className= "sidebar-channel">
                    <span className='sidebarChannel__hash'>#</span>
                    {channel}
                </a>
            </h5>
            </div>
            

            <div>
                {popUpMenu && (
                    <ChannelMenuPopup channel={id} />
                )}
            </div>

        </div>
    )
}

export default SidebarChannel
