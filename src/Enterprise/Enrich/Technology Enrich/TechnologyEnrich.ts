import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import ZoomInfoException from '../../../helpers/Exception/ZoomInfoException';
import { ITechnologyEnrich, ITechnologyEnrichResults } from './interfaces';

/**
 * @class TechnologyEnrich
 * @docs https://api-docs.zoominfo.com/#aa294cb1-858e-406b-81d8-4cb2fe4efaf3
 */
export default class TechnologyEnrich extends Api {
  constructor(protected accessToken: string) {
    super(accessToken);
  }

  /**
   * Use this endpoint to match Technology information
   * @param params ITechnologyEnrich
   * @returns ITechnologyEnrichResults
   */
  public async getTechnologyEnrich(params: ITechnologyEnrich): Promise<ITechnologyEnrichResults> {
    return this.post('/enrich/tech', params)
      .then((res: AxiosResponse) => {
        const { data } = res;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the Technology Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getTechnologyEnrichInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/tech/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
