import React from 'react';
/**
 * @name onGetProductDetail
 */

export type detailProps = {
  name: string;
  en_name: string;
  sub: string;
  price: number;
};

const detail_data: detailProps = {
  name: '저스트 앵 끌루 링',
  en_name: 'JUSTE UN CLOU RING',
  sub: '화이트 골드, 다이아몬드',
  price: 12500000,
};

export const onGetProductDetail = (id: string) => {
  return detail_data;
};
