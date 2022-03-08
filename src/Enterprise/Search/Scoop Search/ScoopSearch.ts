import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import ZoomInfoException from '../../../helpers/Exception/ZoomInfoException';
import { IScoopSearch, IScoopSearchResults } from './interfaces';

/**
 * @class ScoopSearch
 * @docs https://api-docs.zoominfo.com/#5e4c2ac9-caa7-41ef-bdae-efff022cff30
 */
export default class ScoopSearch extends Api {
  constructor(protected accessToken: string) {
    super(accessToken);
  }

  /**
   * Returns a list of Scoops from ZoomInfo's data which meet the specified search criteria.
   * @param params IScoopSearch
   * @returns IScoopSearchResults
   */
  public async getScoopSearch(params: IScoopSearch): Promise<IScoopSearchResults> {
    return this.post('/search/scoop', params)
      .then((res: AxiosResponse) => {
        const { data } = res;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the Scoop Search endpoint.
   * @returns AxiosResponse['data']
   */
  public async getScoopSearchInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/scoop/search')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields included in the response for the Scoop Search endpoint.
   *@returns AxiosResponse['data']
   */
  public async getScoopSearchOutputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/outputfields/scoop/search')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
