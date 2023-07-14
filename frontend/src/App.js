import React, { createContext } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import styled from "styled-components"
import { useState, useEffect } from 'react';
import User from './Components/User/User';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import { useNavigate } from 'react-router-dom'
import './App.css';

export const AppContext = createContext()

function App() {
  const navigate = useNavigate();
  const [markers, setMarkers] = useState([])


  useEffect(() => {
    fetch('http://localhost:8081/personnel')
      .then((res) => res.json())
      .then(data => {
        setMarkers(data)
      })
      .catch(error=>console.log('this isnt working'))
  },[])

// console.log(markers)

  return (
    <>

      <div className='HeaderStyle' id='header'>
            <h1 className='HeaderTitle' id='header-title' onClick={() => navigate('/')}>DevMap</h1>
      </div>

      {/* this is the breadcromb bar */}
      <AppContext.Provider value={markers}>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </AppContext.Provider>

    </>
  );
}

export default App;