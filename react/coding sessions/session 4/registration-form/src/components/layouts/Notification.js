import React from 'react'

const Notification = ({notification}) => {
    const { msg, err } = notification
    if(!msg){
        return null
    }
    return (
        <div style={err ? styles.error : styles.success}>
            {msg}
        </div>
    )
}

const styles = {
    error:{
        color:'darkred',
        border:'1px solid darkred',
        borderRadius:'20px',
        magin:'10px auto',
        padding:'10px',
        maxWidth:'400px',
    },
    success:{
        color:'darkgreen',
        border:'1px solid darkgreen',
        borderRadius:'20px',
        magin:'10px auto',
        padding:'10px',
        maxWidth:'400px',

    }
}

export default Notification
