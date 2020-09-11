import React, {useEffect, useState, useMemo} from 'react'
import moment from 'moment'
import socketio from 'socket.io-client'

import api from '../../services/api'
import './dashboard.css'
import { Alert, Button, ButtonGroup, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const Dashboard = ({history}) => {
    const user_id = localStorage.getItem('user_id')
    const user = localStorage.getItem('user')

    const [events, setEvents] = useState([])
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [messageHandler, setMessageHandler] = useState('')
    const [eventsRequests, setEventsRequests] = useState([])
    const [dropdownOpen, setdropDownOpen] = useState(false)
    const [eventRequestMessage, setEventRequestMessage] = useState('')
    const [eventRequestSuccess, setEventRequestSuccess] = useState(false)

    const toggle = () => setdropDownOpen(!dropdownOpen)

    useEffect (() => {
        getEvents()
    }, [])
    
    const socket = useMemo(() => socketio('https://fullstack-fitness-api.herokuapp.com', { query: { user: user_id}}), [user_id])
    
    useEffect(() => {
        // socket.on('mojo', response => console.log(response))
        socket.on('registration_request', response => setEventsRequests([...eventsRequests, response]))
    }, [eventsRequests, socket])

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

    const acceptEventHandler = async(eventId) => {
        try {
            await api.post(`/registration/${eventId}/approvals`, {}, {headers: {user}})
            setEventRequestSuccess(true)
            setEventRequestMessage(`Request approved successfully`)
            removeNotificationFromDashboard(eventId)
            console.log('Registered')
            setTimeout(() => {
                setEventRequestSuccess(false)
                setEventRequestMessage('')
            }, 2000);
        } catch(error) {
            console.log(error)
        }
    }

    const rejectEventHandler = async(eventId) => {
        try {
            await api.post(`/registration/${eventId}/rejections`, {}, {headers: {user}})
            setEventRequestSuccess(true)
            setEventRequestMessage(`Request rejected successfully`)
            removeNotificationFromDashboard(eventId)
            setTimeout(() => {
                setEventRequestSuccess(false)
                setEventRequestMessage('')
            }, 2000);
        } catch(error) {
            console.log(error)
        }
    }

    const removeNotificationFromDashboard = (eventId) => {
        const newEvents = eventsRequests.filter((event) => event._id !== eventId) 
        setEventsRequests(newEvents)
    }

    // TODO: Add logout button next to Create Event
    // TODO: Onclick it should trigger logoutHandler function
    // TODO: logoutHandler function will kick users out of the session
    // TODO: Push to login page

    return (
        <>
            {eventRequestSuccess ? (
                <Alert color="success" className="event-validation"> {eventRequestMessage} </Alert>
            ) : ''}
            <ul className="notifications">
                {eventsRequests.map(request => {
                    console.log(request)
                    return (
                        <li key={request._id}>
                            <div>
                                <strong>{request.user.email}</strong> is requesting to register to your event: <strong>{request.event.title}</strong>
                            </div>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => { acceptEventHandler(request._id) }}>Accept</Button>
                                <Button color="danger" onClick={() => { rejectEventHandler(request._id) }}>Reject</Button>
                            </ButtonGroup>
                        </li>
                    )
                })}  
            </ul>
            <div className="filter-panel">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        Filter
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem color="primary" onClick={() => category(null)} active={category === null}>All</DropdownItem>
                        <DropdownItem className="secondary-btn" onClick={myEventsHandler}>My Events</DropdownItem>
                        <DropdownItem color="primary" onClick={() => category('running')} active={category === 'running'}>Running</DropdownItem>
                        <DropdownItem color="primary" onClick={() => category('climbing')} active={category === 'climbing'}>Climbing</DropdownItem>
                        <DropdownItem color="primary" onClick={() => category('exercise')} active={category === 'exercise'}>Exercise</DropdownItem>
                        <DropdownItem color="primary" onClick={() => category('other')} active={category === 'other'}>Other</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
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