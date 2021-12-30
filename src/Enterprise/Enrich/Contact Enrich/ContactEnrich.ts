import {AxiosResponse} from 'axios';
import Api from '../../../helpers/Api';
import ZoomInfoException from '../../../helpers/Exception/ZoomInfoException';
import {IContactEnrich, IContactEnrichResults, IContactObject, outputFields} from './interfaces';

/**
 * @class ContactEnrich
 * @docs https://api-docs.zoominfo.com/#cf83bb37-31cf-45d3-a276-08625ca04c60
 */
export default class ContactEnrich extends Api {
  constructor(accessToken: string) {
    super(accessToken);
  }

  /**
   * Use Contact Enrich to retrieve contact detail using valid query parameters.
   *
   * Note: You can input a maximum of 25 contacts in a single enrich request, returning the equivalent number of matching records
   *
   * To match a contact, you must use one of the following combinations of parameters to construct your input:
   *
   * 1. personId OR emailAddress OR hashedEmail OR phone AND companyId OR companyName
   * 2. firstName and lastName AND companyId OR companyName
   * 3. fullName AND companyId OR companyName
   *
   * @param params Array<IContactEnrichSearch>
   * @returns IContactEnrichResults
   */
  public async getContactEnrich(params: Array<IContactObject>): Promise<IContactEnrichResults> {
    let data: IContactEnrich = {
      matchPersonInput: params,
      outputFields: outputFields,
    };

    return this.post('/enrich/contact', data)
      .then((res: AxiosResponse) => {
        let data: IContactEnrichResults = res.data;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields you can use as input for the Contact Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getContactEnrichInputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/inputfields/contact/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Returns a list of fields included in the response for the Contact Enrich endpoint.
   * @returns AxiosResponse['data']
   */
  public async getContantEnrichOutputs(): Promise<AxiosResponse['data']> {
    return this.get('/lookup/outputfields/contact/enrich')
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
