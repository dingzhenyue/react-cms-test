/*
 * @Description: 
 * @Author: dzy
 * @Date: 2021-06-11 15:55:34
 * @LastEditTime: 2021-06-17 18:05:12
 * @LastEditors: dzy
 * @Reference: 
 */
import React, { Component } from 'react'
import { Card, Button, Table } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import { getArticleList } from '../../api/index'; 

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
const mapFieldToChine = {
  id: 'id',
  title: '标题',
  author: '发布者',
  amount: '浏览次数',
  createDate: '发布日期',
  images: '图片'
}
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dataSource: [],
          columns: [],
          total: 0,
        }
    }
    componentDidMount() {
      getArticleList().then(res => {
        let data = res.data.result.data;
        // data.map(item => {
        //   item.createDate = new Date(item.createDate * 1000);
        // });
        let first = data[0];
        let keys = Object.keys(first);
        let columns = keys.map(item => {
          
            return {
              title: mapFieldToChine[item],
              dataIndex: item,
              key: item,
            }
        });
        this.setState(
          {
            dataSource: data,
            columns: columns,
            total: res.data.result.total,
          }
        )
        
      }).catch(err => {
          console.log(err);
      });
    }
    render() {
        return (
            <Card title="文章列表" extra={<Button>导出excel</Button>} style={{ width: '100%' }}>
                <Table dataSource={this.state.dataSource} columns={this.state.columns} 
                    pagination={ {total: 100} }
                />;
            </Card>
        )
    }
}

export default Article;