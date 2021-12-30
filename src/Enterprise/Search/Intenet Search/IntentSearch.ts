import {AxiosResponse} from 'axios';
import Api from '../../../helpers/Api';
import ZoomInfoException from '../../../helpers/Exception/ZoomInfoException';
import {IIntentSearchResults, IIntentSpecificSearch, IIntentCompanySearch} from './interfaces';

/**
 * @class IntentSearch
 * @docs https://api-docs.zoominfo.com/#a138aca7-86eb-4dd4-b0d8-f72ff32090ea
 */
export default class IntentSearch extends Api {
  constructor(accessToken: string) {
    super(accessToken);
  }

  /**
   * Use this endpoint to search for recommended contacts based on intent data.
   * @param params IIntentSearch
   */
  public async getIntentSpecificSearch(
    params: IIntentSpecificSearch
  ): Promise<IIntentSearchResults> {
    return this.post('/search/intent', params)
      .then((res: AxiosResponse) => {
        let data: IIntentSearchResults = res.data;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Use this endpoint to search for companies based on intent data.
   * @param params IIntentSearch
   * @returns IIntentSearchResults
   */
  public async getIntentCompanySearch(params: IIntentCompanySearch): Promise<IIntentSearchResults> {
    return this.post('/search/intent', params)
      .then((res: AxiosResponse) => {
        let data: IIntentSearchResults = res.data;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the Intent Search endpoint.
   * @returns AxiosResponse['data']
   */
  public async getIntentSearchInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/intent/search')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields included in the response for the Intent Search endpoint.
   * @returns AxiosResponse['data']
   */
  public async getIntentSearchOutputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/outputfields/intent/search')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
