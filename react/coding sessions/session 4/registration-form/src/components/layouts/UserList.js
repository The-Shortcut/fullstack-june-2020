import React from 'react'
import User from './User'

const UserList = ({users}) => {
    console.log(users)
    return (
        <div>
            {users.map( user => <User user={user} />)}
        </div>
    )
}

export default UserList
