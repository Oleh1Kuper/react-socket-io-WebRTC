import React from 'react';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { actions as messengerActions } from '../features/messenger';

function NavBar({ userName, socketId }) {
  const dispatch = useDispatch();
  const handleCloseChatBox = () => {
    dispatch(messengerActions.removeChatBox(socketId));
  };

  return (
    <div className="chatbox_nav_bar_container">
      <p className="chatbox_nav_bar_label">{userName}</p>

      <div className="chatbox_close_icon_container">
        <IoClose
          onClick={handleCloseChatBox}
          color="#fff"
          className="chatbox_close_icon_img"
        />
      </div>
    </div>
  );
}

export default NavBar;
