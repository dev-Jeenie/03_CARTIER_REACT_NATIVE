import React, {createContext} from 'react';
import {detailProps} from '../apis/main';
import {getStorage} from '../libs/AsyncStorageManager';

type orderInfo = {
  user_name?: string;
} & detailProps;

export interface IOrderContext {
  orderInfo: orderInfo[];
  setOrder: (type: orderInfo[] | undefined) => void;
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

const defaultOrderContext: IOrderContext = {
  orderInfo: defaultValue,
  setOrder: (info: orderInfo[] | undefined) => {},
};

const OrderContext = createContext(defaultOrderContext);

interface Iprops {
  children: React.ReactNode;
}

const OrderProvider = ({children}: Iprops) => {
  const [orderInfo, setOrderInfo] = React.useState<orderInfo[]>(defaultValue);
  const setOrder = (info: orderInfo[] | undefined) =>
    setOrderInfo(info ? info : defaultValue);

  const initData = async () => {
    const res = await getStorage('cart_data');
    console.log('!!!!!!!!!!!OrderProvider의 데이터 res :::::', JSON.parse(res));
    setOrderInfo(JSON.parse(res));
  };
  console.log('길이!@#!!##!##@', orderInfo?.length);
  React.useEffect(() => {
    initData();
  }, []);

  return (
    <OrderContext.Provider value={{orderInfo, setOrder}}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrderContext = () => {
  return React.useContext(OrderContext);
};

export {useOrderContext, OrderProvider};
