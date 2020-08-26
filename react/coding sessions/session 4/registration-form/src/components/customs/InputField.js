import React from 'react'

const InputField = ({type, label, placeHolder, value, name, changeHandler, error}) => {
    return (
        <div style={styles.container}>
            <label>{label}</label>
            <input 
                style={styles.input}
                type={type} 
                placeholder={placeHolder} 
                value={value}
                name={name}
                onChange={changeHandler} 
            />
            <small style={{color:'darkRed'}}>{error}</small>
        </div>
    )
}

const styles = {
    input:{
        // minWidth:'200px',
        border:'none',
        borderBottom: '1px solid darkgreen',
        fontSize:'10px',
        flex: 1,
        outline:'none'
    },
    container:{
        display:'flex',
        flexDirection:'column',
        minWidth:'40%',
        padding:'10px'
    }
}

export default InputField
