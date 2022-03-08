import { AxiosResponse } from 'axios';
import Api from '../helpers/Api';
import ZoomInfoException from '../helpers/Exception/ZoomInfoException';
import { IComplianceParams, IComplianceResult } from './interfaces';

/**
 * @class Compliance
 * @docs https://api-docs.zoominfo.com/#6b305a99-cbad-4a44-aaa4-23b14d126a43
 */
export default class Compliance extends Api {
  constructor(protected accessToken: string) {
    super(accessToken);
  }

  /**
   * Returns a list of compliance-related details from ZoomInfo's data
   * @param params IComplianceParams
   * @returns IComplianceResult
   */
  public async compliance(params: IComplianceParams): Promise<IComplianceResult> {
    return this.post('/compliance', params)
      .then((res: AxiosResponse) => {
        const { data } = res;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the Compliance endpoint.
   * @returns AxiosResponse['data']
   */
  public async complianceInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/compliance/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields included in the response for the Compliance endpoint.
   * @returns AxiosResponse['data']
   */
  public async compliancehOutputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/outputfields/compliance/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
