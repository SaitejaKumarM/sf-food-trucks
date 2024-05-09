/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！

declare namespace API {
  interface PageInfo {
    /** 
1 */
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<Record<string, any>>;
  }

  interface PageInfo_DataInfo_ {
    /** 
1 */
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<DataInfo>;
  }

  interface Result {
    success?: boolean;
    errorMessage?: string;
    data?: Record<string, any>;
  }

  interface Result_PageInfo_DataInfo__ {
    success?: boolean;
    errorMessage?: string;
    data?: PageInfo_DataInfo_;
  }

  interface Result_DataInfo_ {
    success?: boolean;
    errorMessage?: string;
    data?: DataInfo;
  }

  interface Result_string_ {
    success?: boolean;
    errorMessage?: string;
    data?: string;
  }

  interface DataInfo {
    locationid: string;
    applicant: string;
    facilityType: string;
    cnn: string;
    locationDescription: string;
    address: string;
    blocklot: string;
    block: string;
    lot: string;
    permit: string;
    status: string;
    foodItems: string;
    x: string;
    y: string;
    latitude: string;
    longitude: string;
    schedule: string;
    dayshours: string;
    nOISent: string;
    approved: string;
    received: string;
    priorPermit: string;
    expirationDate: string;
    location: string;
    firePreventionDistricts: string;
    policeDistricts: string;
    supervisorDistricts: string;
    zipCodes: string;
    Neighborhoods(old): string;
  }
}
