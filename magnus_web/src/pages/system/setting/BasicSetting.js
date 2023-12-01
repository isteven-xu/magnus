
import React  from 'react';
import { observer } from 'mobx-react';
import { Form, Popover, Input, Button, message } from 'antd';
import styles from './index.module.css';
import { http } from 'libs';
import store from './store';

export default observer(function () {
  function handleSubmit() {
    const magnus_key = store.settings.magnus_key;
    if (!magnus_key) return message.error('请输入调用凭据');
    store.loading = true;
    http.post('/api/setting/', {data: [{key: 'magnus_key', value: magnus_key}]})
      .then(() => {
        message.success('保存成功');
        store.fetchSettings()
      })
      .finally(() => store.loading = false)
  }

  const magnusWx = <img src="https://cdn.magnus.cc/img/magnus-weixin.jpeg" alt='magnus'/>;
  return (
    <React.Fragment>
      <div className={styles.title}>基本设置</div>
      <div style={{maxWidth: 340}}>
        <Form.Item
          label="调用凭据"
          labelCol={{span: 24}}
          extra={<span>如需要使用Magnus的邮件、微信和MFA等内置服务，请关注公众号
              <span style={{color: '#008dff', cursor: 'pointer'}}>
                  <Popover content={magnusWx}>
                    <span>Magnus</span>
                  </Popover>
              </span>
              在【我的】页面获取调用凭据，否则请留空。</span>}>
          <Input
            value={store.settings.magnus_key}
            onChange={e => store.update('magnus_key', e.target.value)}
            placeholder="请输入Magnus微信公众号获取到的Token"/>
        </Form.Item>
        <Form.Item style={{marginTop: 24}}>
          <Button type="primary" loading={store.loading} onClick={handleSubmit}>保存设置</Button>
        </Form.Item>
      </div>
    </React.Fragment>
  )
})
