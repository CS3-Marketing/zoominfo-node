import CompanyEnrich from './Company Enrich';
import CompanyLocationEnrich from './Company Location Enrich';
import CompanyMasterDataEnrich from './Company Master Data Enrich';
import ContactEnrich from './Contact Enrich';
import CorporateHiearchyEnrich from './Corporate Hierarchy Enrich';
import HashtagsEnrich from './Hashtags Enrich';
import IntentEnrich from './Intent Enrich';
import NewsEnrich from './News Enrich/NewsEnrich';
import OrgChartEnrich from './OrgChart Enrich';
import ScoopEnrich from './Scoop Enrich';
import TechnologyEnrich from './Technology Enrich';

/**
 * @class Enrich
 */
export default class Enrich {
  public companyEnrich: CompanyEnrich;

  public companyLocationEnrich: CompanyLocationEnrich;

  public companyMasterDataEnrich: CompanyMasterDataEnrich;

  public contactEnrich: ContactEnrich;

  public corporateHiearchyEnrich: CorporateHiearchyEnrich;

  public hashtagsEnrich: HashtagsEnrich;

  public intentEnrich: IntentEnrich;

  public newsEnrich: NewsEnrich;

  public orgChartEnrich: OrgChartEnrich;

  public scoopEnrich: ScoopEnrich;

  public technologyEnrich: TechnologyEnrich;

  constructor(accessToken: string) {
    this.companyEnrich = new CompanyEnrich(accessToken);
    this.companyLocationEnrich = new CompanyLocationEnrich(accessToken);
    this.companyMasterDataEnrich = new CompanyMasterDataEnrich(accessToken);
    this.contactEnrich = new ContactEnrich(accessToken);
    this.corporateHiearchyEnrich = new CorporateHiearchyEnrich(accessToken);
    this.hashtagsEnrich = new HashtagsEnrich(accessToken);
    this.intentEnrich = new IntentEnrich(accessToken);
    this.newsEnrich = new NewsEnrich(accessToken);
    this.orgChartEnrich = new OrgChartEnrich(accessToken);
    this.scoopEnrich = new ScoopEnrich(accessToken);
    this.technologyEnrich = new TechnologyEnrich(accessToken);
  }
}
