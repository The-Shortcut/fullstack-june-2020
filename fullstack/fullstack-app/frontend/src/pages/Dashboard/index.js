import React, {useEffect, useState} from 'react'
import moment from 'moment'

import api from '../../services/api'
import './dashboard.css'
import { Alert, Button, ButtonGroup } from 'reactstrap'

const Dashboard = ({history}) => {
    const user_id = localStorage.getItem('user_id')
    const user = localStorage.getItem('user')

    const [events, setEvents] = useState([])
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect (() => {
        getEvents()
    }, [])

    const category = (query) => {
        getEvents(query)
    }

    const myEventsHandler = async () => {
        try {
            const response = await api.get('/user/events', { headers: {user}})
            setEvents(response.data)
        } catch(error) {
            history.push('login')
        }
    }

    const deleteEventHandler = async (eventId) => {
        try {
            await api.delete(`/event/${eventId}`, {headers: {user}})
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
                category(null)
            }, 2000);
        } catch(error) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000);
        }
    }

    const getEvents = async(params) => {
        try {
            const url = params ? `/dashboard/${params}` : '/dashboard'
            const response = await api.get(url, {headers: {user}})
    
            console.log(response.data)
            setEvents(response.data.events)
        } catch {
            history.push('login')
        }
    }

    return (
        <>
            <div className="filter-panel">
                <ButtonGroup>
                    <Button color="primary" onClick={() => category(null)} active={category === null}>All</Button>
                    <Button color="primary" onClick={() => category('running')} active={category === 'running'}>Running</Button>
                    <Button color="primary" onClick={() => category('climbing')} active={category === 'climbing'}>Climbing</Button>
                    <Button color="primary" onClick={() => category('exercise')} active={category === 'exercise'}>Exercise</Button>
                    <Button color="primary" onClick={() => category('other')} active={category === 'other'}>Other</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button className="secondary-btn" onClick={myEventsHandler}>My Events</Button>
                    <Button className="secondary-btn" onClick={()=>history.push('/events')}>Create Event</Button>
                </ButtonGroup>
            </div>
            <ul className="events-list">
                {events.map(event => 
                <li key={event._id}>
                <header style= {{ backgroundImage: `url(${event.thumbnail_url})`}}>
                    {event.user === user_id ? 
                    <div><Button color="danger" size="sm" onClick={() => deleteEventHandler(event._id)}>x</Button></div> 
                    : ''}  
                </header>
                <strong>{event.title}</strong>
                <span>Date: {moment(event.date).format('LL')}</span>
                <span>Price: {parseFloat(event.price).toFixed(2)}</span>
                <span>Description: {event.description}</span>
                <Button className="submit-btn">Subscribe</Button>
                </li>
                )}
            </ul>
            {error ? (
                <Alert color="danger" className="event-validation">Error deleting event!</Alert>
            ) : ''}
            {success ? (
                <Alert color="success" className="event-validation">Event deleted successfully</Alert>
            ) : ''}
        </>
    )
}

export default Dashboard