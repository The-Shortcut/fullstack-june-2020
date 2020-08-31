import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap'

import api from '../../services/api'

const Register = ({history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()
        console.log('result of the submit', email, password)

        const response = await api.post('/user/register', {email, password, firstName, lastName})
        const userId = response.data._id || false

        if (userId) {
            localStorage.setItem('user', userId)
            history.push('/dashboard')
        } else {
            const { message } = response.data
            console.log(message)
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
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default Register