import React from 'react';
import { useSelector } from 'react-redux';
import Video from './Video';
import VideoRoomButtons from './VideoRoomButtons';

function ParticipantsVideos() {
  const { inRoom, localStream, remoteStream } = useSelector((state) => state.videoRooms);

  return (
    <div className="map_page_v_rooms_videos_container">
      {inRoom && <VideoRoomButtons />}
      {inRoom && localStream && <Video stream={localStream} muted />}
      {inRoom && remoteStream && <Video stream={remoteStream} muted />}
    </div>
  );
}

export default ParticipantsVideos;
