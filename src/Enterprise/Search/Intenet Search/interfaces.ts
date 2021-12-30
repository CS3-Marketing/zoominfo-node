export interface IIntentSpecificSearch {
  topics: Array<string>;
  signalStartDate?: string;
  signalEndDate?: string;
  signalScoreMin?: number;
  signalScoreMax?: number;
  audienceStrengthMin?: 'A' | 'B' | 'C' | 'D' | 'E';
  audienceStrengthMax?: 'A' | 'B' | 'C' | 'D' | 'E';
  rpp?: number;
  page?: number;
  sortOrder?: 'asc' | 'ascending' | 'desc' | 'descending';
  sortBy?: 'signalDate' | 'companyName' | 'signalScore' | 'category' | 'topic' | 'audienceStrength';
}

export interface IIntentCompanySearch {
  topics: Array<string>;
  companyDescription?: string;
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
  certified?: number;
  excludeDefunctCompanies?: boolean;
  oneYearEmployeeGrowthRateMin?: string;
  oneYearEmployeeGrowthRateMax?: string;
  twoYearEmployeeGrowthRateMin?: string;
  twoYearEmployeeGrowthRateMax?: string;
}

export interface IIntentSearchResults {
  maxResults: number;
  totalResults: number;
  currentPage: number;
  data: Array<Object>;
}
