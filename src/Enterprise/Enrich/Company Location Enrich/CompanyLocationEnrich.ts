import {AxiosResponse} from 'axios';
import Api from '../../../helpers/Api';
import ZoomInfoException from '../../../helpers/Exception/ZoomInfoException';
import {
  ICompanyLocationEnrich,
  ICompanyLocationEnrichResults,
} from '../Company Location Enrich/interfaces';

/**
 * @class CompanyLocationEnrich
 * @docs https://api-docs.zoominfo.com/#e87d8559-3d5e-4477-97fb-d363b420b757
 */
export default class CompanyLocationEnrich extends Api {
  constructor(accessToken: string) {
    super(accessToken);
  }

  /**
   * se Company Location Enrich to retrieve company location detail.
   * @param params ICompanyLocationEnrich
   * @returns ICompanyLocationEnrichResults
   */
  public async getCompanyLocationEnrich(
    params: ICompanyLocationEnrich
  ): Promise<ICompanyLocationEnrichResults> {
    return this.post('/enrich/location', params)
      .then((res: AxiosResponse) => {
        let data: ICompanyLocationEnrichResults = res.data;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the Company Location Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getCompanyLocationEnrichInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/location/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields included in the response for the Company Location Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getCompanyLocationEnrichOutputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/outputfields/location/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
