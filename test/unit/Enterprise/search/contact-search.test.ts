import axios, { AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ContactSearch from '../../../../src/Enterprise/Search/Contact Search';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import { ICompanySearchResults } from '../../../../src/Enterprise/Search/Company Search/interfaces';

const mock = new MockAdapter(axios);
const search = new ContactSearch('accessTokenString');

describe('Contact Search - Integration Test', () => {
  describe('POST - /search/contact', () => {
    test('should fetch contacts from parameters', async () => {
      const data = {
        maxResults: 1,
        totalResults: 1,
        currentPage: 1,
        data: [
          {
            id: 3868923045,
            firstName: 'Dean',
            middleName: '',
            lastName: 'Ansermoz',
            validDate: '6/30/2020 8:00 PM',
            lastUpdatedDate: '',
            jobTitle: 'Principal Product Manager',
            contactAccuracyScore: 94,
            hasEmail: true,
            hasSupplementalEmail: false,
            hasDirectPhone: true,
            hasMobilePhone: false,
            hasCompanyIndustry: true,
            hasCompanyPhone: true,
            hasCompanyStreet: true,
            hasCompanyState: true,
            hasCompanyZipCode: true,
            hasCompanyCountry: true,
            hasCompanyRevenue: true,
            hasCompanyEmployeeCount: true,
            company: {
              id: 344589814,
              name: 'ZoomInfo',
            },
          },
        ],
      };
      mock.onPost('https://api.zoominfo.com/search/contact').reply(200, data);
      return search
        .getContactSearch({ rpp: 25 })
        .then((res: ICompanySearchResults) => expect(res).toEqual(data));
    });

    test('should throw error fetching contacts from parameters', async () => {
      const data = { status: 400, error: 'Unable to fetch contacts from contact search' };
      mock.onPost('https://api.zoominfo.com/search/contact').reply(400, data);
      return expect(search.getContactSearch({ rpp: 25 })).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/inputfields/contact/search', () => {
    test('should list input parameters for contact search', async () => {
      const data = [
        {
          fieldName: 'personId',
          fieldType: 'String',
          description:
            'Unique ZoomInfo identifier for the contact. Can include a comma-separated list.',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/contact/search').reply(200, data);
      return search
        .getContactSearchInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for contact search', async () => {
      const data = { status: 400, error: 'Unable to fetch input parameters for contact search' };
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/contact/search').reply(400, data);
      return expect(search.getContactSearchInputs()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/outputfields/contact/search', () => {
    test('should list output parameters for contact search', async () => {
      const data = [
        {
          fieldName: 'id',
          description: 'Unique ZoomInfo identifier for the contact',
        },
        {
          fieldName: 'firstName',
          description: 'Contact first name',
        },
        {
          fieldName: 'middleName',
          description: 'Contact middle name',
        },
        {
          fieldName: 'lastName',
          description: 'Contact last name',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/contact/search').reply(200, data);
      return search
        .getContactSearchOutputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for contact search', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch output response fields for contact search',
      };
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/contact/search').reply(400, data);
      return expect(search.getContactSearchOutputs()).rejects.toThrow(ZoomInfoException);
    });
  });
});
