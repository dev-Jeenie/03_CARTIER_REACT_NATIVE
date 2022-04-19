type AuthType = 'account' | 'token' | 'fail';

interface IAuthState {
  type: AuthType;
  auth: any;
  error?: any;
  state: 'success' | 'fail' | 'none';
}
interface IAuthAction {
  type: AuthType;
  result?: any;
  error?: any;
  state: 'success' | 'fail' | 'none';
}
