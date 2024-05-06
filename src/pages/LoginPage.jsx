import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions as mapActions } from '../features/map';
import { connectWithSocket } from '../socket/socket';
import proceedWithLogin from '../store/actions/loginPageActions';
import { connectWithPeerServer } from '../utils/webRTCHandler';
import '../styles/LoginPage.css';

function LoginPage() {
  const [userName, setUserName] = useState('');
  const [isLocationError, setIsLocationError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { myLocation } = useSelector((state) => state.map);

  const locationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const onLogin = () => {
    proceedWithLogin({
      userName,
      coords: { ...myLocation },
    });
    navigate('/map');
  };

  const onSuccess = (position) => {
    dispatch(
      mapActions.setMyLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }),
    );
  };

  const onError = () => {
    setIsLocationError(true);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      onSuccess,
      onError,
      locationOptions,
    );
  }, []);

  useEffect(() => {
    if (myLocation) {
      connectWithSocket();
      connectWithPeerServer();
    }
  }, [myLocation]);

  return (
    <div className="l_page_main_container">
      <div className="l_page_box">
        <p className="logo">GeoCall</p>

        <input
          value={userName}
          onChange={handleChange}
          type="text"
          className="l_page_input"
        />

        <button
          disabled={!userName.trim() || isLocationError}
          onClick={onLogin}
          type="button"
          className="l_page_login_button"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
