import axios from 'axios';

export const Method = {
  GET: 'get',
  POST: 'post',
  PATCH: 'patch',
  PUT: 'put',
  DELETE: 'delete',
};

interface IReqObj {
  url: string;
  method: typeof Method;
  headers?: Record<string, string>;
  params?: any;
  signal?: AbortSignal;
  isAuth?: boolean;
}

interface IRes<T> {
  ok: boolean;
  status: number;
  statusText: string;
  data?: T;
}

const RequestApi = async (req: IReqObj) => {
  const homeUrl = req?.isAuth
    ? `${HOME_URL}${req.url}`
    : `${HOME_URL}/api${req.url}`;

  req.url = homeUrl;

  const opt: RequestInit = {
    method: typeof req.method || Method.GET,
    credentials: 'include',
  };

  if (req.params) {
    if (
      Object.prototype.toString.call(req.params) === '[object FormData]' ||
      req.params instanceof FormData
    ) {
      opt.body = req.params;
    } else {
      opt.headers = {'Content-Type': 'application/json'};
      opt.body = req.params;
    }
  }
  if (req.headers) {
    opt.headers = {...opt.headers, ...req.headers};
  }
  if (req.signal) {
    opt.signal = req.signal;
  }

  const reqAxios =
    typeof req.method === Method.POST
      ? restApi?.post
      : typeof req.method === Method.PUT
      ? restApi.put
      : typeof req.method === Method.DELETE
      ? restApi.delete
      : restApi.get;

  const reqConfig = {
    headers: opt.headers,
    timeout: 2500,
    auth: req?.isAuth ? AUTH_REVIEWPOT : undefined,
  };

  console.log('req : ', req);
  console.log('opt.body : ', opt.body);

  return reqAxios(req.url, opt.body, reqConfig)
    .then(res => {
      return {
        ok: true,
        status: res?.status,
        statusText: res?.statusText,
        data: res?.data,
      };
    })
    .catch(error => {
      return error?.response
        ? {
            ok: false,
            status: error?.response?.status || 'error',
            statusText: error?.response?.statusText || 'error',
            data: error?.response?.data || '',
          }
        : {
            ok: false,
            status: 404,
            statusText: '',
            data: '',
          };
    });
};

export const requestApiT = async <T>(req: IReqObj): Promise<IRes<T>> => {
  return RequestApi(req);
};
export let restApi = axios.create({
  baseURL,
});
