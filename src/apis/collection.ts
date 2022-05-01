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
  return await collection_data;
};
