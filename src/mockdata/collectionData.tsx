import {ImageSourcePropType} from 'react-native';
import assets from '../../assets';
import {productType} from '../apis/collection';

export type collectionDetailType = {
  title: string;
  des: string;
  thumnail: ImageSourcePropType;
  products: productsType;
};

export type productsType = {
  br: productType[];
  er: productType[];
  r: productType[];
  nk: productType[];
};

export const collection_data: collectionDetailType = {
  title: 'JUSTE UN CLU',
  des: '설명설명설명',
  thumnail: assets.collection_juste,
  products: {
    br: [
      {
        id: 'br_01',
        name: '저스트 앵 끌루 팔찌',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_yg,
      },
      {
        id: 'br_02',
        name: '저스트 앵 끌루 팔찌',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_yg_2,
      },
      {
        id: 'br_03',
        name: '저스트 앵 끌루 팔찌',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_wg,
      },
      {
        id: 'br_04',
        name: '저스트 앵 끌루 팔찌',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_wg_3,
      },
      {
        id: 'br_05',
        name: '저스트 앵 끌루 팔찌',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_yg,
      },
      {
        id: 'br_06',
        name: '저스트 앵 끌루 팔찌',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_wg_2,
      },
    ],
    er: [
      {
        id: 'er_01',
        name: '저스트 앵 끌루 귀걸이',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_wg_2,
      },
      {
        id: 'er_02',
        name: '저스트 앵 끌루 귀걸이',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_wg,
      },
      {
        id: 'er_03',
        name: '저스트 앵 끌루 귀걸이',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_wg_3,
      },
      {
        id: 'er_04',
        name: '저스트 앵 끌루 귀걸이',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_wg,
      },
      {
        id: 'er_05',
        name: '저스트 앵 끌루 귀걸이',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_yg,
      },
      {
        id: 'er_06',
        name: '저스트 앵 끌루 귀걸이',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_wg_2,
      },
    ],
    r: [
      {
        id: 'r_01',
        name: '저스트 앵 끌루 반지',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_yg,
      },
      {
        id: 'r_02',
        name: '저스트 앵 끌루 반지',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_wg_2,
      },
      {
        id: 'r_03',
        name: '저스트 앵 끌루 반지',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_wg_3,
      },
      {
        id: 'r_04',
        name: '저스트 앵 끌루 반지',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_wg,
      },
      {
        id: 'r_05',
        name: '저스트 앵 끌루 반지',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_yg,
      },
      {
        id: 'r_06',
        name: '저스트 앵 끌루 반지',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_wg_2,
      },
    ],
    nk: [
      {
        id: 'nk_01',
        name: '저스트 앵 끌루 목걸이',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_yg_3,
      },
      {
        id: 'nk_02',
        name: '저스트 앵 끌루 목걸이',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_wg,
      },
      {
        id: 'nk_03',
        name: '저스트 앵 끌루 목걸이',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_wg_3,
      },
      {
        id: 'nk_04',
        name: '저스트 앵 끌루 목걸이',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_wg,
      },
      {
        id: 'nk_05',
        name: '저스트 앵 끌루 목걸이',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_yg,
      },
      {
        id: 'nk_06',
        name: '저스트 앵 끌루 목걸이',
        des: '화이트골드 등',
        price: '12500000',
        image: assets.juste_r_wg_2,
      },
    ],
  },
};
