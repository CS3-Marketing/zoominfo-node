import axios, {AxiosResponse} from 'axios';
import TechnologyEnrich from '../../../../src/Enterprise/Enrich/Technology Enrich';
import MockAdapter from 'axios-mock-adapter';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import {ITechnologyEnrichResults} from '../../../../src/Enterprise/Enrich/Technology Enrich/interfaces';

const mock = new MockAdapter(axios);
const enrich = new TechnologyEnrich('accessTokenString');

describe('Technology Enrich - Integration Test', () => {
  describe('POST - /enrich/tech', () => {
    test('should fetch company technology from parameters', async () => {
      const data = {
        success: true,
        data: {
          outputFields: [['id', 'name', 'locationmatch', 'website', 'state', 'city']],
        },
      };
      mock.onPost('https://api.zoominfo.com/enrich/tech').reply(200, data);
      return await enrich
        .getTechnologyEnrich({companyId: '123abc'})
        .then((res: ITechnologyEnrichResults) => expect(res).toEqual(data));
    });

    test('should throw error fetching company technology from parameters', async () => {
      const data = {status: 400, error: 'Unable to fetch technology from technology enrich'};
      mock.onPost('https://api.zoominfo.com/enrich/tech').reply(400, data);
      return await expect(enrich.getTechnologyEnrich({companyId: '123abc'})).rejects.toThrow(
        ZoomInfoException
      );
    });
  });

  describe('GET - /lookup/inputfields/tech/enrich', () => {
    test('should list input parameters for company technology enrich', async () => {
      const data = [
        {
          fieldName: 'companyId',
          fieldType: 'String',
          description: 'The id of the company for which you want to view technologies',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/tech/enrich').reply(200, data);
      return await enrich
        .getTechnologyEnrichInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for company technology enrich', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch input parameters for company technology enrich',
      };
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/tech/enrich').reply(400, data);
      return await expect(enrich.getTechnologyEnrichInputs()).rejects.toThrow(ZoomInfoException);
    });
  });
});
