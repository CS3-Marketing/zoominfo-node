import axios, { AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ZoomInfoException from '../../../src/helpers/Exception/ZoomInfoException';
import { IPEnrichResult } from '../../../src/WebSights/interfaces';
import IPEnrich from '../../../src/WebSights/IPEnrich';

const mock = new MockAdapter(axios);
const enrich = new IPEnrich('accessTokenString');

describe('IP Enrich - Integration Test', () => {
  describe('GET - /enrich/ip', () => {
    test('should get usage', async () => {
      const data = {
        status: 200,
      };
      mock.onPost('https://api.zoominfo.com/enrich/ip').reply(200, data);
      return enrich
        .enrichIP({ ipAddress: '127.0.0.1' })
        .then((res: IPEnrichResult) => expect(res).toEqual(data));
    });

    test('should throw error getting company rankings', async () => {
      const data = { status: 400, error: 'Unable to get companyranking' };
      mock.onPost('https://api.zoominfo.com/enrich/ip').reply(400, data);
      return expect(enrich.enrichIP({ ipAddress: '127.0.0.1' })).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/inputputfields/ip/enrich', () => {
    test('should list input parameters for ip enrich', async () => {
      const data = [
        {
          fieldName: 'ipAddress',
          fieldType: 'String',
          description: 'The ipAddress you are searching for',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/ip/enrich').reply(200, data);
      return enrich
        .IPEnrichInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for company enrich', async () => {
      const data = { status: 400, error: 'Unable to fetch input parameters for company enrich' };
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/ip/enrich').reply(400, data);
      return expect(enrich.IPEnrichInputs()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/outputfields/ip/enrich', () => {
    test('should list output parameters for ip enrich', async () => {
      const data = [
        {
          fieldName: 'id',
          description: 'Unique ZoomInfo identifier for a company',
        },
        {
          fieldName: 'ticker',
          description: 'Company public stock exchange ticker',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/ip/enrich').reply(200, data);
      return enrich
        .IPEnrichOutputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for company enrich', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch output response fields for company enrich',
      };
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/ip/enrich').reply(400, data);
      return expect(enrich.IPEnrichOutputs()).rejects.toThrow(ZoomInfoException);
    });
  });
});
