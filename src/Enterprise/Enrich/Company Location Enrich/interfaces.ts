export interface ICompanyLocationEnrich {
  companyId?: string;
}

export interface ICompanyLocationEnrichResults {
  maxResults: number;
  totalResults: number;
  currentPage: number;
  data: Array<Object>;
}
