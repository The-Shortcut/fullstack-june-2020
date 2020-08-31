import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import EventsPage from './pages/EventsPage'

export default Routes => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/events' component={EventsPage} />
            </Switch>
        </BrowserRouter>
    )
}