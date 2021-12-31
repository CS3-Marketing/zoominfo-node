import Auth from '../../../src/Auth/';

describe('Auth - Unit Test', () => {
  test('should get issued time', async () => {
    const date = new Date();
    expect(Auth.getIAT(date)).toEqual(Math.floor(date.getTime() / 1000) - 60);
  });

  test('should get expiration time', async () => {
    const date = new Date();
    expect(Auth.getEXP(date)).toEqual(Math.floor(date.getTime() / 1000) + 5 * 60 - 60);
  });
});
