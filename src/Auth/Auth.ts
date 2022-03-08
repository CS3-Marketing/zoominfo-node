import axios, { AxiosError } from 'axios';
import rs from 'jsrsasign';
import { pRateLimit } from 'p-ratelimit';
import ZoomInfoException from '../helpers/Exception/ZoomInfoException';

/**
 * @class Auth
 * @docs https://api-docs.zoominfo.com/#78ab362c-ab1d-4541-9ad6-a257a370136d
 */
export default class Auth {
  private static AuthURL = 'https://api.zoominfo.com/authenticate';

  private static limit = pRateLimit({
    interval: 1000,
    rate: 1,
  });

  /**
   * Get JWT Token via Basic Auth
   * Note: Access Token is valid for 1 hour
   * @param username
   * @param password
   * @returns JWT Token
   */
  public static async getBasicAuthToken(username: string, password: string): Promise<string> {
    return this.limit(
      async (): Promise<string> =>
        axios
          .post(this.AuthURL, {
            username,
            password,
          })
          .then((res) => res.data.jwt)
          .catch((err: AxiosError) => {
            if (err.response) {
              throw new ZoomInfoException(err.response.status, err.response.data);
            } else throw new ZoomInfoException(500, 'Internal Server Error');
          }),
    );
  }

  /**
   * Get JWT Token via PKI
   * Note: Access Token is valid for 1 hour
   * @param username
   * @param clientId
   * @param privateKey
   * @returns JWT Token
   */
  public static async getPKIAuthToken(
    username: string,
    clientId: string,
    privateKey: string,
  ): Promise<string> {
    const dtNow = new Date();
    const alg = 'RS256';
    const iss = 'zoominfo-node-sdk';
    const aud = 'enterprise_api';

    const header = {
      typ: 'JWT',
      alg,
    };

    const data = {
      aud,
      iss,
      username,
      client_id: clientId,
      iat: Auth.getIAT(dtNow),
      exp: Auth.getEXP(dtNow),
    };

    const sHeader = JSON.stringify(header);
    const sPayload = JSON.stringify(data);

    const clientJWT = rs.KJUR.jws.JWS.sign(alg, sHeader, sPayload, privateKey);

    return this.limit(
      async (): Promise<string> =>
        axios
          .post(
            this.AuthURL,
            {},
            {
              headers: {
                Authorization: `Bearer ${clientJWT}`,
              },
            },
          )
          .then((res) => res.data.jwt)
          .catch((err: AxiosError) => {
            if (err.response) {
              throw new ZoomInfoException(err.response.status, err.response.data);
            } else throw new ZoomInfoException(500, 'Internal Server Error');
          }),
    );
  }

  /**
   * Get Issued Time
   * @param dtNow
   * @returns
   */
  public static getIAT(dtNow: Date): number {
    let iat = Math.floor(dtNow.getTime() / 1000);
    iat -= 60;
    return iat;
  }

  /**
   * Get Expiration Time
   * @param dtNow
   * @returns
   */
  public static getEXP(dtNow: Date): number {
    let exp = Math.floor(dtNow.getTime() / 1000) + 5 * 60;
    exp -= 60;
    return exp;
  }
}
