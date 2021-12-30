export interface IComplianceParams {
  companyId?: string;
  companyName?: string;
  personFullName?: string;
  personFirstName?: string;
  personLastName?: string;
  personEmailAddress?: string;
  personPhone?: string;
  personState?: string;
  personCountry?: string;
  personZipCode?: string;
}

export interface IComplianceResult {
  success: boolean;
  data: Array<Object>;
}
