import React from 'react'

const User = ({user}) => {
    return (
        <div style={styles.container}>
            <p>{user.firstName} {user.position}</p>
        </div>
    )
}

const styles = {
    container:{
        border:'1px solid darkgreen',
        borderRadius:'20px',
        magin:'10px auto',
        padding:'5px',
        maxWidth:'400px',
    }
}

export default User
