import axios from 'axios';
import Webhooks from '../../../../src/Enterprise/Webhooks';
import MockAdapter from 'axios-mock-adapter';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import {
  IWebhookResults,
  IWebhookSubscriptionResult,
  IWebhookValidateResults,
  IWebhookVerificationResult,
} from '../../../../src/Enterprise/Webhooks/interfaces';

const mock = new MockAdapter(axios);
const webhooks = new Webhooks('accessTokenString');

describe('Webhook - Integration Test', () => {
  describe('POST - /webhooks', () => {
    test('should create webhook from parameters', async () => {
      const data = {
        id: '745574412',
        title: 'My Webhook',
        enabled: false,
        targetUrl: 'https://www.mytargeturl5.com',
        createdDate: '02-15-2021T11:51:18.000Z',
        verificationToken:
          '/zRpStZemqOhWNCmRrIVs9WaeYHCkTL71X+GJzjsSrf757odnKoW23MgBDN37pxVGBfZ+6amvCzB757mOPC7YQ==',
        subscriptions: [
          {
            createdDate: '02-15-2021T11:51:18.000Z',
            modifiedDate: '02-15-2021T11:51:18.000Z',
            eventType: 'Update',
            objectType: 'Contact',
            subscriptionId: '836880237',
          },
        ],
      };
      mock.onPost('https://api.zoominfo.com/webhooks').reply(200, data);
      return await webhooks
        .createWebhook({title: 'string', enabled: true, targetUrl: '', subscriptions: []})
        .then((res: IWebhookResults) => expect(res).toEqual(data));
    });

    test('should throw error creating webhook from parameters', async () => {
      const data = {status: 400, error: 'Unable to create webhook'};
      mock.onPost('https://api.zoominfo.com/webhooks').reply(400, data);
      return await expect(
        webhooks.createWebhook({title: 'string', enabled: true, targetUrl: '', subscriptions: []})
      ).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('PUT - /webhooks', () => {
    test('should update webhook from parameters', async () => {
      const data = {
        id: '745574412',
        title: 'My Webhook',
        enabled: false,
        targetUrl: 'https://www.mytargeturl5.com',
        createdDate: '02-15-2021T11:51:18.000Z',
        verificationToken:
          '/zRpStZemqOhWNCmRrIVs9WaeYHCkTL71X+GJzjsSrf757odnKoW23MgBDN37pxVGBfZ+6amvCzB757mOPC7YQ==',
        subscriptions: [
          {
            createdDate: '02-15-2021T11:51:18.000Z',
            modifiedDate: '02-15-2021T11:51:18.000Z',
            eventType: 'Update',
            objectType: 'Contact',
            subscriptionId: '836880237',
          },
        ],
      };
      mock.onPut('https://api.zoominfo.com/webhooks/1234561bc').reply(200, data);
      return await webhooks
        .updateWebhook('1234561bc', {
          title: 'string',
          enabled: true,
          targetUrl: '',
          subscriptions: [],
        })
        .then((res: IWebhookResults) => expect(res).toEqual(data));
    });

    test('should throw error updating webhook from parameters', async () => {
      const data = {status: 400, error: 'Unable to create webhook'};
      mock.onPut('https://api.zoominfo.com/webhooks/1234561bc').reply(400, data);
      return await expect(
        webhooks.updateWebhook('1234561bc', {
          title: 'string',
          enabled: true,
          targetUrl: '',
          subscriptions: [],
        })
      ).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('DELETE - /webhooks', () => {
    test('should delete webhook', async () => {
      const data = {
        id: '745574412',
        title: 'My Webhook',
        enabled: false,
        targetUrl: 'https://www.mytargeturl5.com',
        createdDate: '02-15-2021T11:51:18.000Z',
        verificationToken:
          '/zRpStZemqOhWNCmRrIVs9WaeYHCkTL71X+GJzjsSrf757odnKoW23MgBDN37pxVGBfZ+6amvCzB757mOPC7YQ==',
        subscriptions: [
          {
            createdDate: '02-15-2021T11:51:18.000Z',
            modifiedDate: '02-15-2021T11:51:18.000Z',
            eventType: 'Update',
            objectType: 'Contact',
            subscriptionId: '836880237',
          },
        ],
      };
      mock.onDelete('https://api.zoominfo.com/webhooks/1234561bc').reply(200, data);
      return await webhooks
        .deleteWebhook('1234561bc')
        .then((res: IWebhookResults) => expect(res).toEqual(data));
    });

    test('should throw error deleting webhook', async () => {
      const data = {status: 400, error: 'Unable to create webhook'};
      mock.onDelete('https://api.zoominfo.com/webhooks/1234561bc').reply(400, data);
      return await expect(webhooks.deleteWebhook('1234561bc')).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /webhooks', () => {
    test('should delete webhook', async () => {
      const data = {
        id: '745574412',
        title: 'My Webhook',
        enabled: false,
        targetUrl: 'https://www.mytargeturl5.com',
        createdDate: '02-15-2021T11:51:18.000Z',
        verificationToken:
          '/zRpStZemqOhWNCmRrIVs9WaeYHCkTL71X+GJzjsSrf757odnKoW23MgBDN37pxVGBfZ+6amvCzB757mOPC7YQ==',
        subscriptions: [
          {
            createdDate: '02-15-2021T11:51:18.000Z',
            modifiedDate: '02-15-2021T11:51:18.000Z',
            eventType: 'Update',
            objectType: 'Contact',
            subscriptionId: '836880237',
          },
        ],
      };
      mock.onGet('https://api.zoominfo.com/webhooks').reply(200, data);
      return await webhooks
        .getAllWebhook()
        .then((res: IWebhookResults) => expect(res).toEqual(data));
    });

    test('should throw error deleting webhook', async () => {
      const data = {status: 400, error: 'Unable to create webhook'};
      mock.onGet('https://api.zoominfo.com/webhooks').reply(400, data);
      return await expect(webhooks.getAllWebhook()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /webhooks/${id}', () => {
    test('should delete webhook', async () => {
      const data = {
        id: '745574412',
        title: 'My Webhook',
        enabled: false,
        targetUrl: 'https://www.mytargeturl5.com',
        createdDate: '02-15-2021T11:51:18.000Z',
        verificationToken:
          '/zRpStZemqOhWNCmRrIVs9WaeYHCkTL71X+GJzjsSrf757odnKoW23MgBDN37pxVGBfZ+6amvCzB757mOPC7YQ==',
        subscriptions: [
          {
            createdDate: '02-15-2021T11:51:18.000Z',
            modifiedDate: '02-15-2021T11:51:18.000Z',
            eventType: 'Update',
            objectType: 'Contact',
            subscriptionId: '836880237',
          },
        ],
      };
      mock.onGet('https://api.zoominfo.com/webhooks/1234561bc').reply(200, data);
      return await webhooks
        .getWebhook('1234561bc')
        .then((res: IWebhookResults) => expect(res).toEqual(data));
    });

    test('should throw error deleting webhook', async () => {
      const data = {status: 400, error: 'Unable to create webhook'};
      mock.onGet('https://api.zoominfo.com/webhooks/1234561bc').reply(400, data);
      return await expect(webhooks.getWebhook('1234561bc')).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('POST - /webhooks/validate', () => {
    test('should validate webhook target url', async () => {
      const data = {
        message: 'Created',
        success: true,
        responseCode: 201,
      };
      mock.onPost('https://api.zoominfo.com/webhooks/validate').reply(200, data);
      return await webhooks
        .validateTargetURL({
          targetUrl: 'https://www.mytargeturl.com',
          objectType: 'Contact',
        })
        .then((res: IWebhookValidateResults) => expect(res).toEqual(data));
    });

    test('should throw error validating webhook', async () => {
      const data = {status: 400, error: 'Unable to create webhook'};
      mock.onPost('https://api.zoominfo.com/webhooks/validate').reply(400, data);
      return await expect(
        webhooks.validateTargetURL({
          targetUrl: 'https://www.mytargeturl.com',
          objectType: 'Contact',
        })
      ).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('POST - /webhooks/${id}/token', () => {
    test('should generate webhook verification url', async () => {
      const data = {
        verificationToken:
          'z5doGe6rx+1deDHMgUI/j56AN0we8NQD0G2YWR2aEODzCCx7L9BdtVm2zVnYLfYZqvyeVu3EpBkLUewxdRJAug==',
      };
      mock.onPost('https://api.zoominfo.com/webhooks/1234561bc/token').reply(200, data);
      return await webhooks
        .generateVerificationToken('1234561bc')
        .then((res: IWebhookVerificationResult) => expect(res).toEqual(data));
    });

    test('should throw error generating verification url', async () => {
      const data = {status: 400, error: 'Unable to create webhook'};
      mock.onPost('https://api.zoominfo.com/webhooks/1234561bc/token').reply(400, data);
      return await expect(webhooks.generateVerificationToken('1234561bc')).rejects.toThrow(
        ZoomInfoException
      );
    });
  });

  describe('GET - /webhooks/subscriptiontypes', () => {
    test('should get subscription types', async () => {
      const data = {
        objectTypes: ['Contact', 'Company'],
        eventTypes: ['Update'],
      };
      mock.onGet('https://api.zoominfo.com/webhooks/subscriptiontypes').reply(200, data);
      return await webhooks
        .getSubscriptionTypes()
        .then((res: IWebhookSubscriptionResult) => expect(res).toEqual(data));
    });

    test('should throw error getting subscription types', async () => {
      const data = {status: 400, error: 'Unable to create webhook'};
      mock.onGet('https://api.zoominfo.com/webhooks/subscriptiontypes').reply(400, data);
      return await expect(webhooks.getSubscriptionTypes()).rejects.toThrow(ZoomInfoException);
    });
  });
});
