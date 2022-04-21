import React from 'react';
import {ImageSourcePropType} from 'react-native';
import assets from '../../assets';
/**
 * @name onGetProductDetail
 */

export type detailProps = {
  id?: string;
  name: string;
  en_name: string;
  des: string;
  price: number;
  images: ImageSourcePropType[];
  info?: string;
};

const detail_data: detailProps = {
  name: '저스트 앵 끌루 링',
  en_name: 'JUSTE UN CLOU RING',
  des: '화이트 골드, 다이아몬드',
  price: 12500000,
  images: [
    assets.juste_r_yg,
    assets.juste_r_yg_front,
    assets.juste_r_yg_right,
    assets.juste_r_yg_top,
  ],
  info: '저스트 앵 끌루 링, 18K 화이트 골드, 총 0.59캐럿의 브릴리언트 컷 다이아몬드 77개 세팅.\n폭 : 1.8MM',
};

export const onGetProductDetail = (id: string) => {
  console.log('api로 전달된 id ======', id);
  return detail_data;
};

