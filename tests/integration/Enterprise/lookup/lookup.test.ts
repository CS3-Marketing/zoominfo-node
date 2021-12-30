import axios, {AxiosResponse} from 'axios';
import Lookup from '../../../../src/Enterprise/Lookup';
import MockAdapter from 'axios-mock-adapter';
import ZoomInfoException from '../../../../src/helpers/Exception/ZoomInfoException';

const mock = new MockAdapter(axios);
const lookup = new Lookup('accessTokenString');

describe('Lookup - Integration Test', () => {
  describe('GET - /lookup/companyranking', () => {
    test('should get company rankings', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/companyranking').reply(200, data);
      return await lookup
        .getCompanyRanking()
        .then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting company rankings', async () => {
      const data = {status: 400, error: 'Unable to get companyranking'};
      mock.onGet('https://api.zoominfo.com/lookup/companyranking').reply(400, data);
      return await expect(lookup.getCompanyRanking()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/continent', () => {
    test('should get continent', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/continent').reply(200, data);
      return await lookup.getContinent().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting continent', async () => {
      const data = {status: 400, error: 'Unable to get continent'};
      mock.onGet('https://api.zoominfo.com/lookup/continent').reply(400, data);
      return await expect(lookup.getContinent()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/country', () => {
    test('should get country', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/country').reply(200, data);
      return await lookup.getCountry().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting country', async () => {
      const data = {status: 400, error: 'Unable to get country'};
      mock.onGet('https://api.zoominfo.com/lookup/country').reply(400, data);
      return await expect(lookup.getCountry()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/state', () => {
    test('should get state', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/state').reply(200, data);
      return await lookup.getState().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting state', async () => {
      const data = {status: 400, error: 'Unable to get state'};
      mock.onGet('https://api.zoominfo.com/lookup/state').reply(400, data);
      return await expect(lookup.getState()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/department', () => {
    test('should get department', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/department').reply(200, data);
      return await lookup
        .getContactDepartments()
        .then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting department', async () => {
      const data = {status: 400, error: 'Unable to get department'};
      mock.onGet('https://api.zoominfo.com/lookup/department').reply(400, data);
      return await expect(lookup.getContactDepartments()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/employeecount', () => {
    test('should get employeecount', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/employeecount').reply(200, data);
      return await lookup
        .getEmployeeCount()
        .then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting employeecount', async () => {
      const data = {status: 400, error: 'Unable to get employeecount'};
      mock.onGet('https://api.zoominfo.com/lookup/employeecount').reply(400, data);
      return await expect(lookup.getEmployeeCount()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/siccode', () => {
    test('should get siccode', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/siccode').reply(200, data);
      return await lookup.getSICCodes().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting siccode', async () => {
      const data = {status: 400, error: 'Unable to get siccode'};
      mock.onGet('https://api.zoominfo.com/lookup/siccode').reply(400, data);
      return await expect(lookup.getSICCodes()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/naicscode', () => {
    test('should get naicscode', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/naicscode').reply(200, data);
      return await lookup.getNACISCodes().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting naicscode', async () => {
      const data = {status: 400, error: 'Unable to get naicscode'};
      mock.onGet('https://api.zoominfo.com/lookup/naicscode').reply(400, data);
      return await expect(lookup.getNACISCodes()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/industry', () => {
    test('should get industry', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/industry').reply(200, data);
      return await lookup
        .getIndustryCodes()
        .then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting industry', async () => {
      const data = {status: 400, error: 'Unable to get industry'};
      mock.onGet('https://api.zoominfo.com/lookup/industry').reply(400, data);
      return await expect(lookup.getIndustryCodes()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/jobtitlehierarchy', () => {
    test('should get jobtitlehierarchy', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/jobtitlehierarchy').reply(200, data);
      return await lookup
        .getJobTitleHierarchy()
        .then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting jobtitlehierarchy', async () => {
      const data = {status: 400, error: 'Unable to get jobtitlehierarchy'};
      mock.onGet('https://api.zoominfo.com/lookup/jobtitlehierarchy').reply(400, data);
      return await expect(lookup.getJobTitleHierarchy()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/jobfunction', () => {
    test('should get jobfunction', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/jobfunction').reply(200, data);
      return await lookup.getJobFunction().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting jobfunction', async () => {
      const data = {status: 400, error: 'Unable to get jobfunction'};
      mock.onGet('https://api.zoominfo.com/lookup/jobfunction').reply(400, data);
      return await expect(lookup.getJobFunction()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/metroarea', () => {
    test('should get metroarea', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/metroarea').reply(200, data);
      return await lookup.getMetroArea().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting metroarea', async () => {
      const data = {status: 400, error: 'Unable to get metroarea'};
      mock.onGet('https://api.zoominfo.com/lookup/metroarea').reply(400, data);
      return await expect(lookup.getMetroArea()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/revenuerange', () => {
    test('should get revenuerange', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/revenuerange').reply(200, data);
      return await lookup.getRevenueRange().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting revenuerange', async () => {
      const data = {status: 400, error: 'Unable to get revenuerange'};
      mock.onGet('https://api.zoominfo.com/lookup/revenuerange').reply(400, data);
      return await expect(lookup.getRevenueRange()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/scooptopic', () => {
    test('should get scooptopic', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/scooptopic').reply(200, data);
      return await lookup.getScoopTopic().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting scooptopic', async () => {
      const data = {status: 400, error: 'Unable to get scooptopic'};
      mock.onGet('https://api.zoominfo.com/lookup/scooptopic').reply(400, data);
      return await expect(lookup.getScoopTopic()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/scooptype', () => {
    test('should get scooptype', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/scooptype').reply(200, data);
      return await lookup.getScoopTypes().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting scooptype', async () => {
      const data = {status: 400, error: 'Unable to get scooptype'};
      mock.onGet('https://api.zoominfo.com/lookup/scooptype').reply(400, data);
      return await expect(lookup.getScoopTypes()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/scoopdepartment', () => {
    test('should get scoopdepartment', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/scoopdepartment').reply(200, data);
      return await lookup
        .getScoopDepartment()
        .then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting scoopdepartment', async () => {
      const data = {status: 400, error: 'Unable to get scoopdepartment'};
      mock.onGet('https://api.zoominfo.com/lookup/scoopdepartment').reply(400, data);
      return await expect(lookup.getScoopDepartment()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/companytype', () => {
    test('should get companytype', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/companytype').reply(200, data);
      return await lookup.getCompanyType().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting companytype', async () => {
      const data = {status: 400, error: 'Unable to get companytype'};
      mock.onGet('https://api.zoominfo.com/lookup/companytype').reply(400, data);
      return await expect(lookup.getCompanyType()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/boardMember', () => {
    test('should get boardMember', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/boardMember').reply(200, data);
      return await lookup.getBoardMembers().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting boardMember', async () => {
      const data = {status: 400, error: 'Unable to get boardMember'};
      mock.onGet('https://api.zoominfo.com/lookup/boardMember').reply(400, data);
      return await expect(lookup.getBoardMembers()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/managementLevel', () => {
    test('should get managementLevel', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/managementLevel').reply(200, data);
      return await lookup
        .getManagementLevels()
        .then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting managementLevel', async () => {
      const data = {status: 400, error: 'Unable to get managementLevel'};
      mock.onGet('https://api.zoominfo.com/lookup/managementLevel').reply(400, data);
      return await expect(lookup.getManagementLevels()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/subunittypes', () => {
    test('should get subunittypes', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/subunittypes').reply(200, data);
      return await lookup.getSubUnitType().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting subunittypes', async () => {
      const data = {status: 400, error: 'Unable to get subunittypes'};
      mock.onGet('https://api.zoominfo.com/lookup/subunittypes').reply(400, data);
      return await expect(lookup.getSubUnitType()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/tech/category', () => {
    test('should get tech category', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/tech/category').reply(200, data);
      return await lookup.getTechCategory().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting tech category', async () => {
      const data = {status: 400, error: 'Unable to get tech category'};
      mock.onGet('https://api.zoominfo.com/lookup/tech/category').reply(400, data);
      return await expect(lookup.getTechCategory()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/tech/vendor', () => {
    test('should get tech vendor', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/tech/vendor').reply(200, data);
      return await lookup.getTechVendor().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting tech vendor', async () => {
      const data = {status: 400, error: 'Unable to get tech vendor'};
      mock.onGet('https://api.zoominfo.com/lookup/tech/vendor').reply(400, data);
      return await expect(lookup.getTechVendor()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/tech/product', () => {
    test('should get tech product', async () => {
      const data = {
        status: 200,
      };
      mock
        .onGet(
          'https://api.zoominfo.com/lookup/tech/product?vendor=microsoft corporation&parentCategory=Communication and Collaboration&category=Unified Communications'
        )
        .reply(200, data);
      return await lookup.getTechProduct().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting tech product', async () => {
      const data = {status: 400, error: 'Unable to get tech product'};
      mock
        .onGet(
          'https://api.zoominfo.com/lookup/tech/product?vendor=microsoft corporation&parentCategory=Communication and Collaboration&category=Unified Communications'
        )
        .reply(400, data);
      return await expect(lookup.getTechProduct()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/hashtag', () => {
    test('should get hashtag', async () => {
      const data = {
        status: 200,
      };
      mock
        .onGet(
          'https://api.zoominfo.com/lookup/hashtag?vendor=microsoft corporation&parentCategory=Communication and Collaboration&category=Unified Communications'
        )
        .reply(200, data);
      return await lookup.getHashTag().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting hashtag', async () => {
      const data = {status: 400, error: 'Unable to get hashtag'};
      mock
        .onGet(
          'https://api.zoominfo.com/lookup/hashtag?vendor=microsoft corporation&parentCategory=Communication and Collaboration&category=Unified Communications'
        )
        .reply(400, data);
      return await expect(lookup.getHashTag()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/intent/topics', () => {
    test('should get intent topics', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/intent/topics').reply(200, data);
      return await lookup.getIntentTopics().then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting hashtag', async () => {
      const data = {status: 400, error: 'Unable to get intent topics'};
      mock.onGet('https://api.zoominfo.com/lookup/intent/topics').reply(400, data);
      return await expect(lookup.getIntentTopics()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/news/categories', () => {
    test('should get news categories', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/news/categories').reply(200, data);
      return await lookup
        .getNewsCategories()
        .then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting news categories', async () => {
      const data = {status: 400, error: 'Unable to get news categories'};
      mock.onGet('https://api.zoominfo.com/lookup/news/categories').reply(400, data);
      return await expect(lookup.getNewsCategories()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/employee-category-band', () => {
    test('should get employee category band', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/employee-category-band').reply(200, data);
      return await lookup
        .getEmployeeCategoryBand()
        .then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting employee category band', async () => {
      const data = {status: 400, error: 'Unable to get employee category band'};
      mock.onGet('https://api.zoominfo.com/lookup/employee-category-band').reply(400, data);
      return await expect(lookup.getEmployeeCategoryBand()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/revenue-category-band', () => {
    test('should get revenue category band', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/revenue-category-band').reply(200, data);
      return await lookup
        .getRevenueCategoryBand()
        .then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting revenue category band', async () => {
      const data = {status: 400, error: 'Unable to get revenue category band'};
      mock.onGet('https://api.zoominfo.com/lookup/revenue-category-band').reply(400, data);
      return await expect(lookup.getRevenueCategoryBand()).rejects.toThrow(ZoomInfoException);
    });
  });

  describe('GET - /lookup/hierarchy-code', () => {
    test('should get hierarchy code', async () => {
      const data = {
        status: 200,
      };
      mock.onGet('https://api.zoominfo.com/lookup/hierarchy-code').reply(200, data);
      return await lookup
        .getHierarchyCode()
        .then((res: AxiosResponse) => expect(res).toEqual(data));
    });

    test('should throw error getting revenue category band', async () => {
      const data = {status: 400, error: 'Unable to get revenue category band'};
      mock.onGet('https://api.zoominfo.com/lookup/hierarchy-code').reply(400, data);
      return await expect(lookup.getHierarchyCode()).rejects.toThrow(ZoomInfoException);
    });
  });
});
