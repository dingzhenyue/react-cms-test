/*
 * @Description: 
 * @Author: dzy
 * @Date: 2021-06-11 15:55:34
 * @LastEditTime: 2021-06-17 15:25:42
 * @LastEditors: dzy
 * @Reference: 
 */
import React, { Component } from 'react'
import { Card, Button, Table } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';

const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record, index) => {
            return (
                <div>
                    <Button type="primary" style={{marginRight: 20}} >修改</Button>
                    <Button type="primary" danger >删除</Button>
                </div>
               
            )
        }
      },
  ];
class Article extends Component {
    render() {
        return (
            <Card title="文章列表" extra={<Button>导出excel</Button>} style={{ width: '100%' }}>
                <Table dataSource={dataSource} columns={columns} 
                    pagination={ {total: 100} }
                />;
            </Card>
        )
    }
}

export default Article;