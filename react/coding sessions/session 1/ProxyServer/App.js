const express = require('express')
const axios  = require('axios')
var cors = require('cors')
require('dotenv').config()
const app = express()
const TOKEN = process.env.TOKEN

app.use(cors())

app.get('/', (req,res)=>{
    console.log('hello World')
    res.send('<h1>Hello oooh</h1>')
})

app.get('/restaurants', async (req, res)=>{
    console.log('/api in')
    

    if(!req.query || !req.query.searchTerm || !req.query.location){
        return res.status(400).end('searchTerm and location are the required query string parameters!')
    }
        const searchTerm = req.query.searchTerm
        const location = req.query.location

        console.log('searchTerm is ', searchTerm)
        console.log('location is ', location)

        let config ={
            method:'get',
            url:`https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}`,
            headers: {
              'Authorization': `${TOKEN}`
            }
        }
        const response = await axios(config)
        return res.send(response.data)
    
})



const PORT=3001
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})