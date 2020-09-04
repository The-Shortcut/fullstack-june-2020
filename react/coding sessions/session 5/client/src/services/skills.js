import axios from 'axios'


const getAll = async() => {
    const request = await axios.get('/skills')
    return request.data
}

const addSkill = async({title, description}) => {
    const config = {
        contentType: 'application-json'
    }
    const response = await axios.post('/skills', {title, description}, config)
    return response.data
}

const deleteSkill = async (id) => {
    await axios.delete(`/skills/${id}`)
}

const editSkill = async (id, title, description) => {
    await axios.put(`/skills/${id}`, {title, description})
}


export default {
    getAll,
    addSkill,
    deleteSkill,
    editSkill
}