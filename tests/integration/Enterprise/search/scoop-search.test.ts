import axios, {AxiosResponse} from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import ScoopSearch from '../../../../src/Enterprise/Search/Scoop Search';
import {IScoopSearchResults} from '../../../../src/Enterprise/Search/Scoop Search/interfaces';

const mock = new MockAdapter(axios);
const search = new ScoopSearch('accessTokenString');

describe('Scoop Search - Integration Test', () => {
  describe('POST - /search/scoop', () => {
    test('should fetch scoops from parameters', async () => {
      const data = {
        maxResults: 1,
        totalResults: 1,
        currentPage: 1,
        data: [
          {
            id: 1382057,
            publishedDate: '2/22/2019 12:00 AM',
            originalPublishedDate: '2/22/2019 12:00 AM',
            linkText: '',
            link: '',
            description:
              'Datanyze has recently been ranked #986 on the 2019 SaaS 1000 Top SaaS Companies list.',
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
      mock.onPost('https://api.zoominfo.com/search/scoop').reply(200, data);
      return await search
        .getScoopSearch({rpp: 25})
        .then((res: IScoopSearchResults) => expect(res).toEqual(data));
    });

    test('should throw error fetching scoops from parameters', async () => {
      const data = {status: 400, error: 'Unable to fetch sccops from scoop search'};
      mock.onPost('https://api.zoominfo.com/search/scoop').reply(400, data);
      return await expect(search.getScoopSearch({rpp: 25})).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/inputfields/scoop/search', () => {
    test('should list input parameters for scoop search', async () => {
      const data = [
        {
          fieldName: 'publishedStartDate',
          fieldType: 'String',
          description:
            'Starting date to search for scoops based on when published. Form a range using publishedEndDate or omit publishedEndDate to search to the current date. Uses YYYY-MM-DD format.',
        },
        {
          fieldName: 'publishedEndDate',
          fieldType: 'String',
          description:
            'Ending date to search for scoops based on when published. Form a range using publishedEndDate. Uses YYYY-MM-DD format.',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/scoop/search').reply(200, data);
      return await search
        .getScoopSearchInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for scoop search', async () => {
      const data = {status: 400, error: 'Unable to fetch input parameters for scoop search'};
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/scoop/search').reply(400, data);
      return await expect(search.getScoopSearchInputs()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/outputfields/scoop/search', () => {
    test('should list output parameters for scoop search', async () => {
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
      ];
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/scoop/search').reply(200, data);
      return await search
        .getScoopSearchOutputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for scoop search', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch output response fields for scoop search',
      };
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/scoop/search').reply(400, data);
      return await expect(search.getScoopSearchOutputs()).rejects.toThrow(ZoomInfoException);
    });
  });
});
