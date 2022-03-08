import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import ZoomInfoException from '../../../helpers/Exception/ZoomInfoException';
import { IOrgChartEnrich, IOrgChartEnrichResults } from './interfaces';

/**
 * @class OrgChartEnrich
 * @docs https://api-docs.zoominfo.com/#55e0d833-7ac3-4832-a7e0-8e5ff1d201f7
 */
export default class OrgChartEnrich extends Api {
  constructor(protected accessToken: string) {
    super(accessToken);
  }

  /**
   * Use this endpoint to match Org Chart information
   * @param params IOrgChartEnrich
   * @returns IOrgChartEnrichResults
   */
  public async getOrgChartEnrich(params: IOrgChartEnrich): Promise<IOrgChartEnrichResults> {
    return this.post('/enrich/orgchart', params)
      .then((res: AxiosResponse) => {
        const { data } = res;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the Org Chart Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getOrgChartEnrichInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/orgchart/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields included in the response for the OrgChart Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getOrgChartEnrichOutputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/outputfields/orgchart/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
