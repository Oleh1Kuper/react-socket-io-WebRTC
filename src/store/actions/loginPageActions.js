import * as socketConnection from '../../socket/socket';

const proceedWithLogin = (data) => {
  socketConnection.login(data);
};

export default proceedWithLogin;
