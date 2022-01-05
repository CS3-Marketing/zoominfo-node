export interface IContactEnrich {
  matchPersonInput?: Array<IContactObject>;
  outputFields?: string[];
}
export interface IContactObject {
  personId?: number;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  phone?: string;
  jobTitle?: string;
  hashedEmail?: string;
  externalURL?: string;
  lastUpdatedDateAfter?: string;
  validDateAfter?: string;
  companyId?: string;
  companyName?: string;
  contactAccuracyScoreMin?: string;
}

export const outputFields = [
  'id',
  'firstName',
  'middleName',
  'lastName',
  'email',
  'hasCanadianEmail',
  'phone',
  'directPhoneDoNotCall',
  'street',
  'city',
  'region',
  'metroArea',
  'zipCode',
  'state',
  'country',
  'personHasMoved',
  'withinEu',
  'withinCalifornia',
  'withinCanada',
  'lastUpdatedDate',
  'noticeProvidedDate',
  'salutation',
  'suffix',
  'jobTitle',
  'jobFunction',
  'companyDivision',
  'education',
  'hashedEmails',
  'picture',
  'mobilePhoneDoNotCall',
  'externalUrls',
  'companyId',
  'companyName',
  'companyDescriptionList',
  'companyPhone',
  'companyFax',
  'companyStreet',
  'companyCity',
  'companyState',
  'companyZipCode',
  'companyCountry',
  'companyLogo',
  'companySicCodes',
  'companyNaicsCodes',
  'contactAccuracyScore',
  'companyWebsite',
  'companyRevenue',
  'companyRevenueNumeric',
  'companyEmployeeCount',
  'companyType',
  'companyTicker',
  'companyRanking',
  'isDefunct',
  'companySocialMediaUrls',
  'companyPrimaryIndustry',
  'companyIndustries',
  'companyRevenueRange',
  'companyEmployeeRange',
  'employmentHistory',
  'managementLevel',
  'locationCompanyId',
];

export interface IContactEnrichResults {
  success: string;
  data: Object;
}
