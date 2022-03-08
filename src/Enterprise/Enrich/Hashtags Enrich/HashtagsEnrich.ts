import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import ZoomInfoException from '../../../helpers/Exception/ZoomInfoException';
import { IHashTagEnrich, IHashTagEnrichResults } from './interfaces';

/**
 * @class HashTagsEnrich
 * @docs https://api-docs.zoominfo.com/#f3f56720-bcc9-4d8d-9834-7f0588c1417e
 */
export default class HashtagsEnrich extends Api {
  constructor(protected accessToken: string) {
    super(accessToken);
  }

  /**
   * Use this endpoint to match Hash Tag information
   * @param params IHashTagEnrich
   * @returns IHashTagEnrichResults
   */
  public async getHashtagsEnrich(params: IHashTagEnrich): Promise<IHashTagEnrichResults> {
    return this.post('/enrich/hashtag', params)
      .then((res: AxiosResponse) => {
        const { data } = res;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the Hash Tags Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getHashtagsEnrichInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/hashtag/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
