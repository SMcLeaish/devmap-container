import React, { Component, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Map from '../Map/Map';
import './user.css';
import { AppContext } from '../../App';
import Switch from "react-switch"


export default function User() {
  const [coord, setCoord] = useState([39.0997, -94.5786])
  const [zoom, setZoom] = useState(4)
  const [searchText, setSearchText] = useState("")
  const [searchText2, setSearchText2] = useState("")

  const [civilian,setCivilian] = useState('')

  const markers = useContext(AppContext)


  const getInitialState = () => {
    const value = false;
    return value;
  };

  const [coder, setCoder] = useState(getInitialState);

  const handleChangeCoder = (checked) => {
    setCoder(String(checked));
  };

  const ChangeView = (marker) => {
    setZoom(20)
    setCoord(marker.geocode)
  }

  const lowerCaseHelper = () => {
    let searchItem = document.getElementById("searchInput").value;
    setSearchText(searchItem.toLowerCase())
  }

  // useEffect(() => {
  //   fetch('http://localhost:8081/personnel/')
  //     .then((res) => res.json())
  //     .then(data => {
  //       setBranch(data)
  //     })
  //     .catch(error=>console.log('this isnt working'))
  // },[])


  return (
    <>
{/* <<<<<<< HEAD
    <div className='userContainer'>
      <Map />
    </div>
    <div >
        <div className='SearchField'>
           <div className='searchContainer'id="searchContainer>">
              <input className='searchInput' id="searchInput" type="text" name="search" 
                  placeholder="Search For Coder..." onChange={()=>{setSearchText(document.getElementById("searchInput").value)}}></input>
            </div>
        </div>
            {console.log(searchText)}
          <div className='groupContainer '>
             {/* {markers.filter(marker=>marker.name.toLowerCase().startsWith(searchText) || marker.base.toLowerCase().startsWith(searchText)  ) */}
             {/* {markers.filter(marker=>marker.name.toLowerCase().startsWith(searchText))

              .map(marker => (
                    // <div key={marker.id} className="characterTile" onClick={() => setDisplay(marker)}>
                    <div className='singleContainer' onClick={() => setCoord(marker.geocode)}>
                      <h3 className='nameStyle'>{marker.name}</h3>
                      <img src= {marker.photo} alt='img' width="90" height="90"/>
                      <p className='pstyle'>Location: {marker.geocode}</p>
                      <p className='pstyle'>Clearance: {marker.clearance}</p>
                      <p className='pstyle'>arrived_on_station: {marker.arrived_on_station}</p>
                      <p className='pstyle'>Base: {marker.installation_id}</p>
                      <p className='pstyle'>Coder?: {marker.has_skill_identifier}</p>
                      <p className='pstyle'>Civilian?: {marker.is_civilian}</p>
                      <p className='pstyle'>Rank: {marker.rank}</p>
                      <p className='pstyle'>Email: {marker.email}</p>

                    </div>
                    ))}
          </div> */}
{/* ======= */}
      <div className='userContainer'>
        <Map coord={coord} zoom={zoom} coder={coder} searchText={searchText}/>
{/* >>>>>>> testing */}
      </div>
      <div >
        <div className='SearchField'>
          <div className='searchContainer' id="searchContainer>">
            <input className='searchInput' id="searchInput" type="text" name="search"
              placeholder="Search For Coder..." onChange={lowerCaseHelper}></input>
          </div>
          <label>
            <span id="Switch">Is coder?</span>
            <Switch onChange={handleChangeCoder} checked={coder === "true"} />
          </label>

          {/* <label>
            <input onChange={handleChangeCoder} type="checkbox" value="true" name="coder" />
          </label> */}
          {/* <ButtonToggle active={active === type} onClick={() => setActive(type)}>
            {type}
          </ButtonToggle>
           */}

          {/* <select value={coder} onChange={handleChangeCoder} className='coderCss' id="CoderSelect">
            <option value='true' >Coder: True</option>
            <option value='false' >Coder: False</option>
          </select> */}

        </div>
        {/* {console.log(searchText)} */}
        <div className='groupContainer '>
          {
            coder === 'true' ?
              markers.filter(marker => marker.name.toLowerCase().startsWith(searchText) &&
                marker.has_skill_identifier.toString() === coder)
                .map(marker => (
                  // <div key={marker.id} className="characterTile" onClick={() => setDisplay(marker)}>
                  <div className='singleContainer' onClick={() => ChangeView(marker)}>
                    <h3 className='nameStyle'>{marker.name}</h3>
                    <img src={marker.photo} alt='img' width="90" height="90" />
                    <p className='pstyle'>Location: {marker.geocode}</p>
                    <p className='pstyle'>Clearance: {marker.clearance}</p>
                    <p className='pstyle'>arrived_on_station: {marker.arrived_on_station}</p>
                    <p className='pstyle'>Base: {marker.installation_id}</p>
                    <p className='pstyle'>Coder?: {marker.has_skill_identifier.toString()}</p>
                    <p className='pstyle'>Civilian?: {marker.is_civilian.toString()}</p>
                    <p className='pstyle'>Rank: {marker.rank}</p>
                    <p className='pstyle'>Email: {marker.email}</p>

                  </div>
                ))

              : markers.filter(marker => marker.name.toLowerCase().startsWith(searchText))
                .map(marker => (
                  // <div key={marker.id} className="characterTile" onClick={() => setDisplay(marker)}>
                  <div className='singleContainer' onClick={() => setCoord(marker.geocode)}>
                    <h3 className='nameStyle'>{marker.name}</h3>
                    <img src={marker.photo} alt='img' width="90" height="90" />
                    <p className='pstyle'>Location: {marker.geocode}</p>
                    <p className='pstyle'>Clearance: {marker.clearance}</p>
                    <p className='pstyle'>arrived_on_station: {marker.arrived_on_station}</p>
                    <p className='pstyle'>Base: {marker.installation_id}</p>
                    <p className='pstyle'>Coder?: {marker.has_skill_identifier.toString()}</p>
                    <p className='pstyle'>Civilian?: {marker.is_civilian.toString()}</p>
                    <p className='pstyle'>Rank: {marker.rank}</p>
                    <p className='pstyle'>Email: {marker.email}</p>

                  </div>
                ))}
        </div>
      </div >
    </>


  )
}

// "has_skill_identifier": false,
//     "arrived_on_station": "2023-07-06",
//     "is_civilian": false,
//     "rank": "Petty Officer First Class",
//     "email": "Cornell73@hotmail.com",
//     "geocode": "40.7128, 74.006",
//     "branch_id": " 4",
//     "unit_id": " 5",
//     "installation_id": "45",