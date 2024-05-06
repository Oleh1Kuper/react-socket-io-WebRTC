import React from 'react';
import { useDispatch } from 'react-redux';
import locationImg from '../assets/location-icon.svg';
import { actions as mapActions } from '../features/map';

function Marker({
  lat,
  lng,
  myself,
  socketId,
  userName,
}) {
  const dispatch = useDispatch();

  const handleOptionChoose = () => {
    if (!myself) {
      dispatch(mapActions.setCardChosenOption({
        socketId,
        userName,
        coords: { lat, lng },
      }));
    }
  };

  return (
    <div
      aria-hidden="true"
      onClick={handleOptionChoose}
      className="map_page_marker_container"
    >
      <img
        src={locationImg}
        alt={userName}
        className="map_page_marker_img"
      />
      <p className="map_page_marker_text">
        {myself ? 'Me' : userName}
      </p>
    </div>
  );
}

export default Marker;
