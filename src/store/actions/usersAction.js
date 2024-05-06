import store from '../store';
import { actions as mapActions } from '../../features/map';

export const onlineUsersHandler = (socketId, usersData) => {
  const onlineUsers = usersData.map((user) => ({
    ...user,
    myself: user.socketId === socketId,
  }));

  store.dispatch(mapActions.setOnlineUsers(onlineUsers));
};

export const disconnectHandler = (disconnectedSocketId) => {
  store.dispatch(mapActions.removeDisconnectedUser(disconnectedSocketId));
};
