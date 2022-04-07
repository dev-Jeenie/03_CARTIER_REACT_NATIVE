import React from 'react';
import {ImageSourcePropType} from 'react-native';
import assets from '../../assets';
/**
 * @name onGetProductDetail
 */

export type detailProps = {
  name: string;
  en_name: string;
  des: string;
  price: number;
  images: ImageSourcePropType[];
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
  //   info:
  //   {
  // 수입자 ㈜ 리치몬트 코리아

  // 까르띠에 보증서 동봉

  // 품질보증기준 : 관련 법 및 소비자 분쟁해결 규정에 따름

  // 제품 설명
  // 저스트 앵 끌루 링, 18K 화이트 골드, 총 0.59캐럿의 브릴리언트 컷 다이아몬드 77개 세팅. 폭 : 1.8MM

  // 무료 배송 및 반품 안내
  // 까르띠에 온라인 부티크에서는 모든 구매건에 대하여 무료 배송 서비스 및 무료반품 서비스를 제공하고 있습니다. 교환 및 반품의 경우, 판매 약관에 따라 상품 수령 후 30일 이내에 무료 교환/반품이 가능합니다. 자세한 사항은 판매약관 및 교환/환불정책 확인 부탁드립니다.

  // 배송 안내
  // 일반 배송: 5백만원 미만의 구매건의 경우 우체국택배를 통하여 안전하게 배송되며, 영업일 3~5일 소요됩니다.
  // 특별 배송: 5백만원 이상의 구매건의 경우 발렉스를 통하여 약속된 날짜에 맞춰 안전하게 배송됩니다.}
  // };
};

export const onGetProductDetail = (id: string) => {
  console.log('api로 전달된 id ======', id);
  return detail_data;
};
