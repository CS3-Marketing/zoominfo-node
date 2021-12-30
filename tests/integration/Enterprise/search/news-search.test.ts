import axios, {AxiosResponse} from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import NewsSearch from '../../../../src/Enterprise/Search/News Search';
import {INewsSearchResults} from '../../../../src/Enterprise/Search/News Search/interfaces';

const mock = new MockAdapter(axios);
const search = new NewsSearch('accessTokenString');

describe('News Search - Integration Test', () => {
  describe('POST - /search/news', () => {
    test('should fetch news from parameters', async () => {
      const data = {
        currentPage: 1,
        maxResults: 1,
        data: [
          {
            domain: 'newstral.com',
            title: "St. Luke's Hospital appoints interim president",
            url: 'https://newstral.com/en/article/en/1152923450/st-luke-s-hospital-appoints-interim-president',
            imageUrl: 'http://newstral.com/source-images/29300_original_1529243370.jpg',
            pageDate: '2020-05-28T04:26:13Z',
            categories: ['PERSON'],
            company: [
              {
                id: 31380745,
                name: 'The Toledo Blade',
              },
            ],
          },
        ],
      };
      mock.onPost('https://api.zoominfo.com/search/news').reply(200, data);
      return await search
        .getNewsSearch({rpp: 25})
        .then((res: INewsSearchResults) => expect(res).toEqual(data));
    });

    test('should throw error fetching news from parameters', async () => {
      const data = {status: 400, error: 'Unable to fetch news from news search'};
      mock.onPost('https://api.zoominfo.com/search/news').reply(400, data);
      return await expect(search.getNewsSearch({rpp: 25})).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/inputfields/news/search', () => {
    test('should list input parameters for news search', async () => {
      const data = [
        {
          fieldName: 'rpp',
          fieldType: 'Integer',
          description: 'Limits the results returned to the given number of results per page.',
        },
        {
          fieldName: 'page',
          fieldType: 'Integer',
          description: 'Provides the results for the given page, used in conjunction with rpp.',
        },
        {
          fieldName: 'categories',
          fieldType: 'ArrayList',
          description:
            "Category of news articles. Accepts an Array of String. See the 'News Categories' endpoint for values.",
        },
        {
          fieldName: 'pageDateMin',
          fieldType: 'String',
          description:
            'Specify the earliest publishing date for news articles returned. For example, 2020-01-01 will return all news articles published on or after Jan 1, 2020.',
        },
        {
          fieldName: 'pageDateMax',
          fieldType: 'String',
          description:
            'Specify the latest publishing date for news articles articles. For example, 2020-01-31 will return all new articles published on or before Jan 31, 2020.',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/news/search').reply(200, data);
      return await search
        .getNewsSearchInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for news search', async () => {
      const data = {status: 400, error: 'Unable to fetch input parameters for news search'};
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/news/search').reply(400, data);
      return await expect(search.getNewsSearchInputs()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/outputfields/news/search', () => {
    test('should list output parameters for news search', async () => {
      const data = [
        {
          fieldName: 'companyId',
          description: 'Unique ZoomInfo identifier for a company',
        },
        {
          fieldName: 'companyName',
          description: 'Company name',
        },
        {
          fieldName: 'domain',
          description: 'News article domain',
        },
        {
          fieldName: 'title',
          description: 'News article title',
        },
        {
          fieldName: 'url',
          description: 'News article URL',
        },
        {
          fieldName: 'imageUrl',
          description: 'News article image URL',
        },
        {
          fieldName: 'pageDate',
          description: 'News article date',
        },
        {
          fieldName: 'categories',
          description: 'News article categories',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/news/search').reply(200, data);
      return await search
        .getNewsSearchOutputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for news search', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch output response fields for news search',
      };
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/news/search').reply(400, data);
      return await expect(search.getNewsSearchOutputs()).rejects.toThrow(ZoomInfoException);
    });
  });
});
