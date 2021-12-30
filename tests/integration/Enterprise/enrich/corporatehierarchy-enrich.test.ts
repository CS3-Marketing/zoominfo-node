import axios, {AxiosResponse} from 'axios';
import CorporateHiearchyEnrich from '../../../../src/Enterprise/Enrich/Corporate Hierarchy Enrich';
import MockAdapter from 'axios-mock-adapter';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import {ICorporateHierarchyEnrichResults} from '../../../../src/Enterprise/Enrich/Corporate Hierarchy Enrich/interfaces';

const mock = new MockAdapter(axios);
const enrich = new CorporateHiearchyEnrich('accessTokenString');

describe('Corporate Hierarchy Enrich - Integration Test', () => {
  describe('POST - /enrich/corporatehierarchy', () => {
    test('should fetch contact from parameters', async () => {
      const data = {
        success: true,
        data: {
          outputFields: [['parentage', 'familytree', 'companyid']],
        },
      };
      mock.onPost('https://api.zoominfo.com/enrich/corporatehierarchy').reply(200, data);
      return await enrich
        .getCorporateHiearchyEnrich([{companyId: '123abc'}])
        .then((res: ICorporateHierarchyEnrichResults) => expect(res).toEqual(data));
    });

    test('should throw error fetching contact from parameters', async () => {
      const data = {status: 400, error: 'Unable to fetch contacts from contact enrich'};
      mock.onPost('https://api.zoominfo.com/enrich/corporatehierarchy').reply(400, data);
      return await expect(
        enrich.getCorporateHiearchyEnrich([{companyId: '123abc'}])
      ).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/inputfields/contact/corporatehierarchy', () => {
    test('should list input parameters for corporate hierarchy enrich', async () => {
      const data = [
        {
          fieldName: 'companyId',
          fieldType: 'Integer',
          description: 'The id of the company you are searching for',
        },
        {
          fieldName: 'companyName',
          fieldType: 'String',
          description: 'The name of the company you are searching for',
        },
        {
          fieldName: 'companyWebsite',
          fieldType: 'String',
          description: 'The website of the company you are searching for',
        },
      ];
      mock
        .onGet('https://api.zoominfo.com/lookup/inputfields/corporatehierarchy/enrich')
        .reply(200, data);
      return await enrich
        .getCorporateHiearchyEnrichInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for contact enrich', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch input parameters for corporate hierarchy enrich',
      };
      mock
        .onGet('https://api.zoominfo.com/lookup/inputfields/corporatehierarchy/enrich')
        .reply(400, data);
      return await expect(enrich.getCorporateHiearchyEnrichInputs()).rejects.toThrow(
        ZoomInfoException
      );
    });
  });

  describe('GET - /lookup/outputfields/corporatehierarchy/enrich', () => {
    test('should list output parameters for corporate hierarchy enrich', async () => {
      const data = [
        {
          fieldName: 'parentage',
          description: 'All companies higher up in the corporate hierarchy for this company',
        },
        {
          fieldName: 'familyTree',
          description: 'All companies and locations in the family tree for this company',
        },
        {
          fieldName: 'companyId',
          description: 'The company id of the matching company',
        },
      ];
      mock
        .onGet('https://api.zoominfo.com/lookup/outputfields/corporatehierarchy/enrich')
        .reply(200, data);
      return await enrich
        .getCorporateHiearchyEnrichOutputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for corporate hierarchy enrich', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch output response fields for corporate hierarchy enrich',
      };
      mock
        .onGet('https://api.zoominfo.com/lookup/outputfields/corporatehierarchy/enrich')
        .reply(400, data);
      return await expect(enrich.getCorporateHiearchyEnrichOutputs()).rejects.toThrow(
        ZoomInfoException
      );
    });
  });
});
