import React,{ useState} from 'react'
import Skills from './Skills'
import skillServices from '../services/skills'

const AddSkill = ({skills}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [btn, setBtn] = useState('ADD')
    const [editableID, setEditableID] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        
        if(btn === 'ADD'){
            const targetSkill = skills.find( skill => skill.title === title)
            if(targetSkill){
                window.alert(`${targetSkill.title} is already added!`)
            }else{
                skillServices.addSkill({title, description})
            }
        }else{
            skillServices.editSkill(editableID, title, description)
            setBtn('ADD')
        }
        
        setTitle('')
        setDescription('')
    }

    const handleDelete = (id) => {
        skillServices.deleteSkill(id)
    }

    const handleEdit = skill => {
        setTitle(skill.title)
        setDescription(skill.description)
        setBtn('Edit')
        setEditableID(skill._id)
    }
    
    return (
        <div>
            <form style={styles.form} onSubmit={handleSubmit}>
                <input 
                    style={styles.input} 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                 />
                <input 
                    style={styles.input}
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit" style={styles.btn}>{btn}</button>
            </form>
            <Skills skills={skills} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
    )
}

export default AddSkill

const styles = {
    form:{
        display:'flex',
        flexDirection:'column',
        width:'20%',
        margin:'auto'
    },
    input:{
        padding:'3px',
        margin:'10px',
        fontSize:'18px'
    },
    btn:{
        padding:'5px',
        fontSize:'22px',
        width:'95%',
        margin:'auto'
    }
}
