import axios, {AxiosResponse} from 'axios';
import CompanyEnrich from '../../../../src/Enterprise/Enrich/Company Enrich';
import MockAdapter from 'axios-mock-adapter';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import {ICompanyEnrichResults} from '../../../../src/Enterprise/Enrich/Company Enrich/interfaces';

const mock = new MockAdapter(axios);
const enrich = new CompanyEnrich('accessTokenString');

describe('Company Enrich - Integration Test', () => {
  describe('POST - /enrich/company', () => {
    test('should fetch companies from parameters', async () => {
      const data = {
        success: true,
        data: {
          outputFields: [['id', 'name', 'locationmatch', 'website', 'state', 'city']],
        },
      };
      mock.onPost('https://api.zoominfo.com/enrich/company').reply(200, data);
      return await enrich
        .getCompanyEnrich([{companyId: '123'}])
        .then((res: ICompanyEnrichResults) => expect(res).toEqual(data));
    });

    test('should throw error fetching companies from parameters', async () => {
      const data = {status: 400, error: 'Unable to fetch companies from company enrich'};
      mock.onPost('https://api.zoominfo.com/enrich/company').reply(400, data);
      return await expect(enrich.getCompanyEnrich([{companyId: '123'}])).rejects.toThrow(
        ZoomInfoException
      );
    });
  });

  describe('GET - /lookup/inputfields/company/enrich', () => {
    test('should list input parameters for company enrich', async () => {
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
      ];
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/company/enrich').reply(200, data);
      return await enrich
        .getCompanyEnrichInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for company enrich', async () => {
      const data = {status: 400, error: 'Unable to fetch input parameters for company enrich'};
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/company/enrich').reply(400, data);
      return await expect(enrich.getCompanyEnrichInputs()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/outputfields/company/enrich', () => {
    test('should list output parameters for company enrich', async () => {
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
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/company/enrich').reply(200, data);
      return await enrich
        .getCompanyEnrichOutputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for company enrich', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch output response fields for company enrich',
      };
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/company/enrich').reply(400, data);
      return await expect(enrich.getCompanyEnrichOutputs()).rejects.toThrow(ZoomInfoException);
    });
  });
});
