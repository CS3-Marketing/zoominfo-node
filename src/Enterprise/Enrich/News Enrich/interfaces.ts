export interface INewsEnrich {
  companyId?: string;
  limit?: number;
  categories?: Array<string>;
  url?: Array<string>;
  pageDateMin?: string;
  pageDateMax?: string;
}

export interface INewsEnrichResults {
  maxResults: number;
  totalResults: number;
  currentPage: number;
  data: Array<Object>;
}
