import {AxiosResponse} from 'axios';
import Api from '../../../helpers/Api';
import ZoomInfoException from '../../../helpers/Exception/ZoomInfoException';
import {
  ICorporateHierarchyEnrich,
  ICorporateHierarchyEnrichResults,
  ICorporateHierarchyObject,
  outputFields,
} from '../Corporate Hierarchy Enrich/interfaces';

/**
 * @class CorporateHiearchyEnrich
 * @docs https://api-docs.zoominfo.com/#a02f2173-3808-467f-be24-54b4cc93f8c3
 */
export default class CorporateHiearchyEnrich extends Api {
  constructor(accessToken: string) {
    super(accessToken);
  }

  /**
   * Use this endpoint to match corporate hierarchical information.
   * @param params Array<ICorporateHierarchyEnrich>
   * @returns ICorpotateHierarchyEnrichResults
   */
  public async getCorporateHiearchyEnrich(
    params: Array<ICorporateHierarchyObject>
  ): Promise<ICorporateHierarchyEnrichResults> {
    let data: ICorporateHierarchyEnrich = {
      matchCompanyInput: params,
      outputFields: outputFields,
    };

    return this.post('/enrich/corporatehierarchy', data)
      .then((res: AxiosResponse) => {
        let data: ICorporateHierarchyEnrichResults = res.data;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the Corporate Hierarchy Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getCorporateHiearchyEnrichInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/corporatehierarchy/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields included in the response for the Corporate Hierarchy Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getCorporateHiearchyEnrichOutputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/outputfields/corporatehierarchy/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
