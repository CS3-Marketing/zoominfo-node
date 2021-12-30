import {AxiosResponse} from 'axios';
import Api from '../../../helpers/Api';
import ZoomInfoException from '../../../helpers/Exception/ZoomInfoException';
import {IIntentEnrich, IIntentEnrichResults} from './interfaces';

/**
 * @class IntentEnrich
 * @docs https://api-docs.zoominfo.com/#89820f82-9de3-446c-935a-3791548af946
 */
export default class IntentEnrich extends Api {
  constructor(accessToken: string) {
    super(accessToken);
  }

  /**
   * Use this endpoint to enrich intent data for a company.
   * @param params IIntentEnrich
   * @returns IIntentEnrichResults
   */
  public async getIntentEnrich(params: IIntentEnrich): Promise<IIntentEnrichResults> {
    return this.post('/enrich/intent', params)
      .then((res: AxiosResponse) => {
        let data: IIntentEnrichResults = res.data;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the Intent Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getIntentEnrichInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/intent/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields included in the response for the Intent Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getIntentEnrichOutputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/outputfields/intent/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
