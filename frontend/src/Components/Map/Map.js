
import './Map.css';
import { useContext,useState,useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster';
import {Icon, divIcon} from "leaflet";
import styled from 'styled-components';
import { AppContext } from '../../App';


export default function Map(props) {
  const markers = useContext(AppContext)
  const [filteredMarkers, setFilteredMarkers] = useState(markers);
  
  // console.log(markers.geocode)
console.log( "props cord is " + props.coord)
console.log( "props zoom is " + props.zoom)
console.log( "props coder is " + props.coder)
useEffect(() => {
  if (props.coder === "true") {
    setFilteredMarkers(markers.filter(marker => marker.has_skill_identifier.toString() === props.coder 
      && marker.name.toLowerCase().startsWith(props.searchText)));
  } else {
    setFilteredMarkers(markers.filter(marker => marker.name.toLowerCase().startsWith(props.searchText)));
  }
}, [markers, props.coder, props.searchText]);

  const StyledPop = styled(Popup)`
  border-radius: 0;
  display: flex;
  justify-content: center;
  text-align: center;
`

  // CREATES CUSTOM ICON FOR INDIVIDUAL
  const customIcon = new Icon ({
    iconUrl: require('../.././img/user.png'),
    iconSize: [38,38]
  })


  // CREATES CUSTOM ICON FOR GROUP
const createCustomClusterIcon = (cluster) => {
  return new divIcon({
    html: `<div class='cluster-icon'>${cluster.getChildCount()}</div`,
    className: 'custom-marker-cluster',

  });
}


  return (
    <>
        <MapContainer center={props.coord} zoom={props.zoom}>

          {/* This sets up the tiles */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* This section sets up the cluster groups */}
          <MarkerClusterGroup 
            chunkedLoading 
            iconCreateFunction={createCustomClusterIcon}>
              {filteredMarkers.map(marker => (
                <Marker position={JSON.parse(marker.geocode)} icon={customIcon}>
                  <StyledPop>
                  <div className='popupView'>
                      <img className='imgClass' src= {marker.photo} alt='img' width="80" height="80"/>
                      <p className="pPop"> Name: {marker.name}</p>
                      <p className="pPop"> Rank: {marker.rank}</p>
                      <p className="pPop"> Email: {marker.email}</p>
                      <p className="pPop"> Rank: {marker.rank}</p>
                      <p className="pPop"> Coder?: {marker.has_skill_identifier.toString()}</p>
                  </div>
                </StyledPop>
                </Marker>
              ))}
            </MarkerClusterGroup>
        </MapContainer>
    </>

  )
}