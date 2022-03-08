import axios, { AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import CompanySearch from '../../../../src/Enterprise/Search/Company Search';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import { ICompanySearchResults } from '../../../../src/Enterprise/Search/Company Search/interfaces';

const mock = new MockAdapter(axios);
const search = new CompanySearch('accessTokenString');

describe('Company Search - Integration Test', () => {
  describe('POST - /search/company', () => {
    test('should fetch companies from parameters', async () => {
      const data = {
        maxResults: 1,
        totalResults: 1,
        currentPage: 1,
        data: [
          {
            id: 8867999,
            name: 'American College of Traditional Chinese Medicine',
          },
        ],
      };
      mock.onPost('https://api.zoominfo.com/search/company').reply(200, data);
      return search
        .getCompanySearch({ rpp: 25 })
        .then((res: ICompanySearchResults) => expect(res).toEqual(data));
    });

    test('should throw error fetching companies from parameters', async () => {
      const data = { status: 400, error: 'Unable to fetch companies from company search' };
      mock.onPost('https://api.zoominfo.com/search/company').reply(400, data);
      return expect(search.getCompanySearch({ rpp: 25 })).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/inputfields/company/search', () => {
    test('should list input parameters for company search', async () => {
      const data = [
        {
          fieldName: 'companyId',
          fieldType: 'String',
          description:
            'ZoomInfo unique identifier for the company. Will accept a comma-separated list.',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/company/search').reply(200, data);
      return search
        .getCompanySearchInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for company search', async () => {
      const data = { status: 400, error: 'Unable to fetch input parameters for company search' };
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/company/search').reply(400, data);
      return expect(search.getCompanySearchInputs()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/outputfields/company/search', () => {
    test('should list output parameters for company search', async () => {
      const data = [
        {
          fieldName: 'companyId',
          description: 'company id',
        },
        {
          fieldName: 'companyName',
          description: 'company name',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/company/search').reply(200, data);
      return search
        .getCompanySearchOutputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for company search', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch output response fields for company search',
      };
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/company/search').reply(400, data);
      return expect(search.getCompanySearchOutputs()).rejects.toThrow(ZoomInfoException);
    });
  });
});
