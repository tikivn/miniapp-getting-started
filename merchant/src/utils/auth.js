import myx from '../utils/myx';
import EventEmitter from '../utils/emitter';
import { EVENTS } from '../utils/constant';

let auth = null;
const authEvent = new EventEmitter();

export const emitAuthSuccess = (auth) =>
  authEvent.emit(EVENTS.AUTH_SUCCESS, auth);

export const onAuthSuccess = (func) => authEvent.on(EVENTS.AUTH_SUCCESS, func);

export const getAuth = async ({
  isLoginRequired = false,
  fallbackAction = () => {},
}) => {
  if (!isLoginRequired || ((await myx.isLoggedIn()) && auth)) return auth;
  try {
    auth = await myx.getUserInfo();
    emitAuthSuccess(auth);
  } catch (error) {
    fallbackAction(error);
  }
  return auth;
};

export { auth };
