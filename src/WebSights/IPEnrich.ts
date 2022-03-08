import { AxiosResponse } from 'axios';
import Api from '../helpers/Api';
import ZoomInfoException from '../helpers/Exception/ZoomInfoException';
import { IPEnrichParams, IPEnrichResult } from './interfaces';

/**
 * @class IPEnrich
 * @docs https://api-docs.zoominfo.com/#9ac0b1b0-1bef-421f-99a6-918540439fc3
 */
export default class IPEnrich extends Api {
  constructor(protected accessToken: string) {
    super(accessToken);
  }

  /**
   * Use this endpoint to match IP addresses.
   * @param params IPEnrichParams
   * @returns IPEnrichResult
   */
  public async enrichIP(params: IPEnrichParams): Promise<IPEnrichResult> {
    return this.post('/enrich/ip', params)
      .then((res: AxiosResponse) => {
        const { data } = res;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the IPEnrich Search endpoint.
   * @returns AxiosResponse['data']
   */
  public async IPEnrichInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/ip/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields included in the response for the IPEnrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async IPEnrichOutputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/outputfields/ip/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
