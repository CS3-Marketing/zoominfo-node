import {AxiosResponse} from 'axios';
import Api from '../../../helpers/Api';
import ZoomInfoException from '../../../helpers/Exception/ZoomInfoException';
import {
  ICompanyMasterDataEnrich,
  ICompanyMasterDataEnrichResults,
  ICompanyObject,
  outputFields,
} from './interfaces';

/**
 * @class CompanyMasterDataEnrich
 * @docs https://api-docs.zoominfo.com/#dba1b1d1-e81c-4bb6-b7dc-6487eebcd4e6
 */
export default class CompanyMasterDataEnrich extends Api {
  constructor(accessToken: string) {
    super(accessToken);
  }

  /**
   * Use this endpoint to match company information
   *
   * Note: You can input a maximum of 25 companies in a single enrich request, returning the equivalent number of matching records. See the endpoint examples for how to build queries using multiple inputs.
   * @param params ICompanyMasterDataEnrich
   * @returns ICompanyMasterDataEnrichResults
   */
  public async getCompanyMasterDataEnrich(
    params: Array<ICompanyObject>
  ): Promise<ICompanyMasterDataEnrichResults> {
    let data: ICompanyMasterDataEnrich = {
      matchCompanyInput: params,
      outputFields: outputFields,
    };

    return this.post('/enrich/company-master', data)
      .then((res: AxiosResponse) => {
        let data: ICompanyMasterDataEnrichResults = res.data;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the Company Master Data Enrich Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getCompanyMasterDataEnrichInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/company-master/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields included in the response for the ompany Master Data Enrich Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getCompanyMasterDataEnrichOutputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/outputfields/company-master/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
