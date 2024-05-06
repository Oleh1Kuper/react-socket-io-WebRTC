import React from 'react';
import { useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Marker from '../components/Marker';
import UserCard from '../components/UserCard';
import Messenger from '../components/Messenger';
import VideoRooms from '../components/VideoRooms';
import '../styles/MapPage.css';

function MapPage() {
  const { myLocation, onlineUsers, cardChosenOption } = useSelector(
    (state) => state.map,
  );

  const defaultMapConfig = {
    center: { ...myLocation },
    zoom: 11,
  };

  return (
    <div className="map_page_container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API_KEY }}
        defaultCenter={defaultMapConfig.center}
        defaultZoom={defaultMapConfig.zoom}
      >
        {onlineUsers.map((onlineUser) => (
          <Marker
            lat={onlineUser.coords.lat}
            lng={onlineUser.coords.lng}
            key={onlineUser.socketId}
            myself={onlineUser.myself}
            socketId={onlineUser.socketId}
            userName={onlineUser.userName}
          />
        ))}
      </GoogleMapReact>

      <Messenger />

      {cardChosenOption && <UserCard />}
      <VideoRooms />
    </div>
  );
}

export default MapPage;
