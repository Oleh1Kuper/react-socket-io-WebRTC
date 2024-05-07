import { Peer } from 'peerjs';
import { actions as videoRoomsActions } from '../features/video';
import store from '../store/store';

let peer;
let peerId;

export const getPeerId = () => {
  return peerId;
};

export const getAccessToLocalStream = async () => {
  try {
    const localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    store.dispatch(videoRoomsActions.setLocalSteram(localStream));
  } catch (error) {
    throw error;
  }
};

export const connectWithPeerServer = () => {
  peer = new Peer(undefined, {
    host: 'react-socket-io-webrtc-server.onrender.com',
    path: '/peerjs',
    port: 443,
  });

  peer.on('open', (id) => {
    peerId = id;
  });

  peer.on('call', async (call) => {
    const { localStream } = store.getState().videoRooms;

    call.answer(localStream);
    call.on('stream', (remoteStream) => {
      store.dispatch(videoRoomsActions.setRemoteSteram(remoteStream));
    });
  });
};

export const call = (data) => {
  const { newParticipantPeerId } = data;
  const { localStream } = store.getState().videoRooms;
  const peerCall = peer.call(newParticipantPeerId, localStream);

  peerCall.on('stream', (remoteStream) => {
    store.dispatch(videoRoomsActions.setRemoteSteram(remoteStream));
  });
};

export const disconnect = () => {
  for (const connection of Object.keys(peer.connections)) {
    peer.connections[connection].forEach((c) => {
      c.peerConnection.close();

      if (c.close) {
        c.close();
      }
    });
  }

  store.dispatch(videoRoomsActions.setRemoteSteram(null));
};
