import {createSlice} from '@reduxjs/toolkit';

// store => root reducer(state) => user slice, order slice
// state.user 안에서 state.user.email 이런식으로 접근할 수 있게
// state.order

// state.ui
// const initialState = {
//   loading: false
// }

// 이렇게 전체페이지에 로딩이 걸리게도 한다

// 이러한 state들을 변경시키는 것이 action
// dispatch되면 reducer에서 실행이 되는 것

// action: state를 바꾸는 동작
// dispatch: 그 action을 실행하는 함수
// reducer: sction이 실제로 실행되면 state를 바꾸는 로직

// action을 dispatch안에 넣어서 호출을 해야!
// 그 action이 실제로 실행되어서 reducer가 동작한다

// dispatch(userSlice.actions.setUser({})) => dispatch 안에 action을 넣어서 호출하면
// 그 action이 실행되어서 그 안에 있는 reducer인 setUser가 동작해서 state를 바꾼다

const initialState = {
  name: '',
  email: '',
  accessToken: '',
  refreshToken: '',
};
// 전역 상태 (global state)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      // dispatch한 것들이 action.payload에 담겨서 들어옴
      // 데이터가 여러개일 경우에는 이렇게 객체로 보내고
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setName(state, action) {
      state.name = action.payload;
    },
  },
  // 동기 action
  extraReducers: builder => {},
  // 비동기 action
});

export default userSlice;

// 앱에서 서버로 요청을 보낼때는, 서버는 기본적으로 요청을 누가 보낸건지 모른다.
// 요청에는 아무런 상태가 없기 때문에.
// 그래서 요청을 보낼 때에 힌트! 토큰을 넣어서 보내면 서버가 토큰을 까보고 누군지 알아낸다.
// 요청한 사람이 누구인지 알려주는 것이 바로 토큰

// 서버에 요청을 보낼 땐 accessToken 안에 유저 정보가 담겨있다
// 그럼 refreshToken은 어디에 쓰지?
// 만약 accessToken이 탈취당해서 해커가 내 accessToken를 써서 서버에 요청을 보내면 정상적으로 응답해버려서 큰일남
// 그래서 accessToken에는 유효기간을 둔다. 짧은 것이 좋음
// 은행 어플을 사용하면 로그인 유지기간 30분, 연장하시겠습니까라는 알림이 뜨는데 이게 바로 accessToken 유효기간이 30분으로 정해져있는 것
// 그럼 이 유효기간 연장을 어떻게 하느냐?
// refresh 토큰을 서버로 보내고, 그럼 서버는 accessToken을 새로 발급해준다. 그럼 유효기간도 다시 갱신됨
// 그럼 refresh 토큰까지 같이 털려버리면 진짜 답이 없는 상황임. 그러니 refresh토큰은 반드시 암호화를 해야함
// 토큰 정보안에 유효기간까지 들어있음

// accessToken과 refreshToken은 저장소를 분리하는 것이 좋다
// 앱에서는 accessToken은 redux에, refreshToken은 EncryptedStorage에
// 웹에서는 accessToken은 메모리에, refreshToken은 LocalStorage에 넣는 식으로
// accessToken은 털려도 유효기간이 있는데, refreshToken은 유효기간이 훨씬 길어서 위험하기때문

// 그래야 혹시나 털렸을 때 한쪽만 훔쳐갈 수 있도록.

// 구글에 가보면 현재 로그인되어있는 기기들을 볼 수 있다.
// 구글은 이런 refreshToken을 DB화해놓고 있어서, 그 중 하나에서 강제로 로그아웃시키기를 누르면 refreshToken을 없애버리는 방식인 것.
