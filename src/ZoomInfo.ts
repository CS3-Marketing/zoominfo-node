import Auth from './Auth';
import ZoomInfoException from './helpers/Exception/ZoomInfoException';

import Enrich from './Enterprise/Enrich';
import Lookup from './Enterprise/Lookup';
import Search from './Enterprise/Search';
import Usage from './Enterprise/Usage';
import Webhooks from './Enterprise/Webhooks';
import WebSights from './WebSights';
import Compliance from './Compliance';

export interface IClientConfig {
  username: string;
  password?: string;
  clientId?: string;
  privateKey?: string;
}

/**
 * @class ZoomInfo
 */
export default class ZoomInfo {
  private accessToken: string;

  private config: IClientConfig;

  public compliance: Compliance;

  public enrich: Enrich;

  public lookup: Lookup;

  public search: Search;

  public usage: Usage;

  public webhooks: Webhooks;

  public websights: WebSights;

  constructor(config: IClientConfig, accessToken: string) {
    this.config = config;
    this.accessToken = accessToken;
    this.compliance = new Compliance(this.accessToken);
    this.enrich = new Enrich(this.accessToken);
    this.lookup = new Lookup(this.accessToken);
    this.search = new Search(this.accessToken);
    this.usage = new Usage(this.accessToken);
    this.webhooks = new Webhooks(this.accessToken);
    this.websights = new WebSights(this.accessToken);
  }

  /**
   * Create ZoomInfo client
   * @param credentials
   * @returns
   */
  public static async client(config: IClientConfig): Promise<ZoomInfo> {
    const accessToken = await ZoomInfo.fetchAccessToken(config);
    const Zoom = new ZoomInfo(config, accessToken);
    return Zoom;
  }

  /**
   * Refreshes the current access token
   * @returns accessToken
   */
  public async refreshAccessToken(): Promise<string> {
    return ZoomInfo.fetchAccessToken(this.config);
  }

  /**
   * Fetch access token using Auth API
   * @param config
   * @returns accessToken
   */
  private static async fetchAccessToken(config: IClientConfig): Promise<string> {
    const {username, password, clientId, privateKey} = config;
    if (username && password) {
      let accessToken = await Auth.getBasicAuthToken(username, password)
        .then((token: string) => token)
        .catch((err: ZoomInfoException) => {
          throw err;
        });
      return accessToken;
    } else if (username && clientId && privateKey) {
      let accessToken = await Auth.getPKIAuthToken(username, clientId, privateKey)
        .then((token: string) => token)
        .catch((err: ZoomInfoException) => {
          throw err;
        });
      return accessToken;
    } else throw new Error('Malformed client credentials configuration');
  }
}
