import axios, {AxiosResponse} from 'axios';
import ScoopEnrich from '../../../../src/Enterprise/Enrich/Scoop Enrich';
import MockAdapter from 'axios-mock-adapter';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import {IScoopEnrichResult} from '../../../../src/Enterprise/Enrich/Scoop Enrich/interfaces';

const mock = new MockAdapter(axios);
const enrich = new ScoopEnrich('accessTokenString');

describe('Scoop Enrich - Integration Test', () => {
  describe('POST - /enrich/scoop', () => {
    test('should fetch company scoop from parameters', async () => {
      const data = {
        maxResults: 9,
        totalResults: 9,
        currentPage: 1,
        data: [
          {
            id: 1258709,
            publishedDate: '12/4/2018 12:00 AM',
            originalPublishedDate: '12/4/2018 12:00 AM',
            linkText: '',
            link: '',
            description:
              'has recently been recognized by The Boston Globe as one of the Top Places to Work for 2018 in Massachusetts in the midsize organization category.',
            topics: [],
            updateText: '',
            types: [
              {
                id: 6,
                type: 'Award',
              },
            ],
            contacts: [],
            company: {
              id: 344589814,
              name: 'ZoomInfo',
            },
          },
        ],
      };
      mock.onPost('https://api.zoominfo.com/enrich/scoop').reply(200, data);
      return await enrich
        .getScoopEnrich({companyId: '123'})
        .then((res: IScoopEnrichResult) => expect(res).toEqual(data));
    });

    test('should throw error fetching scoop from parameters', async () => {
      const data = {status: 400, error: 'Unable to fetch scoop from org chat enrich'};
      mock.onPost('https://api.zoominfo.com/enrich/scoop').reply(400, data);
      return await expect(enrich.getScoopEnrich({companyId: '123'})).rejects.toThrow(
        ZoomInfoException
      );
    });
  });

  describe('GET - /lookup/inputfields/orgchart/scoop', () => {
    test('should list input parameters for scoop enrich', async () => {
      const data = [
        {
          fieldName: 'companyId',
          fieldType: 'String',
          description:
            'ZoomInfo unique identifier for the company. Will accept a comma-separated list.',
        },
        {
          fieldName: 'companyName',
          fieldType: 'String',
          description: 'Company name',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/scoop/enrich').reply(200, data);
      return await enrich
        .getScoopEnrichInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for scoop enrich', async () => {
      const data = {status: 400, error: 'Unable to fetch input parameters for scoop enrich'};
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/scoop/enrich').reply(400, data);
      return await expect(enrich.getScoopEnrichInputs()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/outputfields/scoop/enrich', () => {
    test('should list output parameters scoop enrich', async () => {
      const data = [
        {
          fieldName: 'id',
          description: 'ZoomInfo unique identifier for a scoop',
        },
        {
          fieldName: 'publishedDate',
          description:
            'Publish date for a scoop. If updated, this date will reflect that last updated date.',
        },
        {
          fieldName: 'originalPublishedDate',
          description: 'Initial publish date for a scoop',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/scoop/enrich').reply(200, data);
      return await enrich
        .getScoopEnrichOutputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for scoop enrich', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch output response fields for scoop enrich',
      };
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/scoop/enrich').reply(400, data);
      return await expect(enrich.getScoopEnrichOutputs()).rejects.toThrow(ZoomInfoException);
    });
  });
});
