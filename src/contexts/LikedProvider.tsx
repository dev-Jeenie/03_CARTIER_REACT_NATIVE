import React, {createContext} from 'react';
import {detailProps} from '../apis/main';
import {getStorage} from '../libs/AsyncStorageManager';
import {LIKE_DATA} from '../pages/mypage/Mypage';

type LikedInfo = {
  user_name?: string;
} & detailProps;

export interface ILikedContext {
  LikedInfo: LikedInfo[];
  setLiked: (type: LikedInfo[] | undefined) => void;
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
  setLiked: (info: LikedInfo[] | undefined) => {},
};

const LikedContext = createContext(defaultLikedContext);

interface Iprops {
  children: React.ReactNode;
}

const LikedProvider = ({children}: Iprops) => {
  const [LikedInfo, setLikedInfo] = React.useState<LikedInfo[]>(defaultValue);
  const setLiked = (info: LikedInfo[] | undefined) =>
    setLikedInfo(info ? info : defaultValue);

  const initData = async () => {
    const res = await getStorage(LIKE_DATA);
    console.log('!!!!!!!!!!!LikedProvider의 데이터 res :::::', JSON.parse(res));
    setLikedInfo(JSON.parse(res));
  };
  console.log('길이!@#!!##!##@', LikedInfo?.length);
  React.useEffect(() => {
    initData();
  }, []);

  return (
    <LikedContext.Provider value={{LikedInfo, setLiked}}>
      {children}
    </LikedContext.Provider>
  );
};

const useLikedContext = () => {
  return React.useContext(LikedContext);
};

export {useLikedContext, LikedProvider};
