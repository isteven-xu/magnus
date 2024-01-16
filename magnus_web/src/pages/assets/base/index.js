
import React from 'react';
import { observer } from 'mobx-react';
import { SyncOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { SearchForm, AuthDiv, Breadcrumb } from 'components';
import ComTable from './Table';
import store from './store';

export default observer(function () {
  return (
    <AuthDiv auth="assets.logo.view">
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>数据资产</Breadcrumb.Item>
        <Breadcrumb.Item>企业基本信息</Breadcrumb.Item>
      </Breadcrumb>
      <SearchForm>
        <SearchForm.Item span={8} title="企业名称">
          <Input allowClear value={store.f_name} onChange={e => store.f_name = e.target.value} placeholder="请输入"/>
        </SearchForm.Item>
        <SearchForm.Item span={8}>
          <Button type="primary" icon={<SyncOutlined/>} onClick={store.fetchRecords}>查询</Button>
        </SearchForm.Item>
      </SearchForm>
      <ComTable/>
    </AuthDiv>
  )
})
