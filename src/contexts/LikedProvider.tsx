import React, {createContext} from 'react';
import {detailProps} from '../apis/main';
import {getStorage} from '../libs/AsyncStorageManager';
import {LIKE_DATA} from '../pages/mypage/Mypage';

type LikedInfo = {
  user_name?: string;
} & detailProps;

export interface ILikedContext {
  LikedInfo: LikedInfo[];
  setLikedInfo: (type: LikedInfo[] | undefined) => void;
}

const defaultValue = [
  {
    id: '',
    name: '',
    en_name: '',
    des: '',
    price: 0,
    images: [],
    info: '',
  },
];

const defaultLikedContext: ILikedContext = {
  LikedInfo: defaultValue,
  setLikedInfo: (info: LikedInfo[] | undefined) => {},
};

const LikedContext = createContext(defaultLikedContext);

interface Iprops {
  children: React.ReactNode;
}

const LikedProvider = ({children}: Iprops) => {
  const [LikedInfo, setLikedInfoState] =
    React.useState<LikedInfo[]>(defaultValue);
  const setLikedInfo = (info: LikedInfo[] | undefined) =>
    setLikedInfoState(info ? info : defaultValue);

  const initData = async () => {
    const res = await getStorage(LIKE_DATA);
    console.log('!!!!!!!!!!!LikedProvider의 데이터 res :::::', JSON.parse(res));
    setLikedInfoState(JSON.parse(res));
  };
  console.log('길이!@#!!##!##@', LikedInfo?.length);
  React.useEffect(() => {
    initData();
  }, []);

  return (
    <LikedContext.Provider value={{LikedInfo, setLikedInfo}}>
      {children}
    </LikedContext.Provider>
  );
};

const useLikedContext = () => {
  return React.useContext(LikedContext);
};

export {useLikedContext, LikedProvider};
