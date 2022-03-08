import IPEnrich from './IPEnrich';

/**
 * @class WebSights
 * @docs https://api-docs.zoominfo.com/#7f6542bf-1a97-4402-b05d-71b16c1e2916
 */
export default class WebSights {
  public IPenrich: IPEnrich;

  constructor(protected accessToken: string) {
    this.IPenrich = new IPEnrich(accessToken);
  }
}
