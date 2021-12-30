import axios, {AxiosResponse} from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import IntentSearch from '../../../../src/Enterprise/Search/Intenet Search';
import {IIntentSearchResults} from '../../../../src/Enterprise/Search/Intenet Search/interfaces';

const mock = new MockAdapter(axios);
const search = new IntentSearch('accessTokenString');

describe('Intent Search - Integration Test', () => {
  describe('POST - /search/intent', () => {
    test('should fetch specific intents from parameters', async () => {
      const data = {
        maxResults: 1,
        totalResults: 1,
        currentPage: 1,
        data: [
          {
            id: 'd3ac21f6-f9f4-4a71-8ca9-8f4125937d2c',
            category: 'Cyber Security',
            topic: 'Mobile Security',
            signalScore: 83,
            audienceStrength: 'C',
            newSignal: true,
            signalDate: '7/5/2020 12:00 AM',
            trend: 24,
            recommendedContacts: [
              {
                id: -1766367996,
                firstName: 'David',
                lastName: 'Fike',
                jobTitle: 'President',
                jobFunction: [
                  {
                    name: 'Executive',
                    department: 'C-Suite',
                  },
                ],
              },
            ],
            company: {
              id: 118998385,
              name: 'Golden Gate University',
              website: 'www.ggu.edu',
              hasOtherTopicConsumption: true,
            },
          },
        ],
      };
      mock.onPost('https://api.zoominfo.com/search/intent').reply(200, data);
      return await search
        .getIntentSpecificSearch({topics: ['Cloud Security'], rpp: 25})
        .then((res: IIntentSearchResults) => expect(res).toEqual(data));
    });

    test('should throw error fetching specific intent from parameters', async () => {
      const data = {status: 400, error: 'Unable to fetch intents from intent search'};
      mock.onPost('https://api.zoominfo.com/search/intent').reply(400, data);
      return await expect(
        search.getIntentSpecificSearch({topics: ['Cloud Security'], rpp: 25})
      ).rejects.toThrow(ZoomInfoException);
    });

    test('should fetch company intents from parameters', async () => {
      const data = {
        maxResults: 1,
        totalResults: 1,
        currentPage: 1,
        data: [
          {
            id: 'd3ac21f6-f9f4-4a71-8ca9-8f4125937d2c',
            category: 'Cyber Security',
            topic: 'Mobile Security',
            signalScore: 83,
            audienceStrength: 'C',
            newSignal: true,
            signalDate: '7/5/2020 12:00 AM',
            trend: 24,
            recommendedContacts: [
              {
                id: -1766367996,
                firstName: 'David',
                lastName: 'Fike',
                jobTitle: 'President',
                jobFunction: [
                  {
                    name: 'Executive',
                    department: 'C-Suite',
                  },
                ],
              },
            ],
            company: {
              id: 118998385,
              name: 'Golden Gate University',
              website: 'www.ggu.edu',
              hasOtherTopicConsumption: true,
            },
          },
        ],
      };
      mock.onPost('https://api.zoominfo.com/search/intent').reply(200, data);
      return await search
        .getIntentCompanySearch({topics: ['Cloud Security'], country: 'US'})
        .then((res: IIntentSearchResults) => expect(res).toEqual(data));
    });

    test('should throw error fetching company intent from parameters', async () => {
      const data = {status: 400, error: 'Unable to fetch intents from intent search'};
      mock.onPost('https://api.zoominfo.com/search/intent').reply(400, data);
      return await expect(
        search.getIntentCompanySearch({topics: ['Cloud Security'], country: 'US'})
      ).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/inputfields/intent/search', () => {
    test('should list input parameters for intent search', async () => {
      const data = [
        {
          fieldName: 'topics',
          fieldType: 'ArrayList',
          description:
            "Intent topics. Accepts an Array of String. See the 'Intent Topics' endpoint for values.",
        },
        {
          fieldName: 'signalStartDate',
          fieldType: 'String',
          description: 'Start date for a company signaling interest in a topic',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/intent/search').reply(200, data);
      return await search
        .getIntentSearchInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for intent search', async () => {
      const data = {status: 400, error: 'Unable to fetch input parameters for intent search'};
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/intent/search').reply(400, data);
      return await expect(search.getIntentSearchInputs()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/outputfields/intent/search', () => {
    test('should list output parameters for intent search', async () => {
      const data = [
        {
          fieldName: 'id',
          description: 'Unique ZoomInfo identifier for a topic',
        },
        {
          fieldName: 'category',
          description: 'Intent category',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/intent/search').reply(200, data);
      return await search
        .getIntentSearchOutputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for intent search', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch output response fields for intent search',
      };
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/intent/search').reply(400, data);
      return await expect(search.getIntentSearchOutputs()).rejects.toThrow(ZoomInfoException);
    });
  });
});
