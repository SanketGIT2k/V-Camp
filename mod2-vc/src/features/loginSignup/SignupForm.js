import Reatc, {Component} from 'react';

import axios from 'axios'
import {useState} from 'react'

import './SignupForm.css'

let crole = false;
let cpin = 0;


class SignupForm extends Component{

    constructor(){
        super()

        this.state = {
            fullName:'',
            username:'',
            email:'',
            role:crole,
            pin:cpin,
            password:''
        }

        this.changeFullname = this.changeFullname.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeRole = this.changeRole.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullname(event){
        this.setState({
            fullName:event.target.value
        })
    }

    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changeRole(event){
      crole = !crole
      if(crole === true){
        this.createPin()
      }else{
        cpin = 0;
      }
      this.setState({
        role:crole,
        pin:cpin
      })
    }

    createPin(){
      cpin = Math.floor(Math.random() * (9999-1000)) + 1000;
    }

    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
      event.preventDefault();

      const registered = {
        fullName: this.state.fullName,
        username: this.state.username,
        email: this.state.email,
        role:this.state.role,
        pin:this.state.pin,
        password: this.state.password
      }

      axios.post('http://localhost:4000/app/signup',registered)
      .then(response => console.log(response.data))
    }

    render(){

      // this.createPin()

        return(
            <div>
                <div className='container'>
                        <div className='heading'>
                            <h2>Signup</h2>
                        </div>
                    <div className='form-div'>
                    <form onSubmit={this.onSubmit}>
                        <input
                        type='text'
                        placeholder='Full Name'
                        onChange={this.changeFullname}
                        value = {this.state.fullName}
                        className='form-control form-group'
                            />
                        <input
                        type='text'
                        placeholder='User Name'
                        onChange={this.changeUsername}
                        value = {this.state.username}
                        className='form-control form-group'
                            />

                        <input
                        type='text'
                        placeholder='E mail'
                        onChange={this.changeEmail}
                        value = {this.state.email}
                        className='form-control form-group'
                            />

                        <input
                        type='checkbox'
                        placeholder='Your role'
                        onChange={this.changeRole}
                            />    

                        <span>Are you an Admin!?</span>
                        <div/>
                        <div>
                          {cpin !== 0 && <span> {cpin} Remember this pin for login purpose!</span>}
                        </div>
                        
                        <input
                        type='password'
                        placeholder='Password'
                        onChange={this.changePassword}
                        value = {this.state.password}
                        className='form-control form-group'
                            />     
                        
                        <input type='submit' className='btn btn-danger btn-block' value='Submit' />
                    </form>
                        
                    </div>

                </div>
            </div>
        )
    }

}

export default SignupForm;
