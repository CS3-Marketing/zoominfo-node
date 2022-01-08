import CompanySearch from './Company Search';
import ContactSearch from './Contact Search';
import IntentSearch from './Intent Search';
import NewsSearch from './News Search';
import ScoopSearch from './Scoop Search';

/**
 * @class Search
 * @docs https://api-docs.zoominfo.com/#156045a9-6446-4c61-b9fb-706476cfac6a
 */
export default class Search {
  public companySearch: CompanySearch;

  public contactSearch: ContactSearch;

  public intenetSearch: IntentSearch;

  public newsSearch: NewsSearch;

  public scoopSearch: ScoopSearch;

  constructor(accessToken: string) {
    this.companySearch = new CompanySearch(accessToken);
    this.contactSearch = new ContactSearch(accessToken);
    this.intenetSearch = new IntentSearch(accessToken);
    this.newsSearch = new NewsSearch(accessToken);
    this.scoopSearch = new ScoopSearch(accessToken);
  }
}
