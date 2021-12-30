export interface INewsSearch {
  rpp?: number;
  page?: number;
  categories?: Array<string>;
  url?: Array<string>;
  pageDateMin?: string;
  pageDateMax?: string;
}

export interface INewsSearchResults {
  currentPage: number;
  maxResults: number;
  data: Array<Object>;
}
