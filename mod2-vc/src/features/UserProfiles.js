import React from 'react'
import Card from './Card'

function UserProfiles({username, userdescription, userimage}) {
    return (
        <div className="userprofile__main">
                <h2>Users</h2>
            <div className= "userprofile__admin">
                <h4>Admins</h4>
                <Card />

            </div>

            <div className= "userprofile__participants">
                <h4>Participants</h4>
                <Card />

            </div>

            
        </div>
    )
}

export default UserProfiles
