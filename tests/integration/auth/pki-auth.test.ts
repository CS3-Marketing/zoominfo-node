import crypto from 'crypto';
import axios from 'axios';
import Auth from '../../../src/Auth';
import MockAdapter from 'axios-mock-adapter';
import ZoomInfoException from '../../../src/helpers/Exception/ZoomInfoException';

var mock = new MockAdapter(axios);

describe('PKI Auth - Integration Test', () => {
  const {privateKey} = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  });

  test('should fetch user access token', async () => {
    const data = {
      jwt: 'accessTokenString',
    };
    mock.onPost('https://api.zoominfo.com/authenticate').reply(200, data);
    await Auth.getPKIAuthToken('username', 'cliendId', privateKey).then((res: any) =>
      expect(res).toEqual(data.jwt)
    );
  });

  test('should throw credentials error', async () => {
    const data = {error: 'Invalid credentials'};
    mock.onPost('https://api.zoominfo.com/authenticate').reply(401, data);
    await expect(Auth.getPKIAuthToken('username', 'cliendId', privateKey)).rejects.toThrow(
      ZoomInfoException
    );
  });
});
