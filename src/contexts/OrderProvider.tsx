import React, {createContext} from 'react';
import {detailProps} from '../apis/main';
import {getStorage} from '../libs/AsyncStorageManager';

type orderInfo = {
  user_name?: string;
  payMethod?: string;
  totalPrice?: string;
  products: detailProps[];
};

export interface IOrderContext {
  orderInfo: orderInfo;
  setOrderInfo: (type: orderInfo | undefined) => void;
}

const defaultValue: orderInfo = {
  user_name: '',
  payMethod: '',
  totalPrice: '',
  products: [
    {
      id: '',
      name: '',
      en_name: '',
      des: '',
      price: 0,
      images: [],
      info: '',
    },
  ],
};

const defaultOrderContext: IOrderContext = {
  orderInfo: defaultValue,
  setOrderInfo: (info: orderInfo | undefined) => {},
};

const OrderContext = createContext(defaultOrderContext);

interface Iprops {
  children: React.ReactNode;
}

const OrderProvider = ({children}: Iprops) => {
  const [orderInfo, setOrderInfoState] =
    React.useState<orderInfo>(defaultValue);

  const setOrderInfo = (info: orderInfo | undefined) =>
    setOrderInfoState(info ? info : defaultValue);

  // const initData = async () => {
  //   const res = await getStorage('order_data');
  //   // order_data로 들어있는 데이터 불러오기
  //   // const res = await getStorage('cart_data');
  //   console.log('!!!!!!!!!!!OrderProvider의 데이터 res :::::', JSON.parse(res));
  //   setOrderInfoState(JSON.parse(res));
  // };;
  // console.log('길이!@#!!##!##@', orderInfo?.length);
  // React.useEffect(() => {
  //   initData();
  // }, []);

  return (
    <OrderContext.Provider value={{orderInfo, setOrderInfo}}>
      {children}
    </OrderContext.Provider>
  );
};;;

const useOrderContext = () => {
  return React.useContext(OrderContext);
};

export {useOrderContext, OrderProvider};
