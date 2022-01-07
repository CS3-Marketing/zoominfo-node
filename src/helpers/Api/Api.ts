import axios, {AxiosError, AxiosResponse} from 'axios';
import {pRateLimit} from 'p-ratelimit';
import ZoomInfoException from '../Exception/ZoomInfoException';

export default class Api {
  public accessToken: string;

  private apiURL = 'https://api.zoominfo.com';

  private limit;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
    this.limit = pRateLimit({
      interval: 1000,
      rate: 25,
      concurrency: 25,
    });
  }

  /**
   * GET request from ZoomInfo API
   * @param endpoint
   * @returns AxiosRespone
   */
  protected async get(endpoint: string): Promise<AxiosResponse<any>> {
    return this.limit(async (): Promise<AxiosResponse<any>> => {
      return axios
        .get(`${this.apiURL}${endpoint}`, {
          headers: {Authorization: 'Bearer ' + this.accessToken},
        })
        .then((res: AxiosResponse) => res)
        .catch((err: AxiosError) => {
          if (err.response) {
            const errorStatus = err.response.status;
            throw new ZoomInfoException(errorStatus, err.message, err.response.data);
          } else throw new ZoomInfoException(500, err.message);
        });
    });
  }

  /**
   * POST request from ZoomInfo API
   * @param endpoint
   * @param data
   * @returns AxiosRespone
   */
  protected async post(endpoint: string, data: any): Promise<AxiosResponse<any>> {
    return this.limit(async (): Promise<AxiosResponse<any>> => {
      return axios
        .post(`${this.apiURL}${endpoint}`, data, {
          headers: {Authorization: 'Bearer ' + this.accessToken},
        })
        .then((res: AxiosResponse) => res)
        .catch((err: AxiosError) => {
          if (err.response) {
            const errorStatus = err.response.status;
            throw new ZoomInfoException(errorStatus, err.message, err.response.data);
          } else throw new ZoomInfoException(500, err.message);
        });
    });
  }

  /**
   * PUT request from ZoomInfo API
   * @param endpoint
   * @param data
   * @returns AxiosResponse
   */
  protected async put(endpoint: string, data: any): Promise<AxiosResponse<any>> {
    return this.limit(async (): Promise<AxiosResponse<any>> => {
      return axios
        .put(`${this.apiURL}${endpoint}`, data, {
          headers: {Authorization: 'Bearer ' + this.accessToken},
        })
        .then((res: AxiosResponse) => res)
        .catch((err: AxiosError) => {
          if (err.response) {
            const errorStatus = err.response.status;
            throw new ZoomInfoException(errorStatus, err.message, err.response.data);
          } else throw new ZoomInfoException(500, err.message);
        });
    });
  }

  /**
   * DELETE request from ZoomInfo API
   * @param endpoint
   * @returns AxiosRespone
   */
  protected async delete(endpoint: string): Promise<AxiosResponse<any>> {
    return this.limit(async (): Promise<AxiosResponse<any>> => {
      return await axios
        .delete(`${this.apiURL}${endpoint}`, {
          headers: {Authorization: 'Bearer ' + this.accessToken},
        })
        .then((res: AxiosResponse) => res)
        .catch((err: AxiosError) => {
          if (err.response) {
            const errorStatus = err.response.status;
            throw new ZoomInfoException(errorStatus, err.message, err.response.data);
          } else throw new ZoomInfoException(500, err.message);
        });
    });
  }
}
