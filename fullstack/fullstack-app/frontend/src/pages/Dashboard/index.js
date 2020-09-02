import React, {useEffect, useState} from 'react'
import moment from 'moment'

import api from '../../services/api'
import './dashboard.css'
import { Button } from 'reactstrap'

export default Dashboard => {
    const user_id = localStorage.getItem('user')

    const [events, setEvents] = useState([])

    useEffect (() => {
        getEvents()
    }, [])

    const getEvents = async(params) => {
        const url = params ? `/dashboard/${params}` : '/dashboard'
        const response = await api.get(url, {headers: {user_id}})

        setEvents(response.data)
    }
    return (
        <ul className="events-list">
            {events.map(event => 
            <li key={event._id}>
            <header style= {{ backgroundImage: `url(${event.thumbnail_url})`}} />
            <strong>{event.title}</strong>
            <span>Date: {moment(event.date).format('LL')}</span>
            <span>Price: {event.price}</span>
            <span>Description: {event.description}</span>
            <Button className="submit-btn">Subscribe</Button>
            </li>
            )}
        </ul>
    )
}