export interface IIntentEnrich {
  companyWebsite?: string;
  companyId?: string;
  companyName?: string;
  topics?: string;
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

export interface IIntentEnrichResults {
  maxResults: number;
  totalResults: number;
  currentPage: number;
  data: Array<Object>;
}
