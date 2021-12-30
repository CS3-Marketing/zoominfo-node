import axios, {AxiosResponse} from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Usage from '../../../../src/Enterprise/Usage';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';

const mock = new MockAdapter(axios);
const lookup = new Usage('accessTokenString');

describe('Usage - Integration Test', () => {
  describe('GET - /lookup/usage', () => {
    test('should get usage', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/usage').reply(200, data);
      return await lookup.getUsage().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting company rankings', async () => {
      const data = {status: 400, error: 'Unable to get companyranking'};
      mock.onGet('https://api.zoominfo.com/lookup/usage').reply(400, data);
      return await expect(lookup.getUsage()).rejects.toThrow(ZoomInfoException);
    });
  });
});
