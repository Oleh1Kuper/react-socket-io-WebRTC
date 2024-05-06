import React from 'react';
import { useSelector } from 'react-redux';
import { joinVideoRoom } from '../store/actions/videoRoomActions';

function RoomJoinButton({ creatorName, roomId, participants }) {
  const { inRoom } = useSelector((state) => state.videoRooms);
  const handleJoinRoom = () => {
    if (inRoom) {
      alert('Already in room!');

      return;
    }

    if (participants > 1) {
      alert('Room is full');

      return;
    }

    joinVideoRoom(roomId);
  };

  return (
    <button
      onClick={handleJoinRoom}
      type="button"
      className="map_page_v_rooms_join_button"
    >
      {creatorName[0]}
    </button>
  );
}

export default RoomJoinButton;
