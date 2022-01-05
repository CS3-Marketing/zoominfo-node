export interface ICompanyEnrich {
  matchCompanyInput: Array<ICompanyObject>;
  outputFields: string[];
}

export interface ICompanyObject {
  companyId?: number;
  companyName?: string;
  companyWebsite?: string;
  companyTicker?: string;
  companyPhone?: string;
  companyFax?: string;
  companyStreet?: string;
  companyCity?: string;
  companyState?: string;
  companyZipCode?: string;
  companyCountry?: string;
  ipAddress?: string;
}

export const outputFields = [
  'id',
  'ticker',
  'name',
  'website',
  'domainList',
  'logo',
  'socialMediaUrls',
  'revenue',
  'employeeCount',
  'numberOfContactsInZoomInfo',
  'phone',
  'fax',
  'street',
  'city',
  'state',
  'zipCode',
  'country',
  'companyStatus',
  'companyStatusDate',
  'descriptionList',
  'sicCodes',
  'naicsCodes',
  'competitors',
  'ultimateParentId',
  'ultimateParentName',
  'ultimateParentRevenue',
  'ultimateParentEmployees',
  'subUnitType',
  'subUnitIndustries',
  'primaryIndustry',
  'industries',
  'locationMatch',
  'parentId',
  'parentName',
  'locationCount',
  'alexaRank',
  'metroArea',
  'lastUpdatedDate',
  'createdDate',
  'certificationDate',
  'certified',
  'products',
  'revenueRange',
  'employeeRange',
  'companyFunding',
  'recentFundingAmount',
  'recentFundingDate',
  'totalFundingAmount',
  'employeeGrowth',
  'continent',
  'type',
  'foundedYear',
  'isDefunct',
  'departmentBudgets',
];

export interface ICompanyEnrichResults {
  success: boolean;
  data: Array<Object>;
}
