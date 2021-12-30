import {AxiosResponse} from 'axios';
import Api from '../../helpers/Api';
import ZoomInfoException from '../../helpers/Exception/ZoomInfoException';
import {
  IWebhookCreateParams,
  IWebhookResults,
  IWebhookSubscriptionResult,
  IWebhookValidateParams,
  IWebhookValidateResults,
  IWebhookVerificationResult,
} from './interfaces';

/**
 * @class Webhooks
 * @docs https://api-docs.zoominfo.com/#7f6542bf-1a97-4402-b05d-71b16c1e2916
 */
export default class Webhooks extends Api {
  constructor(accessToken: string) {
    super(accessToken);
  }

  /**
   * Use this endpoint to create a webhook.
   * @param params IWebhookCreateParams
   * @returns IWebhookResults
   */
  public async createWebhook(params: IWebhookCreateParams): Promise<IWebhookResults> {
    return this.post('/webhooks', params)
      .then((res: AxiosResponse) => {
        let data: IWebhookResults = res.data;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Use this endpoint to update a webhook.
   * @param id string
   * @param params IWebhookUpdateParams
   * @returns IWebhookResults
   */
  public async updateWebhook(id: string, params: IWebhookCreateParams): Promise<IWebhookResults> {
    return this.put(`/webhooks/${id}`, params)
      .then((res: AxiosResponse) => {
        let data: IWebhookResults = res.data;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Use this endpoint to delete a webhook.
   * @param id string
   * @returns IWebhookResults
   */
  public async deleteWebhook(id: string): Promise<IWebhookResults> {
    return this.delete(`/webhooks/${id}`)
      .then((res: AxiosResponse) => {
        let data: IWebhookResults = res.data;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Use this endpoint to get a specific webhook.
   * @param id
   * @returns IWebhookResults
   */
  public async getWebhook(id: string): Promise<IWebhookResults> {
    return this.get(`/webhooks/${id}`)
      .then((res: AxiosResponse) => {
        let data: IWebhookResults = res.data;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Use this endpoint to get all webhook.
   * @param id string
   * @returns
   */
  public async getAllWebhook() {
    return this.get(`/webhooks`)
      .then((res: AxiosResponse) => {
        let data: IWebhookResults = res.data;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Use this endpoint to validate a webhook.
   * @param params IWebhookValidateParams
   * @returns IWebhookValidateResults
   */
  public async validateTargetURL(params: IWebhookValidateParams) {
    return this.post('/webhooks/validate', params)
      .then((res: AxiosResponse) => {
        let data: IWebhookValidateResults = res.data;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Use this endpoint to get a webhook verification token.
   * @param id string
   * @returns IWebhookVerificationResult
   */
  public async generateVerificationToken(id: string) {
    return this.post(`/webhooks/${id}/token`, {})
      .then((res: AxiosResponse) => {
        let data: IWebhookVerificationResult = res.data;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Use this endpoint to get a webhook subscription types.
   * @returns IWebhookSubscriptionResult
   */
  public async getSubscriptionTypes() {
    return this.get('/webhooks/subscriptiontypes')
      .then((res: AxiosResponse) => {
        let data: IWebhookSubscriptionResult = res.data;
        return data;
      })
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
