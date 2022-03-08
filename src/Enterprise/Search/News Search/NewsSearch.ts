import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import ZoomInfoException from '../../../helpers/Exception/ZoomInfoException';
import { INewsSearch, INewsSearchResults } from './interfaces';

/**
 * @class NewsSearch
 * @docs https://api-docs.zoominfo.com/#30b8d735-cfa2-44ca-b7e8-2b9b16786df1
 */
export default class NewsSearch extends Api {
  constructor(protected accessToken: string) {
    super(accessToken);
  }

  /**
   * Use News Search to retrieve news using valid query parameters.
   * @param params INewsSearch
   * @returns INewsSearchResults
   */
  public async getNewsSearch(params: INewsSearch): Promise<INewsSearchResults> {
    return this.post('/search/news', params)
      .then((res: AxiosResponse) => {
        const { data } = res;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the News Search endpoint.
   * @returns AxiosResponse['data']
   */
  public async getNewsSearchInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/news/search')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields included in the response for the News Search endpoint.
   * @returns AxiosResponse['data']
   */
  public async getNewsSearchOutputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/outputfields/news/search')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
