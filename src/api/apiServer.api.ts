import axios from 'axios';
import { Md5 } from 'ts-md5';

const privateKey = process.env.REACT_APP_PRIVATE_KEY as string;
const apikey = process.env.REACT_APP_PUBLIC_KEY;
const ts = Number(new Date());
const hash = Md5.hashStr(ts + privateKey + apikey);

const apiServer = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_SERVER_URL,
  params: {
    ts,
    hash,
    apikey,
  },
});

export default apiServer;
