import axios, {AxiosResponse} from 'axios';
import OrgChartEnrich from '../../../../src/Enterprise/Enrich/OrgChart Enrich';
import MockAdapter from 'axios-mock-adapter';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';
import {IOrgChartEnrichResults} from '../../../../src/Enterprise/Enrich/OrgChart Enrich/interfaces';

const mock = new MockAdapter(axios);
const enrich = new OrgChartEnrich('accessTokenString');

describe('Org Chart Enrich - Integration Test', () => {
  describe('POST - /enrich/orgchart', () => {
    test('should fetch company org chart from parameters', async () => {
      const data = {
        success: true,
        data: {
          outputFields: [['id', 'name', 'locationmatch', 'website', 'state', 'city']],
        },
      };
      mock.onPost('https://api.zoominfo.com/enrich/orgchart').reply(200, data);
      return await enrich
        .getOrgChartEnrich({companyId: '123'})
        .then((res: IOrgChartEnrichResults) => expect(res).toEqual(data));
    });

    test('should throw error fetching org chart from parameters', async () => {
      const data = {status: 400, error: 'Unable to fetch org chart from org chat enrich'};
      mock.onPost('https://api.zoominfo.com/enrich/orgchart').reply(400, data);
      return await expect(enrich.getOrgChartEnrich({companyId: '123'})).rejects.toThrow(
        ZoomInfoException
      );
    });
  });

  describe('GET - /lookup/inputfields/orgchart/enrich', () => {
    test('should list input parameters for org chart enrich', async () => {
      const data = [
        {
          fieldName: 'companyId',
          fieldType: 'String',
          description: 'The id of the company for which you want to view the org chart',
        },
        {
          fieldName: 'department',
          fieldType: 'String',
          description:
            'It must contain comma delimited strings of departments to display org charts from this endpoint : lookup/department',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/orgchart/enrich').reply(200, data);
      return await enrich
        .getOrgChartEnrichInputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for org chart enrich', async () => {
      const data = {status: 400, error: 'Unable to fetch input parameters for org chart enrich'};
      mock.onGet('https://api.zoominfo.com/lookup/inputfields/orgchart/enrich').reply(400, data);
      return await expect(enrich.getOrgChartEnrichInputs()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/outputfields/orgchart/enrich', () => {
    test('should list output parameters for org chart enrich', async () => {
      const data = [
        {
          fieldName: 'id',
          description: 'Unique ZoomInfo identifier for the contact',
        },
        {
          fieldName: 'firstName',
          description: 'Contact first name',
        },
      ];
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/orgchart/enrich').reply(200, data);
      return await enrich
        .getOrgChartEnrichOutputs()
        .then((res: AxiosResponse['data']) => expect(res).toEqual(data));
    });

    test('should throw error fetching input parameters for org chart enrich', async () => {
      const data = {
        status: 400,
        error: 'Unable to fetch output response fields for org chart enrich',
      };
      mock.onGet('https://api.zoominfo.com/lookup/outputfields/orgchart/enrich').reply(400, data);
      return await expect(enrich.getOrgChartEnrichOutputs()).rejects.toThrow(ZoomInfoException);
    });
  });
});
