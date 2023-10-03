import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import './Login.css';
import { createUserDocFromAuth, createAuthUserWithEmailAndPassword } from './utils/firebase';

const Login = (props) => {
  const [contact, setContact] = useState({
    email: '',
    password: '',
  });

  const { email, password } = contact;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => {
      return {
        ...prevContact,
        [name]: value,
      };
    });
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await createAuthUserWithEmailAndPassword(email, password);
      console.log('User created:', response.user);

      // Attempt to create user document
      await createUserDocFromAuth(response.user);
    
      console.log('User document created successfully');

      window.location.href = '/';
    } catch (error) {
      alert('Error signing up: ' + error.message);
      console.log('Error signing up:', error);
    }
  };

  return (
    <div className='login-style'>
      <div className='login-container'>
        <a className='signuplink' href='/signup'>Sign Up</a>
        <p className='label'>Your email</p>
        <Input 
          className='leftinput'
          name='email'
          type='text'
          placeholder='Email'
          onChange={handleChange}
          value={contact.email}
        />

        <p className='label'>Your password</p>
        <Input 
          className='leftinput'
          name='password'
          type='password'
          placeholder='Password'
          onChange={handleChange}
          value={contact.password}
        />

        <Button onClick={handleSignup}>Sign Up</Button>
      </div>
    </div>
  );
};

export default Login;