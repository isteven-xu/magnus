import React from 'react';
import {observer} from 'mobx-react';
import {TableCard} from 'components';
import store from './store';

@observer
class ComTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ''
        }
    }

    componentDidMount() {
        store.fetchRecords()
    }

    columns = [
        {
            title: '企业id',
            dataIndex: 'company_id'
        },
        {
            title: '企业名称',
            dataIndex: 'company_name',
        },
        {
            title: '社会信用代码',
            dataIndex: 'credit_no'
        },
        {
            title: '省',
            dataIndex: 'province',
        },
        {
            title: '市',
            dataIndex: 'city'
        },
        {
            title: '区',
            dataIndex: 'district'
        },
        {
            title: '行政代码',
            dataIndex: 'district_code'
        },
        {
            title: '地址',
            dataIndex: 'company_address'
        },
        {
            title: '注册号',
            dataIndex: 'company_code'
        },
        {
            title: '组织机构代码',
            dataIndex: 'org_code'
        },
        {
            title: '税务号',
            dataIndex: 'tax_code'
        }, {
            title: '成立日期',
            dataIndex: 'establish_date'
        },
        {
            title: '法人',
            dataIndex: 'legal_person'
        },
        {
            title: '法人头衔',
            dataIndex: 'legal_person_caption'
        },
        {
            title: '登记状态',
            dataIndex: 'company_status'
        },
        {
            title: '企业类型',
            dataIndex: 'company_major_type'
        },
        {
            title: '企业类型标签',
            dataIndex: 'company_type'
        },
        {
            title: '登记机关',
            dataIndex: 'authority'
        }
        ,
        {
            title: '核准日期',
            dataIndex: 'issue_date'
        }
        ,
        {
            title: '营业期始',
            dataIndex: 'operation_startdate'
        }
        ,
        {
            title: '营业期至',
            dataIndex: 'operation_enddate'
        }
        ,
        {
            title: '经营范围',
            dataIndex: 'business_scope'
        }
        ,
        {
            title: '注销日期',
            dataIndex: 'cancel_date'
        }
        ,
        {
            title: '注销原因',
            dataIndex: 'cancel_reason'
        }
        ,
        {
            title: '吊销日期',
            dataIndex: 'revoke_date'
        }
        ,
        {
            title: '吊销原因',
            dataIndex: 'revoke_reason'
        }
        ,
        {
            title: '注册资本币种',
            dataIndex: 'capital_currency'
        }
        ,
        {
            title: '注册资本',
            dataIndex: 'capital'
        }
        ,
        {
            title: '实缴资本',
            dataIndex: 'real_capital'
        }
        ,
        {
            title: '注册资本（人民币）',
            dataIndex: 'capital_exchange_cny'
        }
        ,
        {
            title: '实缴资本（人民币）',
            dataIndex: 'real_capital_exchange_cny'
        }
        ,
        {
            title: '英文名称',
            dataIndex: 'en_name'
        }
        ,
        {
            title: '上市代码',
            dataIndex: 'list_code'
        }
        ,
        {
            title: '上市状态',
            dataIndex: 'stock_status'
        }
        ,
        {
            title: '是否国企',
            dataIndex: 'is_state_owned'
        }
        ,
        {
            title: '是否小微企业',
            dataIndex: 'is_sme'
        }
        ,
        {
            title: '企业规模',
            dataIndex: 'scale_type'
        }
        ,
        {
            title: '纳税人类型',
            dataIndex: 'tax_type'
        }
        ,
        {
            title: '法人类型',
            dataIndex: 'legal_person_type'
        }
        ,
        {
            title: '法人id',
            dataIndex: 'legal_person_id'
        }
        ,
        {
            title: '经纬度',
            dataIndex: 'location'
        }
        ,
        {
            title: '入库时间',
            dataIndex: 'create_time'
        }
        ,
        {
            title: '更新时间',
            dataIndex: 'update_time'
        }
        ,
        {
            title: 'ods表id',
            dataIndex: 'id'
        }
        ,
        {
            title: '行业一级',
            dataIndex: 'industry_l1_name'
        }
        ,
        {
            title: '行业二级',
            dataIndex: 'industry_l2_name'
        }
        ,
        {
            title: '行业三级',
            dataIndex: 'industry_l3name'
        }
        ,
        {
            title: '行业四级',
            dataIndex: 'industry_l4_name'
        },
        {
            title: '行业四级代码',
            dataIndex: 'industry_l4_code'
        }
    ];

    render() {
        return (
            <TableCard
                tKey="sl"
                rowKey="company_id"
                title="基本信息"
                loading={store.isFetching}
                dataSource={store.dataSource}
                onReload={store.fetchRecords}
                scroll={{x: 20000}}
                pagination={{
                    showSizeChanger: true,
                    showLessItems: true,
                    showTotal: total => `共 ${total} 条`,
                    pageSizeOptions: ['10', '20', '50', '100']
                }}
                columns={this.columns}/>
        )
    }
}

export default ComTable
