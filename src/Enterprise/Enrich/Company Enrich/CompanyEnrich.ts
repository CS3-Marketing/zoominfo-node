import {AxiosResponse} from 'axios';
import Api from '../../../helpers/Api';
import ZoomInfoException from '../../../helpers/Exception/ZoomInfoException';
import {ICompanyEnrich, ICompanyEnrichResults, ICompanyObject, outputFields} from './interfaces';

/**
 * @class CompanyEnrich
 * @docs https://api-docs.zoominfo.com/#dba1b1d1-e81c-4bb6-b7dc-6487eebcd4e6
 */
export default class CompanyEnrich extends Api {
  constructor(accessToken: string) {
    super(accessToken);
  }

  /**
   * Use Company Enrich to retrieve company detail using valid query parameters.
   *
   * Note: You can input a maximum of 25 companies in a single enrich request, returning the equivalent number of matching records
   * @param params Array<ICompanyObject>
   * @returns ICompanyEnrichResults
   */
  public async getCompanyEnrich(params: Array<ICompanyObject>): Promise<ICompanyEnrichResults> {
    let data: ICompanyEnrich = {
      matchCompanyInput: params,
      outputFields: outputFields,
    };

    return this.post('/enrich/company', data)
      .then((res: AxiosResponse) => {
        let data: ICompanyEnrichResults = res.data;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the Company Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getCompanyEnrichInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/company/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields included in the response for the Company Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getCompanyEnrichOutputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/outputfields/company/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
