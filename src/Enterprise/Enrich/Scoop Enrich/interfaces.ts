export interface IScoopEnrich {
  companyId?: string;
  companyName?: string;
  companyWebsite?: string;
  publishedStartDate?: string;
  publishedEndDate?: string;
  updatedSinceCreation?: boolean;
  scoopType?: string;
  scoopTopic?: string;
  department?: string;
  scoopId?: string;
  description?: string;
  rpp?: number;
  page?: number;
  sortBy?: string;
  sortOrder?: string;
}

export interface IScoopEnrichResult {
  maxResults: number;
  totalResults: number;
  currentPage: number;
  data: Array<Object>;
}
