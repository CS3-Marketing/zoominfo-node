import {AxiosResponse} from 'axios';
import Api from '../../helpers/Api';
import ZoomInfoException from '../../helpers/Exception/ZoomInfoException';

/**
 * @class Lookup
 * @docs https://api-docs.zoominfo.com/#28358f09-9863-42af-a93c-6710a8cacf9d
 */
export default class Lookup extends Api {
  constructor(accessToken: string) {
    super(accessToken);
  }

  /**
   * Retrieve accepted Company Ranking values
   * @returns AxiosResponse['data']
   */
  public async getCompanyRanking(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/companyranking`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Continent values
   * @returns AxiosResponse['data']
   */
  public async getContinent(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/continent`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Country values
   * @returns AxiosResponse['data']
   */
  public async getCountry(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/country`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted State values
   * @returns AxiosResponse['data']
   */
  public async getState(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/state`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Contact Departments values
   * @returns AxiosResponse['data']
   */
  public async getContactDepartments(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/department`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Employee Count values
   * @returns AxiosResponse['data']
   */
  public async getEmployeeCount(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/employeecount`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted SIC Codes values
   * @returns AxiosResponse['data']
   */
  public async getSICCodes(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/siccode`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted NACIS Codes values
   * @returns AxiosResponse['data']
   */
  public async getNACISCodes(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/naicscode`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Industry Codes values
   * @returns AxiosResponse['data']
   */
  public async getIndustryCodes(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/industry`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Job Title Hierarchy values
   * @returns AxiosResponse['data']
   */
  public async getJobTitleHierarchy(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/jobtitlehierarchy`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Job Function values
   * @returns AxiosResponse['data']
   */
  public async getJobFunction(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/jobfunction`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Metro Area values
   * @returns AxiosResponse['data']
   */
  public async getMetroArea(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/metroarea`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Metro Area values
   * @returns AxiosResponse['data']
   */
  public async getRevenueRange(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/revenuerange`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Scoop Topic values
   * @returns AxiosResponse['data']
   */
  public async getScoopTopic(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/scooptopic`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Scoop Types values
   * @returns AxiosResponse['data']
   */
  public async getScoopTypes(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/scooptype`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Scoop Department values
   * @returns AxiosResponse['data']
   */
  public async getScoopDepartment(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/scoopdepartment`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Company Type values
   * @returns AxiosResponse['data']
   */
  public async getCompanyType(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/companytype`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Board Member values
   * @returns AxiosResponse['data']
   */
  public async getBoardMembers(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/boardMember`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Management Levels values
   * @returns AxiosResponse['data']
   */
  public async getManagementLevels(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/managementLevel`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Sub Unit Type values
   * @returns AxiosResponse['data']
   */
  public async getSubUnitType(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/subunittypes`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Tech Category values
   * @returns AxiosResponse['data']
   */
  public async getTechCategory(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/tech/category`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Tech Vendor values
   * @returns AxiosResponse['data']
   */
  public async getTechVendor(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/tech/vendor`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Tech Product values
   * @returns AxiosResponse['data']
   */
  public async getTechProduct(): Promise<AxiosResponse['data']> {
    return this.get(
      `/lookup/tech/product?vendor=microsoft corporation&parentCategory=Communication and Collaboration&category=Unified Communications`
    )
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Hash Tag values
   * @returns AxiosResponse['data']
   */
  public async getHashTag(): Promise<AxiosResponse['data']> {
    return this.get(
      `/lookup/hashtag?vendor=microsoft corporation&parentCategory=Communication and Collaboration&category=Unified Communications`
    )
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Intent Topic values
   * @returns AxiosResponse['data']
   */
  public async getIntentTopics(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/intent/topics`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted News Categories values
   * @returns AxiosResponse['data']
   */
  public async getNewsCategories(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/news/categories`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Employee Category Band values
   * @returns AxiosResponse['data']
   */
  public async getEmployeeCategoryBand(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/employee-category-band`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Revenue Category Band values
   * @returns AxiosResponse['data']
   */
  public async getRevenueCategoryBand(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/revenue-category-band`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }

  /**
   * Retrieve accepted Hierarchy Code values
   * @returns AxiosResponse['data']
   */
  public async getHierarchyCode(): Promise<AxiosResponse['data']> {
    return this.get(`/lookup/hierarchy-code`)
      .then((res: AxiosResponse) => res.data)
      .catch((err: ZoomInfoException) => {
        throw err;
      });
  }
}
