import axios, {AxiosResponse} from 'axios';
import HashtagsEnrich from '../../../../src/Enterprise/Enrich/Hashtags Enrich';
import MockAdapter from 'axios-mock-adapter';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import {IHashTagEnrichResults} from '../../../../src/Enterprise/Enrich/Hashtags Enrich/interfaces';

const mock = new MockAdapter(axios);
const enrich = new HashtagsEnrich('accessTokenString');

describe('HashTags Enrich - Integration Test', () => {
  describe('POST - /enrich/hashtag', () => {
    test('should fetch company hashtag from parameters', async () => {
      const data = {
        success: true,
        data: {
          outputFields: [['id', 'name', 'locationmatch', 'website', 'state', 'city']],
        },
      };
      mock.onPost('https://api.zoominfo.com/enrich/hashtag').reply(200, data);
      return await enrich
        .getHashtagsEnrich({companyId: '123abc'})
        .then((res: IHashTagEnrichResults) => expect(res).toEqual(data));
    });

    test('should throw error fetching company hashtag from parameters', async () => {
      const data = {status: 400, error: 'Unable to fetch hashtag from hashtag enrich'};
      mock.onPost('https://api.zoominfo.com/enrich/hashtag').reply(400, data);
      return await expect(enrich.getHashtagsEnrich({companyId: '123abc'})).rejects.toThrow(
        ZoomInfoException
      );
    });
  });

  describe('GET - /lookup/inputfields/hashtag/enrich', () => {
    test('should list input parameters for company hashtag enrich', async () => {
      const data = [
        {
          fieldName: 'companyId',
          fieldType: 'String',
          description: 'The id of the company for which you want to view technologies',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/hashtag/enrich').reply(200, data);
      return await enrich
        .getHashtagsEnrichInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for company hashtag enrich', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch input parameters for company hashtag enrich',
      };
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/hashtag/enrich').reply(400, data);
      return await expect(enrich.getHashtagsEnrichInputs()).rejects.toThrow(ZoomInfoException);
    });
  });
});
