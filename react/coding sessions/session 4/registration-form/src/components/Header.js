import React from 'react'

const Header = () => {
    return (
        <div style={styles.header}>
            <h2>Registration Form</h2>
        </div>
    )
}

const styles={
    header:{
        backgroundColor:'#333',
        color: '#eee',
        minWidth:'100%',
        minHeight:'90px',
        textAlign:'center'
    }
}



export default Header
