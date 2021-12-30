export interface IOrgChartEnrich {
  companyId?: string;
  department?: string;
}

export interface IOrgChartEnrichResults {
  maxResults: string;
  totalResults: string;
  currentPage: number;
  data: Array<Object>;
}
