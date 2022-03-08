import axios, { AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import CompanyLocationEnrich from '../../../../src/Enterprise/Enrich/Company Location Enrich';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import { ICompanyLocationEnrichResults } from '../../../../src/Enterprise/Enrich/Company Location Enrich/interfaces';

const mock = new MockAdapter(axios);
const enrich = new CompanyLocationEnrich('accessTokenString');

describe('Company Enrich - Integration Test', () => {
  describe('POST - /enrich/location', () => {
    test('should fetch company location from parameters', async () => {
      const data = {
        success: true,
        data: {
          outputFields: [['id', 'name', 'locationmatch', 'website', 'state', 'city']],
        },
      };
      mock.onPost('https://api.zoominfo.com/enrich/location').reply(200, data);
      return enrich
        .getCompanyLocationEnrich({ companyId: '123abc' })
        .then((res: ICompanyLocationEnrichResults) => expect(res).toEqual(data));
    });

    test('should throw error fetching company location from parameters', async () => {
      const data = { status: 400, error: 'Unable to fetch location from company location enrich' };
      mock.onPost('https://api.zoominfo.com/enrich/location').reply(400, data);
      return expect(enrich.getCompanyLocationEnrich({ companyId: '123abc' })).rejects.toThrow(
        ZoomInfoException,
      );
    });
  });

  describe('GET - /lookup/inputfields/location/enrich', () => {
    test('should list input parameters for company location enrich', async () => {
      const data = [
        {
          fieldName: 'parentId',
          fieldType: 'String',
          description: 'The id of the parent company for which you want to find locations',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/location/enrich').reply(200, data);
      return enrich
        .getCompanyLocationEnrichInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for company location enrich', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch input parameters for company location enrich',
      };
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/location/enrich').reply(400, data);
      return expect(enrich.getCompanyLocationEnrichInputs()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/outputfields/location/enrich', () => {
    test('should list output parameters for company location enrich', async () => {
      const data = [
        {
          fieldName: 'companyId',
          description: 'Unique ZoomInfo identifier for a company',
        },
        {
          fieldName: 'companyAddressStatus',
          description: 'Company address verification status',
        },
        {
          fieldName: 'companySubUnitType',
          description: 'Company sub unit types (e.g., division, subsidiary and so on)',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/location/enrich').reply(200, data);
      return enrich
        .getCompanyLocationEnrichOutputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for company location enrich', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch output response fields for company location enrich',
      };
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/location/enrich').reply(400, data);
      return expect(enrich.getCompanyLocationEnrichOutputs()).rejects.toThrow(ZoomInfoException);
    });
  });
});
