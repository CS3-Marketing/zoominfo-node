export interface ICorporateHierarchyObject {
  companyId?: string;
  companyName?: string;
  companyWebsite?: string;
}

export interface ICorporateHierarchyEnrich {
  matchCompanyInput: Array<ICorporateHierarchyObject>;
  outputFields: string[];
}

export const outputFields = ['parentage', 'familyTree', 'companyId'];

export interface ICorporateHierarchyEnrichResults {
  success: string;
  data: Object;
}
