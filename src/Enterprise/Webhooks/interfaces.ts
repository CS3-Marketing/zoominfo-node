export interface IWebhookCreateParams {
  title: string;
  enabled: boolean;
  targetUrl: string;
  subscriptions: Array<Object>;
}

export interface IWebhookUpdateParams {
  title?: string;
  enabled?: boolean;
  targetUrl?: string;
  subscriptions?: Array<Object>;
}

export interface IWebhookResults {
  id: string;
  title: string;
  enabled: boolean;
  targetUrl: string;
  createdDate: string;
  verificationToken: string;
  subscriptions: Array<Object>;
}

export interface IWebhookValidateParams {
  targetUrl: string;
  objectType: string;
}

export interface IWebhookValidateResults {
  message: string;
  success: boolean;
  responseCode: number;
}

export interface IWebhookVerificationResult {
  verificationToken: string;
}

export interface IWebhookSubscriptionResult {
  objectTypes: Array<string>;
  eventTypes: Array<string>;
}
