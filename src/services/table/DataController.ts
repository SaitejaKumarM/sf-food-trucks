/* eslint-disable */
import { request } from '@umijs/max';

/** GET https://data.sfgov.org/api/views/rqzj-sfat/rows.csv */
export async function queryDataList(
  params: {
    // query
    /** keyword */
    keyword?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_DataInfo__>(
    'https://data.sfgov.org/api/views/rqzj-sfat/rows.csv',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
