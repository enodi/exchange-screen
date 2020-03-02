import axios from "axios";

const baseURL = `${process.env.REACT_APP_FX_BASE_URL}`;

export const axiosInstance = axios.create({ baseURL });

export class Api {
  static get(url, params, conf) {
    const config = { params, ...conf };
    return axiosInstance.get(url, config);
  }

  static all(url, params, conf) {
    const config = { params, ...conf };
    return axiosInstance.all(url, config);
  }
}
