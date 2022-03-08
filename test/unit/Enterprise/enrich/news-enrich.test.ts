import axios, { AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import NewsEnrich from '../../../../src/Enterprise/Enrich/News Enrich/NewsEnrich';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import { INewsEnrichResults } from '../../../../src/Enterprise/Enrich/News Enrich/interfaces';

const mock = new MockAdapter(axios);
const enrich = new NewsEnrich('accessTokenString');

describe('News Enrich - Integration Test', () => {
  describe('POST - /enrich/news', () => {
    test('should fetch news from parameters', async () => {
      const data = {
        maxResults: 3,
        totalResults: 3,
        currentPage: 1,
        data: [
          {
            domain: 'www.sbwire.com',
            title:
              'IoT in Banking &amp; Financial Service Market to Witness Massive Growth by 2025 : Microsoft, IBM, Oracle',
            url: 'http://www.sbwire.com/press-releases/iot-in-banking-financial-service-market-to-witness-massive-growth-by-2025-microsoft-ibm-oracle-1288507.htm',
            imageUrl: 'http://media.releasewire.com/photos/show/?id=244413',
            pageDate: '2020-04-23T16:50:00Z',
            categories: ['PRODUCT'],
            company: [
              {
                id: 18579882,
                name: 'IBM Corporation',
              },
            ],
          },
        ],
      };
      mock.onPost('https://api.zoominfo.com/enrich/news').reply(200, data);
      return enrich
        .getNewsEnrich({ companyId: '123' })
        .then((res: INewsEnrichResults) => expect(res).toEqual(data));
    });

    test('should throw error fetching news from parameters', async () => {
      const data = { status: 400, error: 'Unable to fetch news from news enrich' };
      mock.onPost('https://api.zoominfo.com/enrich/news').reply(400, data);
      return expect(enrich.getNewsEnrich({ companyId: '123' })).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/inputfields/news/enrich', () => {
    test('should list input parameters for news enrich', async () => {
      const data = [
        {
          fieldName: 'companyId',
          fieldType: 'Long',
          description: 'The id of the company you are searching for',
        },
        {
          fieldName: 'limit',
          fieldType: 'Integer',
          description: 'Maximum number of articles to return. The maximum limit is 5000.',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/news/enrich').reply(200, data);
      return enrich
        .getNewsEnrichInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for news enrich', async () => {
      const data = { status: 400, error: 'Unable to fetch input parameters for news enrich' };
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/news/enrich').reply(400, data);
      return expect(enrich.getNewsEnrichInputs()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/outputfields/news/enrich', () => {
    test('should list output parameters for news enrich', async () => {
      const data = [
        {
          fieldName: 'companyId',
          description: 'Unique ZoomInfo identifier for a company',
        },
        {
          fieldName: 'companyName',
          description: 'Company name',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/news/enrich').reply(200, data);
      return enrich
        .getNewsEnrichOutputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for news enrich', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch output response fields for news enrich',
      };
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/news/enrich').reply(400, data);
      return expect(enrich.getNewsEnrichOutputs()).rejects.toThrow(ZoomInfoException);
    });
  });
});
