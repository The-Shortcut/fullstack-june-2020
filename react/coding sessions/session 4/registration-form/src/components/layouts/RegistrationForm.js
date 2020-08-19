import React, { Component } from 'react'
import InputField from '../customs/InputField'
import { nameRex, emailRex, phoneRex } from '../constants/regExp'

export default class RegistrationForm extends Component {
    state={
      users:[],
      user:{
          firstName:'',
          lastName:'',
          email:'',
          phone:'',
          position:''
      },
      formErrors:{
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        position:''
      }  
    }

    handleChange =(e) =>{
        const { name, value} = e.target
        const { firstName, lastName, email, phone, position} = this.state.user
        let formErrors = {...this.state.formErrors}
        switch (name) {
            case 'firstName':
                formErrors.firstName = (firstName.match(nameRex)) ? null : 'your first name must more than 3 characters!';
                break;
            case 'lastName':
                formErrors.lastName = ( lastName.match(nameRex))  ? null : 'your last name must more than 3 characters!';
                break;
            case 'email':
                formErrors.email = (email.match(emailRex)) ? null : 'your email id is not valid!'
                break;
            case 'phone':
                formErrors.phone = (phone.match(phoneRex)) ? null : 'your phone number is invalid!'
                break;
            case 'position':
                break;
            default:
                break;
        }
        this.setState({
            user:{
                ...this.state.user,
                [name]: value
            },
            formErrors: formErrors
        })
    }
    render() {
        console.log(this.state.user)
        const { firstName, lastName, email, phone, position} = this.state.user
        const {formErrors} = this.state
        return (
            <div>
                <form style={styles.form}>
                    <InputField
                     type="text"
                     value={firstName}
                     name="firstName" 
                     label="First Name:" 
                     placeHolder="Enter your First Name here!" 
                     changeHandler={this.handleChange}
                     error={formErrors.firstName}
                    />
                    <InputField
                     type="text"
                     value={lastName}
                     name="lastName"
                     label="Last Name: "
                     placeHolder="Enter your Last Name here!" 
                     changeHandler={this.handleChange}
                     error={formErrors.lastName}
                    />
                    <InputField 
                     type="text"
                     value={email}
                     name="email"
                     label="Email: "
                     placeHolder="Enter your Name here!" 
                     changeHandler={this.handleChange}
                     error={formErrors.email}
                    />
                    <InputField 
                     type="number"
                     value={phone}
                     name="phone"
                     label="Phone: "
                     placeHolder="Enter your Contact Number!"
                     changeHandler={this.handleChange}
                     error={formErrors.phone}
                    />
                    <InputField
                     type="text"
                     value={position}
                     name="position"
                     label="Position: "
                     placeHolder="What is your position?"
                     changeHandler={this.handleChange}
                     error={formErrors.position}
                    />
                    <button style={styles.submitBtn}>submit</button>
                </form>
            </div>
        )
    }
}

const styles ={
    form:{
        minWidth:'70%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        margin:'auto'
    },
    submitBtn:{
        minWidth:'120px',
        backgroundColor:'#333',
        color:'#fff',
        border:'1px solid black',
        padding:'5px',
        margin:'10px'
    }
}