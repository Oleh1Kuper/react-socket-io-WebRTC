import React from 'react';
import { FaRocketchat } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { actions as messengerActions } from '../features/messenger';

function ChatButton() {
  const {
    cardChosenOption: { socketId, userName },
  } = useSelector((state) => state.map);

  const dispatch = useDispatch();

  const handleAddChatBox = () => {
    dispatch(
      messengerActions.addChatBox({
        socketId,
        userName,
      }),
    );
  };

  return (
    <FaRocketchat
      onClick={handleAddChatBox}
      color="#1081E0"
      className="map_page_card_img"
    />
  );
}

export default ChatButton;
