export interface ICompanySearch {
  rpp?: number;
  page?: number;
  sortOrder?: string;
  sortBy?: string;
  companyId?: string;
  companyName?: string;
  companyWebsite?: string;
  companyDescription?: string;
  parentId?: string;
  ultimateParentId?: string;
  companyTicker?: Array<string>;
  companyType?: string;
  address?: string;
  street?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  continent?: string;
  zipCodeRadiusMiles?: string;
  hashTagString?: string;
  techAttributeTagList?: string;
  subUnitTypes?: string;
  primaryIndustriesOnly?: boolean;
  industryCodes?: string;
  industryKeywords?: string;
  sicCodes?: string;
  naicsCodes?: string;
  revenueMin?: number;
  revenueMax?: number;
  revenue?: string;
  employeeRangeMin?: string;
  employeeRangeMax?: string;
  employeeCount?: string;
  companyRanking?: string;
  metroRegion?: string;
  locationSearchType?: string;
  fundingAmountMin?: number;
  fundingAmountMax?: number;
  fundingStartDate?: string;
  fundingEndDate?: string;
  excludedRegions?: string;
  zoominfoContactsMin?: string;
  zoominfoContactsMax?: string;
  companyStructureIncludedSubUnitTypes?: string;
  oneYearEmployeeGrowthRateMin?: string;
  oneYearEmployeeGrowthRateMax?: string;
  twoYearEmployeeGrowthRateMin?: string;
  twoYearEmployeeGrowthRateMax?: string;
}

export interface ICompanySearchResults {
  maxResults: number;
  totalResults: number;
  currentPage: number;
  data: Array<Object>;
}
