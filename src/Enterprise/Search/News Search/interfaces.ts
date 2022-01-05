export interface INewsSearch {
  rpp?: Number;
  page?: Number;
  categories?: Array<String>;
  url?: Array<String>;
  pageDateMin?: String;
  pageDateMax?: String;
}

export interface INewsSearchResults {
  currentPage: number;
  maxResults: number;
  data: Array<Object>;
}
