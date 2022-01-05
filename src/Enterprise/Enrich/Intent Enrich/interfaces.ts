export interface IIntentEnrich {
  topics?: Array<string>;
  signalStartDate?: string;
  signalEndDate?: string;
  signalScoreMin?: number;
  signalScoreMax?: number;
  audienceStrengthMin?: string;
  audienceStrengthMax?: string;
  companyId?: number;
  companyName?: string;
  companyWebsite?: string;
  rpp?: number;
  page?: number;
  sortBy?: string;
  sortOrder?: string;
}

export interface IIntentEnrichResults {
  maxResults: number;
  totalResults: number;
  currentPage: number;
  data: Array<Object>;
}
