import React from 'react';
import { FiPhoneOff } from 'react-icons/fi';
import { CiMicrophoneOff, CiMicrophoneOn } from 'react-icons/ci';
import { LuCamera, LuCameraOff } from 'react-icons/lu';

import { useDispatch, useSelector } from 'react-redux';
import { leaveVideoRoom } from '../store/actions/videoRoomActions';
import { actions as videoRoomsActions } from '../features/video';

function VideoRoomButtons() {
  const {
    inRoom, isMuted, isCameraOn, localStream,
  } = useSelector(
    (state) => state.videoRooms,
  );
  const dispatch = useDispatch();

  const handleLeaveRoom = () => {
    leaveVideoRoom(inRoom);
  };

  const handleMuteChange = () => {
    const { enabled } = localStream.getAudioTracks()[0];

    localStream.getAudioTracks()[0].enabled = !enabled;
    dispatch(videoRoomsActions.toggleMute(!isMuted));
  };

  const handleCameraChange = () => {
    const { enabled } = localStream.getVideoTracks()[0];

    localStream.getVideoTracks()[0].enabled = !enabled;
    dispatch(videoRoomsActions.toggleCameraOn(!isCameraOn));
  };

  return (
    <div className="m_page_v_rooms_video_buttons_container">
      <button
        onClick={handleCameraChange}
        type="button"
        className="m_page_v_rooms_video_button"
      >
        {isCameraOn ? <LuCamera /> : <LuCameraOff />}
      </button>

      <button
        aria-label="Leave Room"
        onClick={handleLeaveRoom}
        type="button"
        className="m_page_v_rooms_video_button"
      >
        <FiPhoneOff />
      </button>

      <button
        onClick={handleMuteChange}
        type="button"
        className="m_page_v_rooms_video_button"
      >
        {isMuted ? <CiMicrophoneOn /> : <CiMicrophoneOff />}
      </button>
    </div>
  );
}

export default VideoRoomButtons;
