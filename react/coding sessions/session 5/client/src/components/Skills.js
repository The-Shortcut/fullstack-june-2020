import React from 'react'

const Skills = ({skills, handleDelete, handleEdit}) => {
    if(!skills){
        return null
    }
    return (
        <div>
           {skills.map( skill => <div key={skill._id} style={styles.card}>
               <div>
                <h2>{skill.title}</h2>
                <h4>{skill.description}</h4>
                </div>
                <div>
                    <i onClick={() => handleDelete(skill._id)} style={styles.delIcon} className="far fa-trash-alt"></i>
                    <i onClick={() => handleEdit(skill)} style={styles.editIcon} className="far fa-edit"></i>
                </div>
            </div>)} 
        </div>
    )
}

export default Skills

const styles = {
    card:{
        boxShadow: '3px 3px 3px 3px #eee',
        width:'50%',
        margin:'10px auto',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    delIcon:{
        color:'darkred',
        margin:'5px',
        cursor:'pointer'
    },
    editIcon:{
        color:'darkgreen',
        margin:'5px 10px',
        cursor:'pointer'

    }
}
