import axios, {AxiosResponse} from 'axios';
import IntentEnrich from '../../../../src/Enterprise/Enrich/Intent Enrich';
import MockAdapter from 'axios-mock-adapter';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import {IIntentEnrichResults} from '../../../../src/Enterprise/Enrich/Intent Enrich/interfaces';

const mock = new MockAdapter(axios);
const enrich = new IntentEnrich('accessTokenString');

describe('Intent Enrich - Integration Test', () => {
  describe('POST - /enrich/intent', () => {
    test('should fetch company intent from parameters', async () => {
      const data = {
        success: true,
        data: {
          outputFields: [['id', 'name', 'locationmatch', 'website', 'state', 'city']],
        },
      };
      mock.onPost('https://api.zoominfo.com/enrich/intent').reply(200, data);
      return await enrich
        .getIntentEnrich({companyId: '123'})
        .then((res: IIntentEnrichResults) => expect(res).toEqual(data));
    });

    test('should throw error fetching intent from parameters', async () => {
      const data = {status: 400, error: 'Unable to fetch intent from intent enrich'};
      mock.onPost('https://api.zoominfo.com/enrich/intent').reply(400, data);
      return await expect(enrich.getIntentEnrich({companyId: '123'})).rejects.toThrow(
        ZoomInfoException
      );
    });
  });

  describe('GET - /lookup/inputfields/intent/enrich', () => {
    test('should list input parameters for intent enrich', async () => {
      const data = [
        {
          fieldName: 'companyWebsite',
          fieldType: 'String',
          description: 'The website of the company you are searching for',
        },
        {
          fieldName: 'companyId',
          fieldType: 'Long',
          description: 'Unique ZoomInfo identifier for a company',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/intent/enrich').reply(200, data);
      return await enrich
        .getIntentEnrichInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for intent enrich', async () => {
      const data = {status: 400, error: 'Unable to fetch input parameters for intent enrich'};
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/intent/enrich').reply(400, data);
      return await expect(enrich.getIntentEnrichInputs()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/outputfields/intent/enrich', () => {
    test('should list output parameters for intent enrich', async () => {
      const data = [
        {
          fieldName: 'id',
          description: 'Unique ZoomInfo identifier for a topic',
        },
        {
          fieldName: 'category',
          description: 'Intent category',
        },
        {
          fieldName: 'topic',
          description: 'Intent topic',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/intent/enrich').reply(200, data);
      return await enrich
        .getIntentEnrichOutputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for intent enrich', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch output response fields for intent enrich',
      };
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/intent/enrich').reply(400, data);
      return await expect(enrich.getIntentEnrichOutputs()).rejects.toThrow(ZoomInfoException);
    });
  });
});
