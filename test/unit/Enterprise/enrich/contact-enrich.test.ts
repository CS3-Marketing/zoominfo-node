import axios, { AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ContactEnrich from '../../../../src/Enterprise/Enrich/Contact Enrich';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import { IContactEnrichResults } from '../../../../src/Enterprise/Enrich/Contact Enrich/interfaces';

const mock = new MockAdapter(axios);
const enrich = new ContactEnrich('accessTokenString');

describe('Contact Enrich - Integration Test', () => {
  describe('POST - /enrich/contact', () => {
    test('should fetch contact from parameters', async () => {
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
      mock.onPost('https://api.zoominfo.com/enrich/contact').reply(200, data);
      return enrich
        .getContactEnrich([{ companyId: '123' }])
        .then((res: IContactEnrichResults) => expect(res).toEqual(data));
    });

    test('should throw error fetching contact from parameters', async () => {
      const data = { status: 400, error: 'Unable to fetch contacts from contact enrich' };
      mock.onPost('https://api.zoominfo.com/enrich/contact').reply(400, data);
      return expect(enrich.getContactEnrich([{ companyId: '123' }])).rejects.toThrow(
        ZoomInfoException,
      );
    });
  });

  describe('GET - /lookup/inputfields/contact/enrich', () => {
    test('should list input parameters for contact enrich', async () => {
      const data = [
        {
          fieldName: 'companyId',
          fieldType: 'String',
          description:
            'ZoomInfo unique identifier for the contact. Will accept a comma-separated list.',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/contact/enrich').reply(200, data);
      return enrich
        .getContactEnrichInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for contact enrich', async () => {
      const data = { status: 400, error: 'Unable to fetch input parameters for contact enrich' };
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/contact/enrich').reply(400, data);
      return expect(enrich.getContactEnrichInputs()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/outputfields/contact/enrich', () => {
    test('should list output parameters for contact enrich', async () => {
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
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/contact/enrich').reply(200, data);
      return enrich
        .getContantEnrichOutputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for contact enrich', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch output response fields for contact enrich',
      };
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/contact/enrich').reply(400, data);
      return expect(enrich.getContantEnrichOutputs()).rejects.toThrow(ZoomInfoException);
    });
  });
});
