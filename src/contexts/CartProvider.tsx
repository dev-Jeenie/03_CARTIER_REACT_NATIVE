import React, {createContext} from 'react';

type cartInfo = {
  id: string;
  name: string;
  price: number;
  count: number;
};

export interface ICartContext {
  cartInfo: cartInfo;
  setCart: (type: cartInfo | undefined) => void;
}

const defaultValue = {
  id: '',
  name: '',
  price: 0,
  count: 0,
};

const defaultCartContext: ICartContext = {
  cartInfo: defaultValue,
  setCart: (info: cartInfo | undefined) => {},
};

const CartContext = createContext(defaultCartContext);

interface Iprops {
  children: React.ReactNode;
}

const CartProvider = ({children}: Iprops) => {
  const [cartInfo, setCartInfo] = React.useState<cartInfo>(defaultValue);
  const setCart = (info: cartInfo | undefined) =>
    setCartInfo(info ? info : defaultValue);

  return (
    <CartContext.Provider value={{cartInfo, setCart}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return React.useContext(CartContext);
};

export {useCartContext, CartProvider};
