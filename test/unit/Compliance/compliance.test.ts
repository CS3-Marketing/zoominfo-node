import axios, { AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ZoomInfoException from '../../../src/helpers/Exception/ZoomInfoException';
import { IPEnrichResult } from '../../../src/WebSights/interfaces';
import Compliance from '../../../src/Compliance';

const mock = new MockAdapter(axios);
const compliance = new Compliance('accessTokenString');

describe('Compliance - Integration Test', () => {
  describe('GET - /compliance', () => {
    test('should get usage', async () => {
      const data = {
        success: true,
        data: {
          result: [],
        },
      };
      mock.onPost('https://api.zoominfo.com/compliance').reply(200, data);
      return compliance
        .compliance({ companyId: '123abc' })
        .then((res: IPEnrichResult) => expect(res).toEqual(data));
    });

    test('should throw error getting compliance', async () => {
      const data = { status: 400, error: 'Unable to get compliance' };
      mock.onPost('https://api.zoominfo.com/compliance').reply(400, data);
      return expect(compliance.compliance({ companyId: '123abc' })).rejects.toThrow(
        ZoomInfoException,
      );
    });
  });

  describe('GET - /lookup/inputputfields/compliance/enrich', () => {
    test('should list input parameters for compliance enrich', async () => {
      const data = [
        {
          fieldName: 'companyId',
          fieldType: 'Long',
          description: 'Unique ZoomInfo identifier for a company',
        },
        {
          fieldName: 'companyName',
          fieldType: 'String',
          description: 'Company name',
        },
        {
          fieldName: 'personId',
          fieldType: 'Long',
          description: 'Unique ZoomInfo identifier for the contact',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/compliance/enrich').reply(200, data);
      return compliance
        .complianceInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for compliance enrich', async () => {
      const data = { status: 400, error: 'Unable to fetch input parameters for compliance enrich' };
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/compliance/enrich').reply(400, data);
      return expect(compliance.complianceInputs()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/outputfields/compliance/enrich', () => {
    test('should list output parameters for compliance enrich', async () => {
      const data = [
        {
          fieldName: 'id',
          description: 'Unique ZoomInfo identifier for the contact',
        },
        {
          fieldName: 'firstName',
          description: 'Contact first name',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/compliance/enrich').reply(200, data);
      return compliance
        .compliancehOutputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for compliance enrich', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch output response fields for compliance enrich',
      };
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/compliance/enrich').reply(400, data);
      return expect(compliance.compliancehOutputs()).rejects.toThrow(ZoomInfoException);
    });
  });
});
