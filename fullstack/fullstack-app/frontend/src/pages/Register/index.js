import React, { useState, useContext } from 'react'
import { UserContext } from '../../user-context'
import { Alert, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap'

import api from '../../services/api'

const Register = ({history}) => {
    const {isLoggedIn, setIsLoggedIn} = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()

        try {
            if ( email !== '' &&
            password !== '' &&
            firstName !== '' &&
            lastName !== ''
            ) {
                const response = await api.post('/user/register', {email, password, firstName, lastName})
                const user_id = response.data.user_id || false
                const user = response.data.user || false
    
            if (user && user_id) {
                localStorage.setItem('user', user)
                localStorage.setItem('user_id', user_id)
                setIsLoggedIn(true)
                history.push('/')
            } else {
                const { message } = response.data
                console.log(message)
                setError(true)
                setErrorMessage(message)

                setTimeout(() => {
                    setError(false)
                    setErrorMessage('')
                }, 2000);
            }
            } else {
                setError(true)
                setErrorMessage("Inputs missing")
    
                setTimeout(() => {
                    setError(false)
                    setErrorMessage('')
                }, 2000);
            }
        } catch(error) {
            Promise.reject(error)
        }
    }

    return (
        <Container>
            <h2>Register: </h2>
            <p>Please <strong>register</strong> for a new account</p>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input type="text" name="firstName" id="firstName" placeholder="Your First Name" onChange={event => setFirstName(event.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="lastName" id="lastName" placeholder="Your Last Name" onChange={event => setLastName(event.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" onChange={event => setEmail(event.target.value)} />
                </FormGroup>
                <FormGroup>
                <Input type="password" name="password" id="examplePassword" placeholder="Your Password" onChange={event => setPassword(event.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Button className="submit-btn">Register</Button>
                </FormGroup>
                <FormGroup>
                    <Button className="secondary-btn" onClick={() => history.push('/login')}>Already have an account?</Button>
                </FormGroup>  
            </Form>
            {error ? (
                <Alert color="danger" className="event-validation">{errorMessage}</Alert>
            ) : ''}
        </Container>
    )
}

export default Register