import { AxiosResponse } from 'axios';
import { IContactSearch, IContactSearchResults } from './interfaces';
import Api from '../../../helpers/Api';
import ZoomInfoException from '../../../helpers/Exception/ZoomInfoException';

/**
 * @class ContactSearch
 * @docs https://api-docs.zoominfo.com/#7c634f30-5b38-4453-b9d1-7b1632e0b23e
 */
export default class ContactSearch extends Api {
  constructor(protected accessToken: string) {
    super(accessToken);
  }

  /**
   * Use Contact Search to retrieve contacts using valid query parameters.
   * @param params IContactSearch
   * @returns IContactSearchResults
   */
  public async getContactSearch(params: IContactSearch): Promise<IContactSearchResults> {
    return this.post('/search/contact', params)
      .then((res: AxiosResponse) => {
        const { data } = res;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the Contact Search endpoint.
   * @returns AxiosResponse['data']
   */
  public async getContactSearchInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/contact/search')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields included in the response for the Contact Search endpoint.
   * @returns AxiosResponse['data']
   */
  public async getContactSearchOutputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/outputfields/contact/search')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
