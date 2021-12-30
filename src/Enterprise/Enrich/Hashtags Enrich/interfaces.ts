export interface IHashTagEnrich {
  companyId: string;
}

export interface IHashTagEnrichResults {
  maxResults: number;
  totalResults: number;
  currentPage: number;
  data: Array<Object>;
}
