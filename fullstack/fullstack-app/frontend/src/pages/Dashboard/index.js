import React, {useEffect, useState} from 'react'
import moment from 'moment'
import socketio from 'socket.io-client'

import api from '../../services/api'
import './dashboard.css'
import { Alert, Button, ButtonGroup } from 'reactstrap'

const Dashboard = ({history}) => {
    const user_id = localStorage.getItem('user_id')
    const user = localStorage.getItem('user')

    const [events, setEvents] = useState([])
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [messageHandler, setMessageHandler] = useState('')

    useEffect (() => {
        getEvents()
    }, [])

    useEffect(() => {
        const socket = socketio('http://localhost:8000', { query: { user: user_id}})
        // socket.on('mojo', response => console.log(response))
        socket.on('registration_request', response => console.log(response))
    }, [])

    const category = (query) => {
        getEvents(query)
    }

    const myEventsHandler = async () => {
        try {
            const response = await api.get('/user/events', { headers: {user}})
            // console.log(response.data.events)
            setEvents(response.data.events)
        } catch(error) {
            history.push('login')
        }
    }

    const deleteEventHandler = async (eventId) => {
        try {
            await api.delete(`/event/${eventId}`, {headers: {user}})
            setSuccess(true)
            setMessageHandler('Event deleted successfully')
            setTimeout(() => {
                setSuccess(false)
                category(null)
                setMessageHandler('')
            }, 2000);
        } catch(error) {
            setError(true)
            setMessageHandler('Error deleting event!')
            setTimeout(() => {
                setError(false)
                setMessageHandler('')
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

    const logoutHandler = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('user_id')
        history.push('login')
    }

    const registrationRequestHandler = async(event) => {
        console.log('Clicked')
        try {
            await api.post(`/registration/${event.id}`, {}, {headers: {user}})
            setSuccess(true)
            setMessageHandler(`Successfully registered to event ${event.title}`)
            console.log('Registered')
            setTimeout(() => {
                setSuccess(false)
                category(null)
                setMessageHandler('')
            }, 2000);
        } catch(error) {
            setError(true)
            setMessageHandler(`Could not register to event ${event.title}`)
            console.log('Failed')
            setTimeout(() => {
                setError(false)
                setMessageHandler('')
            }, 2000);
        }
    }

    // TODO: Add logout button next to Create Event
    // TODO: Onclick it should trigger logoutHandler function
    // TODO: logoutHandler function will kick users out of the session
    // TODO: Push to login page

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
                    <Button className="secondary-btn" onClick={()=>history.push('/events')}>Create Event</Button>
                    <Button className="secondary-btn" onClick={myEventsHandler}>My Events</Button>
                    <Button className="secondary-btn" onClick={logoutHandler}>Logout</Button>
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
                <Button className="submit-btn" onClick={()=> {registrationRequestHandler(event)}}>Register</Button>
                </li>
                )}
            </ul>
            {error ? (
                <Alert color="danger" className="event-validation">{messageHandler}</Alert>
            ) : ''}
            {success ? (
                <Alert color="success" className="event-validation"> {messageHandler} </Alert>
            ) : ''}
        </>
    )
}

export default Dashboard