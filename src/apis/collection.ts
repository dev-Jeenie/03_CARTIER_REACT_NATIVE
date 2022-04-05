/**
 * @name onGetCollectionDetailDeta
 */

import {ImageSourcePropType} from 'react-native';
import {collection_data} from '../mockdata/collectionData';

export type productType = {
  id: string;
  name: string;
  des: string;
  price: string;
  image: ImageSourcePropType;
};

export const onGetCollectionDetailDeta = async (id: string) => {
  // console.log('collection_data :', collection_data);
  return await collection_data;
};

// /**
//  * @name onGetThemeContents 메인페이지 테마 모아보기
//  * @returns result onGetThemeContents
//  */
//  export const onGetThemeContents = async ({
//   limit = 10,
//   order = 'DESC',
//   page = 0,
//   sort = 'createdAt',
// }: IPageProps) => {
//   const { data, ok } = await requestApiT<ThemeContents>({
//     url: `${MAIN_CONTENTS}/theme/main`,
//     method: Method.GET,
//     params: {
//       limit,
//       order,
//       page,
//       sort,
//     },
//   });
//   return ok ? data : undefined;
// };

// /**
