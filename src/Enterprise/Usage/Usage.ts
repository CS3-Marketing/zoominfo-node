import {AxiosResponse} from 'axios';
import Api from '../../helpers/Api';
import ZoomInfoException from '../../helpers/Exception/ZoomInfoException';

/**
 * @class Usage
 * @docs https://api-docs.zoominfo.com/#df4f66e5-07dc-4449-9d83-b0c189d7d2be
 */
export default class Usage extends Api {
  constructor(accessToken: string) {
    super(accessToken);
  }

  /**
   * Retrieve current usage status using this endpoint.
   * @returns AxiosResponse['data']
   */
  public async getUsage(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/usage')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
