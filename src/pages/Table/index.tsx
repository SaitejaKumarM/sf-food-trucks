import services from '@/services/table';
import {
  ActionType,
  FooterToolbar,
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { parse } from 'csv-parse/browser/esm/sync';
import React, { useRef, useState } from 'react';
import { columns } from './const';

const { queryDataList } = services.DataController;

/**
 *  删除数据
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.DataInfo[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    // todo 删除逻辑
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

// 转换csv文本为数组对象格式
const formatList = (res: string) => {
  if (!res) return [];
  const records = parse(res, {
    columns: true,
    skip_empty_lines: true,
  });
  return records;
};

const TableList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<API.DataInfo[]>([]);

  return (
    <PageContainer
      header={{
        title: '列表示例',
      }}
    >
      <ProTable<API.DataInfo>
        headerTitle="查询表格"
        actionRef={actionRef}
        rowKey="locationid"
        scroll={{ x: 5000, y: 700 }}
        search={{
          labelWidth: 120,
        }}
        size="small"
        request={async (params) => {
          const data = await queryDataList({
            ...params,
          });
          return {
            data: formatList(data) || [],
            success: true,
          };
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              项&nbsp;&nbsp;
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
        </FooterToolbar>
      )}
    </PageContainer>
  );
};

export default TableList;
