import React from 'react';
import { useSelector } from 'react-redux';
import { FiPhoneCall } from 'react-icons/fi';
import RoomJoinButton from './RoomJoinButton';
import { createVideoRoom } from '../store/actions/videoRoomActions';
import convertRoomsToArray from '../utils/roomsToArray';
import ParticipantsVideos from './ParticipantsVideos';

function VideoRooms() {
  const { rooms, inRoom } = useSelector((state) => state.videoRooms);
  const hanleRoomCreate = () => {
    if (inRoom) {
      alert('You are already in the room');

      return;
    }

    createVideoRoom();
  };

  const roomsToArray = convertRoomsToArray(rooms);

  return (
    <div className="map_page_v_rooms_list">
      <FiPhoneCall
        onClick={hanleRoomCreate}
        color="#00ffff"
        className="map_page_card_img"
      />

      {roomsToArray.map((room) => (
        <RoomJoinButton
          key={room.id}
          creatorName={room.creatorName}
          roomId={room.id}
          participants={room.participants}
        />
      ))}

      <ParticipantsVideos />
    </div>
  );
}

export default VideoRooms;
