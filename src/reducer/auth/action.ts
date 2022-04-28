// import {onAuthme} from '#apis/auth';
// import {IRes, setToken} from '#apis/index';

// type ReducerType =
//   | 'initAuth'
//   | 'setPrincipal'
//   | 'clearPrincipal'
//   | 'fail'
//   | 'loading'
//   | 'setCountryCode'
//   | 'initCode'
//   | 'setRegionCode'
//   | 'setSexCode'
//   | 'setAdSCode'
//   | 'setCmCode'
//   | 'setCouponCode'
//   | 'setMemberCode'
//   | 'setMainSurgeryCode'
//   | 'setSubSurgeryCode_1'
//   | 'setSubSurgeryCode_2'
//   | 'setSubSurgeryCode_3'
//   | 'treatmentDetailTag'
//   | 'bankNameCode';

// type IAccountInfo = {
//   state?: string;
//   birth?: string;
//   country_code?: string;
//   created_at?: string;
//   gender_code?: string;
//   id?: number;
//   is_block?: boolean;
//   is_enabled?: true;
//   name?: string;
//   phone?: string;
//   profile_imgs?: number[];
//   region_code?: string;
//   type?: string;
//   updated_at?: string;
//   access_token?: string;
//   message?: string;
//   email?: string;
// };

// export const getAuthInfo: any = () => {
//   return (
//     dispatch: (arg0: {type: ReducerType; data?: IRes<IAccountInfo>}) => void,
//   ) => {
//     return new Promise((resolve, reject) => {
//       dispatch({type: 'loading', data: undefined});
//       onAuthme()
//         .then(response => {
//           if (response) {
//             dispatch({type: 'setPrincipal', data: response});
//             resolve(response);
//           } else {
//             dispatch({type: 'fail', data: undefined});
//             resolve({type: 'fail', data: undefined});
//           }
//         })
//         .catch(e => {
//           dispatch({type: 'fail', data: e});
//           reject(e);
//         });
//     });
//   };
// };

// export const clear = () => {
//   setToken(undefined, undefined);
//   return (dispatch: any) => dispatch({type: 'clearPrincipal'});
// };
