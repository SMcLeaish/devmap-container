
import { Link, Routes, Route } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import './Admin.css';
import { AppContext } from '../../App';


function Admin() {
  const navigate = useNavigate();
  const [ searchText, setSearchText ] = useState("")
  const [ data, setData ] = useState([])
  
  const [ name, setName ] = useState('')
  const [ geocode, setGeocode ] = useState('')
  const [ clearance, setClearance ] = useState('')
  const [ arrived_on_station, setArrivedOnStation ] = useState('')
  const [ installation_id, setBase ] = useState('')
  const [ has_skill_identifier, setCoder ] = useState(false)
  const [ is_civilian, setUserCivilian ] = useState(false)
  const [ rank, setRank ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ mos, setMos ] = useState(null)
  const [ mgrs, setMgrs ] = useState(null)
  const [ branch_id, setBranch ] = useState(0)
  const [ unit_id, setUnitId ] = useState(0)
  const [ photo , setPhoto] = useState('https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/336.jpg')

  const markers = useContext(AppContext)
  
  // const [ load, setLoad ] = useState(false)


  const handleSubmit = (e) => {
    // e.preventDefault();
    const AdminUpdate = { name, clearance, has_skill_identifier, arrived_on_station, is_civilian, mos, rank, email, geocode, mgrs, branch_id, unit_id, installation_id, photo};
    console.log(AdminUpdate);
    alert(`Member " ${name} " has been created`)

    // setLoad(true)
    fetch('http://localhost:8081/test/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
              },
              body: JSON.stringify({data:AdminUpdate})
    })
    .then(response => response.json()
    ).then(function (data) {
      console.log(data)
      window.location.reload();
    })
    };
    

    const handleUpdate = (e) => {
      // e.preventDefault();
      const AdminUpdate = { name, clearance, has_skill_identifier, arrived_on_station, is_civilian, mos, rank, email, geocode, mgrs, branch_id, unit_id, installation_id, photo};
      console.log(AdminUpdate);
      alert(`Member " ${name} " has been updated`)

      // setLoad(true)
      fetch(`http://localhost:8081/update/${name}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
                },
                body: JSON.stringify({data:AdminUpdate})
      })
      .then(response => response.json()
      ).then(function (data) {
        console.log(data)
        window.location.reload();
      });
      };


    // Patch('http://localhost:8081/personnel', {
    //   AdminUpdate
    // })
    // .then(res => console.log(response.data))
    // .catch(error=>console.error(err))
  // }

  const handleDelete = (e) => {
    // e.preventDefault();
    const AdminUpdate = { name };
    console.log(AdminUpdate);
    alert(`Member " ${name} " has been deleted`)
    // setLoad(true)
    fetch(`http://localhost:8081/testdelete/${name}`, {
         method: 'DELETE' })
        .catch(error=>console.error(error))

        // .then(() => setStatus('Delete successful'));
  }


  const AllData = (markers) => {
    setData(markers)
    setName(markers.name)
    setGeocode(markers.geocode)
    setClearance(markers.clearance)
    setArrivedOnStation(markers.arrived_on_station)
    setBase(markers.installation_id)
    setCoder(markers.has_skill_identifier)
    setUserCivilian(markers.is_civilian)
    setRank(markers.rank)
    setEmail(markers.email)
    setMos(markers.mos)
    setMgrs(markers.mgrs)
    setBranch(markers.branch_id)
    setUnitId(markers.unit_id)
    setPhoto(markers.photo)

  }

  return (
    <>
      <div className='AdminStyle' id='header'>
            <h1 className='UserView' id='UserView' onClick={() => navigate('/user')}>UserView</h1>
      </div>
        <div className='AdminWhole'>
          <div className='AdminLeft'>
            <div className='AdminsearchContainer'id="searchContainer>">
                <input className='AdminsearchInput' id="searchInput" type="text" name="search" 
                    placeholder="Search For Coder..." onChange={()=>{setSearchText(document.getElementById("searchInput").value)}}></input>
            </div>
            <div className='AdmingroupContainer '>
              {/* {markers.filter(marker=>marker.name.toLowerCase().startsWith(searchText) || marker.base.toLowerCase().startsWith(searchText)  ) */}
              {markers.filter(marker=>marker.name.toLowerCase().startsWith(searchText))

                .map(marker => (
                      <div className='AdminsingleContainer' onClick={() => AllData(marker)}>
                      <h3 className='nameStyle'>{marker.name}</h3>
                      <img src= {marker.photo} alt='img' width="90" height="90"/>
                      <p className='Adminpstyle'>Location: {marker.geocode}</p>
                      <p className='Adminpstyle'>Clearance: {marker.clearance}</p>
                      <p className='Adminpstyle'>arrived_on_station: {marker.arrived_on_station}</p>
                      <p className='Adminpstyle'>Base: {marker.installation_id}</p>
                      <p className='Adminpstyle'>Coder?: {marker.has_skill_identifier.toString()}</p>
                      <p className='Adminpstyle'>Civilian?: {marker.is_civilian.toString()}</p>
                      <p className='Adminpstyle'>Rank: {marker.rank}</p>
                      <p className='Adminpstyle'>Email: {marker.email}</p>
                      </div>
                      ))}
              </div>
          </div>
          <div className='FormInput'>
                  <div className='FormHeader'>
                    <h1 className='FormTitle'>Details for: {data.name}</h1>
                  </div>
                  <div className='FormDetails'>

                      <form id='myForm' onSubmit = {handleSubmit}>
                            <label> Name:  </label> 
                            <input
                              type='text'
                              value={ name }
                              onChange={(e) => setName(e.target.value)}
                              />

                            <label> Location: </label> 
                            <input
                              type='text'
                              value={geocode}
                              onChange={(e) => setGeocode(e.target.value)}
                              />

                            <label> Clearance: </label> 
                            <input
                              type='text'
                              value={ clearance }
                              onChange={(e) => setClearance(e.target.value)}
                              />

                            <label> Arrived On Station: </label> 
                            <input
                              type='text'
                              value={arrived_on_station}
                              onChange={(e) => setArrivedOnStation(e.target.value)}
                              />

                             <label> Coder? :  </label> 
                            <input
                              type='text'
                              value={has_skill_identifier}
                              onChange={(e) => setCoder(e.target.value)}
                              />

                            <label> Civilian? : </label> 
                            <input
                              type='text'
                              value={is_civilian}
                              onChange={(e) => setUserCivilian(e.target.value)}
                              />

                            <label> Rank: </label> 
                            <input
                              type='text'
                              value={ rank }
                              onChange={(e) => setRank(e.target.value)}
                              />

                            <label> Email </label> 
                            <input
                              type='text'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              />

                            {/* <label> MOS :  </label> 
                            <input
                              type='text'
                              value={mos}
                              onChange={(e) => setMos(e.target.value)}
                              />

                            <label> MGRS: </label> 
                            <input
                              type='text'
                              value={mgrs}
                              onChange={(e) => setMgrs(e.target.value)}
                              /> */}

                            <label> Branch ID: </label> 
                            <input
                              type='text'
                              value={ branch_id }
                              onChange={(e) => setBranch(e.target.value)}
                              />

                            <label> Unit ID: </label> 
                            <input
                              type='text'
                              value={unit_id}
                              onChange={(e) => setUnitId(e.target.value)}
                              />

                            <label> Photo: </label> 
                            <input
                              type='text'
                              value={ photo}
                              onChange={(e) => setPhoto(e.target.value)}
                              />
                      </form>
                            
                  </div>
                  <div className='Footer'>
                    <button className='UpdateBtn' onClick={() => {handleUpdate()}}>UPDATE USER</button>
                    <button className='AddBtn' onClick={() => {handleSubmit()}}>ADD USER</button>
                    <button className='DeleteBtn' onClick={() => {handleDelete()}}>DELETE USER</button>
                  </div>
          </div>
        </div>
    </>
  );
}

export default Admin