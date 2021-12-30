import axios, {AxiosResponse} from 'axios';
import CompanyMasterDataEnrich from '../../../../src/Enterprise/Enrich/Company Master Data Enrich';
import MockAdapter from 'axios-mock-adapter';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import {ICompanyMasterDataEnrichResults} from '../../../../src/Enterprise/Enrich/Company Master Data Enrich/interfaces';

const mock = new MockAdapter(axios);
const enrich = new CompanyMasterDataEnrich('accessTokenString');

describe('Company Master Enrich - Integration Test', () => {
  describe('POST - /enrich/company-master', () => {
    test('should fetch company-master from parameters', async () => {
      const data = {
        success: true,
        data: {
          result: [],
        },
      };
      mock.onPost('https://api.zoominfo.com/enrich/company-master').reply(200, data);
      return await enrich
        .getCompanyMasterDataEnrich([{zi_es_location_id: '123'}])
        .then((res: ICompanyMasterDataEnrichResults) => expect(res).toEqual(data));
    });

    test('should throw error fetching company-master from parameters', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch company-master from company-master enrich',
      };
      mock.onPost('https://api.zoominfo.com/enrich/company-master').reply(400, data);
      return await expect(
        enrich.getCompanyMasterDataEnrich([{zi_es_location_id: '123'}])
      ).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/inputfields/company-master/enrich', () => {
    test('should list input parameters for company-master enrich', async () => {
      const data = [
        {
          fieldName: 'zi_c_location_id',
          fieldType: 'Long',
          description: 'Unique ZoomInfo identifier for a company',
        },
      ];
      mock
        .onGet('https://api.zoominfo.com/lookup/inputfields/company-master/enrich')
        .reply(200, data);
      return await enrich
        .getCompanyMasterDataEnrichInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for company-master enrich', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch input parameters for company-master enrich',
      };
      mock
        .onGet('https://api.zoominfo.com/lookup/inputfields/company-master/enrich')
        .reply(400, data);
      return await expect(enrich.getCompanyMasterDataEnrichInputs()).rejects.toThrow(
        ZoomInfoException
      );
    });
  });

  describe('GET - /lookup/outputields/company-master/enrich', () => {
    test('should list output parameters for company-master enrich', async () => {
      const data = [
        {
          fieldName: 'zi_c_location_id',
          dataType: 'Long',
          description: 'ZoomInfo unique identifier for company location',
        },
        {
          fieldName: 'zi_es_ecid',
          dataType: 'Long',
          description: 'EverString Company ID (ECID) is a unique identifier for a company entity',
        },
      ];
      mock
        .onGet('https://api.zoominfo.com/lookup/outputfields/company-master/enrich')
        .reply(200, data);
      return await enrich
        .getCompanyMasterDataEnrichOutputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for company-master enrich', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch output response fields for company-master enrich',
      };
      mock
        .onGet('https://api.zoominfo.com/lookup/outputfields/company-master/enrich')
        .reply(400, data);
      return await expect(enrich.getCompanyMasterDataEnrichOutputs()).rejects.toThrow(
        ZoomInfoException
      );
    });
  });
});
