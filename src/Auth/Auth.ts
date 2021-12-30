import axios, {AxiosError} from 'axios';
import rs from 'jsrsasign';
import ZoomInfoException from '../helpers/Exception/ZoomInfoException';

/**
 * @class Auth
 * @docs https://api-docs.zoominfo.com/#78ab362c-ab1d-4541-9ad6-a257a370136d
 */
export default class Auth {
  private static AuthURL = 'https://api.zoominfo.com/authenticate';

  /**
   * Get JWT Token via Basic Auth
   * Note: Access Token is valid for 1 hour
   * @param username
   * @param password
   * @returns JWT Token
   */
  public static async getBasicAuthToken(username: string, password: string): Promise<string> {
    return axios
      .post(this.AuthURL, {
        username,
        password,
      })
      .then(res => res.data.jwt)
      .catch((err: AxiosError) => {
        if (err.response) {
          throw new ZoomInfoException(err.response.status, err.response.data);
        } else throw new ZoomInfoException(500, 'Internal Server Error');
      });
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
    privateKey: string
  ): Promise<string> {
    const dtNow = new Date();
    let alg = 'RS256';
    let iss = 'zoominfo-node-sdk';
    let aud = 'enterprise_api';

    let header = {
      typ: 'JWT',
      alg: alg,
    };

    let data = {
      aud: aud,
      iss: iss,
      username: username,
      client_id: clientId,
      iat: Auth.getIAT(dtNow),
      exp: Auth.getEXP(dtNow),
    };

    let sHeader = JSON.stringify(header);
    let sPayload = JSON.stringify(data);

    let clientJWT = rs.KJUR.jws.JWS.sign(alg, sHeader, sPayload, privateKey);

    return axios
      .post(
        this.AuthURL,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + clientJWT,
          },
        }
      )
      .then(res => res.data.jwt)
      .catch((err: AxiosError) => {
        if (err.response) {
          throw new ZoomInfoException(err.response.status, err.response.data);
        } else throw new ZoomInfoException(500, 'Internal Server Error');
      });
  }

  /**
   * Get Issued Time
   * @param dtNow
   * @returns
   */
  public static getIAT(dtNow: Date): number {
    let iat = Math.floor(dtNow.getTime() / 1000);
    iat = iat - 60;
    return iat;
  }

  /**
   * Get Expiration Time
   * @param dtNow
   * @returns
   */
  public static getEXP(dtNow: Date): number {
    let exp = Math.floor(dtNow.getTime() / 1000) + 5 * 60;
    exp = exp - 60;
    return exp;
  }
}
