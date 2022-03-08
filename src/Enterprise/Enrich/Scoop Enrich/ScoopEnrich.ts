import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import ZoomInfoException from '../../../helpers/Exception/ZoomInfoException';
import { IScoopEnrich, IScoopEnrichResult } from './interfaces';

/**
 * @class ScoopEnrich
 * @docs https://api-docs.zoominfo.com/#ccbc0b77-f69c-43ef-9cda-ccf140485811
 */
export default class ScoopEnrich extends Api {
  constructor(protected accessToken: string) {
    super(accessToken);
  }

  /**
   * Use this endpoint to match Scoop information
   * @param params IScoopEnrich
   * @returns IScoopEnrichResult
   */
  public async getScoopEnrich(params: IScoopEnrich): Promise<IScoopEnrichResult> {
    return this.post('/enrich/scoop', params)
      .then((res: AxiosResponse) => {
        const { data } = res;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the Scoop Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getScoopEnrichInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/scoop/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields included in the response for the Scoop Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getScoopEnrichOutputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/outputfields/scoop/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
