import React from 'react';
import { useSelector } from 'react-redux';
import calculateDistanceBetweenCoords from '../utils/location';
import ActionButton from './ActionButton';

function UserCard() {
  const { myLocation, cardChosenOption } = useSelector((state) => state.map);
  const distance = calculateDistanceBetweenCoords(
    myLocation,
    cardChosenOption.coords,
  ).toFixed(2);

  return (
    <div className="map_page_card_container">
      <p className="map_page_card_label">{cardChosenOption.userName}</p>
      <p className="map_page_card_label" style={{ fontSize: '14px' }}>
        {`${distance}km`}
      </p>
      <ActionButton />
    </div>
  );
}

export default UserCard;
