import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import ZoomInfoException from '../../../helpers/Exception/ZoomInfoException';
import { ICompanySearch, ICompanySearchResults } from './interfaces';

/**
 * @class CompanySearch
 * @docs https://api-docs.zoominfo.com/#4845df6a-2b3c-4e87-b640-e07e8c73f31d
 */
export default class CompanySearch extends Api {
  constructor(protected accessToken: string) {
    super(accessToken);
  }

  /**
   * Returns a list of Companies from ZoomInfo's data which meet the specified search criteria.
   * @param params ICompanySearch
   * @erturns ICompanySearchResults
   */
  public async getCompanySearch(params: ICompanySearch): Promise<ICompanySearchResults> {
    return this.post('/search/company', params)
      .then((res: AxiosResponse) => {
        const { data } = res;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the Company Search endpoint.
   * @returns AxiosResponse['data']
   */
  public async getCompanySearchInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/company/search')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields included in the response for the Company Search endpoint.
   * @returns AxiosResponse['data']
   */
  public async getCompanySearchOutputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/outputfields/company/search')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
