import React, { createContext } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import styled from "styled-components"
import { useState, useEffect } from 'react';
import User from '../User/User';
import './Login.css';
import { useNavigate } from 'react-router-dom';

// This is the styling section 


// This is the styling section 
// Below is the Fetch and variable setting


function Login() {
  const navigate = useNavigate()

  const getInitialState = () => {
    const value = 'user';
    return value;
  };

  const [signIn, setSignIn] = useState(getInitialState);

  const handleChange = (e) => {
    setSignIn(e.target.value)
  };



  return (
    <>
      <div className='FormContainer'>
        <h1>Login</h1>
        <div>
          <h4><label for='loginSelect'>Role: </label>
          <select value={signIn} onChange={handleChange} className='selectCss' id="loginSelect">
            <option value='/user'>User</option>
            <option value='/admin'>Admin</option>
          </select></h4>
        </div>
        <div>
          <input className='userInputs' name='UserId' placeholder="User Name..." type='text' />
          <input className='userInputs' name='PassWord' placeholder="User Password..." type='password' />
        </div>
        <button className='LoginBtn' onClick={() => navigate(`${signIn}`)}>Login</button>
      </div>
    </>
  );
}

export default Login;