export interface ICompanyMasterDataEnrich {
  matchCompanyInput: Array<ICompanyObject>;
  outputFields: string[];
}

export interface ICompanyObject {
  zi_c_location_id?: string;
  zi_es_ecid?: number;
  zi_es_location_id?: string;
  zi_c_url?: string;
  zi_c_name?: string;
  phone?: {
    zi_c_country?: string;
    zi_c_phone?: string;
  };
  address?: {
    zi_c_street?: string;
    zi_c_city?: string;
    zi_c_state?: string;
    zi_c_zip?: string;
    zi_c_country?: string;
  };
  email?: string;
  match_reasons?: Array<Object>;
}

export const outputFields = [
  'zi_c_location_id',
  'zi_es_ecid',
  'zi_es_location_id',
  'zi_c_is_hq',
  'zi_c_tier_grade',
  'zi_c_name',
  'zi_c_name_display',
  'zi_c_legal_entity_type',
  'zi_c_url',
  'zi_c_street',
  'zi_c_street_2',
  'zi_c_city',
  'zi_c_state',
  'zi_c_zip',
  'zi_c_country',
];

export interface ICompanyMasterDataEnrichResults {
  success: string;
  data: {result: []};
}
