const skillRouter = require('express').Router()
const Skill = require('../models/Skill')


// to save the data to mongoDB collecgtion.
skillRouter.post('/', async (req, res) => {
    const body = req.body

    if(!body.title){
        return res.status(400).json({ error: 'need to enter the title.'})
    }
    const skill = new Skill({
        title: body.title,
        description: body.description
    })

    const savedSkill = await skill.save()
    res.json(savedSkill)
})

// to get all data from database.
skillRouter.get('/', async (req, res) => {
    const skills = await Skill.find({})
    res.json(skills)
})

// to get specific one by its ID
skillRouter.get('/:id', async ( req, res ) => {
    const id = req.params.id
    const skill = await Skill.findById(id)
    skill ? res.json(skill) : res.status(404).end()
})


// to delete a specific one by its ID
skillRouter.delete('/:id', async (req, res, next) => {
    const id = req.params.id
    Skill.findByIdAndRemove(id)
    .then( result => res.status(204).end())
    .catch( err => next(err))
})

// to update
skillRouter.put('/:id', async(req, res, next) => {
    const body = req.body
    const id = req.params.id

    const skill = {
        title: body.title,
        description: body.description
    }
    Skill.findByIdAndUpdate(id, skill, { new: true})
    .then( updatedSkill => res.json(updatedSkill))
    .catch( err => next(err))
})




module.exports = skillRouter