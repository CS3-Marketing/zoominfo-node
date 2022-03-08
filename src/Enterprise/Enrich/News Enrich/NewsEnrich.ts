import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import ZoomInfoException from '../../../helpers/Exception/ZoomInfoException';
import { INewsEnrich, INewsEnrichResults } from './interfaces';

/**
 * @class NewsEnrich
 * @docs https://api-docs.zoominfo.com/#a7f26c01-cc5d-4291-a3e6-5ff41b779420
 */
export default class NewsEnrich extends Api {
  constructor(protected accessToken: string) {
    super(accessToken);
  }

  /**
   * Use this endpoint to enrich news data for a company.
   * @param params INewsEnrich
   * @returns INewsEnrichResults
   */
  public async getNewsEnrich(params: INewsEnrich): Promise<INewsEnrichResults> {
    return this.post('/enrich/news', params)
      .then((res: AxiosResponse) => {
        const { data } = res;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the News Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getNewsEnrichInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/news/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields included in the response for the News Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getNewsEnrichOutputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/outputfields/news/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
