export interface ITechnologyEnrich {
  companyId: string;
}

export interface ITechnologyEnrichResults {
  maxResults: number;
  totalResults: number;
  currentPage: number;
  data: Array<Object>;
}
