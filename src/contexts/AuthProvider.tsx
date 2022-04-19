import React, {createContext, Dispatch, useContext, useReducer} from 'react';

const defaultAuthState: IAuthState = {
  auth: undefined,
  state: 'none',
  type: 'token',
  error: undefined,
};

// const defaultAuthAction: IAuthAction = {
//   result: undefined,
//   state: 'none',
//   type: 'token',
//   error: undefined,
// };

const AuthContext = createContext<IAuthState>(defaultAuthState);
const AuthDispatchContext = createContext<Dispatch<IAuthAction> | undefined>(
  undefined,
);

const authReducer = (state: IAuthState, action: IAuthAction): IAuthState => {
  return {
    ...state,
    auth: action.result,
    state: action.state,
  };
};

const onApiCall = async (type: AuthType, reqApi: Promise<any>) => {
  const res = await reqApi;
  switch (type) {
    case 'token':
      return {
        type,
        result: res,
        error: undefined,
        state: res === false ? 'fail' : 'success',
      };
    default:
      return {
        type,
        result: undefined,
        error: undefined,
        state: 'fail',
      };
  }
};

const dispatchAction = async (
  type: AuthType,
  dispatch: Dispatch<IAuthAction>,
  requestInfo: any,
) => {
  switch (type) {
    case 'token':
      const token = (await onApiCall(
        type,
        getAuthToken(requestInfo.email, requestInfo.password),
      )) as IAuthAction;
      return dispatch(token);
    default:
      return dispatch({
        type: 'fail',
        result: undefined,
        error: undefined,
        state: 'fail',
      });
  }
};

interface Iprops {
  children: JSX.Element | Array<JSX.Element>;
}

const AuthProvider = ({children}: Iprops) => {
  const [state, dispatch] = useReducer(authReducer, defaultAuthState);
  return (
    <AuthContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('AuthContext is undefined');
  return context;
};

const useDispatchContext = () => {
  const context = useContext(AuthDispatchContext);
  if (!context) throw new Error('DispatchContext is undefined');
  return context;
};

export {useAuthContext, useDispatchContext, AuthProvider, dispatchAction};
