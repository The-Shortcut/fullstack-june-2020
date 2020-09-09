import React, { useState, useContext } from 'react'
import { Alert, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap'

import api from '../../services/api'
import { UserContext } from '../../user-context'

const Login = ({history}) => {
    const {isLoggedIn, setIsLoggedIn} = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    const handleSubmit = async event => {
        event.preventDefault()
        console.log('result of the submit', email, password)

        const response = await api.post('/login', {email, password})
        // const userId = response.data._id || false
        const user = response.data.user || false
        const user_id = response.data.user_id || false

        try {
            if (user && user_id) {
                localStorage.setItem('user', user)
                localStorage.setItem('user_id', user_id)
                setIsLoggedIn(true)
                history.push('/')
            } else {
                const { message } = response.data
                setError(true)
                setErrorMessage(message)
                console.log(message)

                setTimeout(() => {
                    setError(false)
                    setErrorMessage('')
                }, 2000)
            }
        } catch(error) {
            setError(true)
            setErrorMessage(`Error, the server returned an error`)
        }

    }

    return (
        <Container>
            <h2> Login </h2>
            <p>Login to your account to the events</p>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" onChange={event => setEmail(event.target.value)} />
                </FormGroup>
                <FormGroup>
                <Input type="password" name="password" id="examplePassword" placeholder="Your Password" onChange={event => setPassword(event.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Button className="submit-btn">Login</Button>
                </FormGroup>
                <FormGroup>
                    <Button className="secondary-btn" onClick={() => history.push('/register')}>Register</Button>
                </FormGroup>
            </Form>
            {error ? (
                <Alert color="danger" className="event-validation">{errorMessage}</Alert>
            ) : ''}
        </Container>
    )
}

export default Login