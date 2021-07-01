import { useState, useEffect } from 'react'
import './DisplayIntHeader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import AddIcon from '@material-ui/icons/Add';

import {firebaseApp} from '../Firebase/firebase'
import db from '../Firebase/firebase'

import axios from './axios';
import axioss from 'axios';

import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import { setUseProxies } from 'immer';

function DisplayIntHeader({channelName}) {
    const user = useSelector(selectUser)

    const [Files , setFiles] = useState({file:"",})
    const [userDb, serUserDb] = useState([])

    const {file} = Files

    const [fileUrl, setFileUrl] = useState(null)

    const onFileChange = async (e) =>{
        const file = e.target.files[0]
        const storageRef = firebaseApp.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileUrl (await fileRef.getDownloadURL()) 
            
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const username = user.displayName
        console.log(username)

        db.collection("users").doc(username).set({
            name:username,
            avatar: fileUrl
        })
    }

    useEffect (() =>{
        const fetchUsers = async () => {
            const usersCollection = await db.collection('users').get()
            setUseProxies(usersCollection.docs.map(doc =>{
                return doc.data()
            }))
        }
    }, [])

    const handleFileUpload = (e) =>{


        setFiles({
            ...Files, 
            file: e.target.files[0],

        })
        handleFileToDatabase(e)
    }

    const handleFileToDatabase = (e) =>{
        e.preventDefault()
        console.log(file)
        var formData = new FormData()
        formData.append("file",file)

        const request_config = {
            method: "post",
            url: "http://localhost:8002/uploadFile",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: formData
          }
          axioss(request_config)

    }

    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    {channelName}
                </h3>
            </div>

            <div className="chatHeader__right">
                <div onChange={onSubmit}>
                    <input onChange={onFileChange} className="insert__files" id="act-btn" type="file" hidden name="file"/>
                    <label for="act-btn"  > <AddIcon  className="add__file"/> </label>
                </div>
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />

                <div className="chatHeader__search">
                    <input placeholder = "Search" />
                    <SearchRoundedIcon />
                </div>

                <SendRoundedIcon />
                <HelpRoundedIcon />

            </div>

        </div>
    )
}

export default DisplayIntHeader
