import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import './index.less';
import { privateRoutes } from '../../routers/index.js'
import { withRouter } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// 只显示一级菜单
var topMenus = privateRoutes.filter(item => item.isTop);

class FrameOut extends Component {
    menusHandler = ({ item, key, keyPath, domEvent }) => {
        this.props.history.push( key );
    }
    render() {
        return (
            <Layout style={{minHeight: '100%'}}>
                <Header className="header">
                    <div className="logo" />
                    <h2>CMS管理系统</h2>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={['/admin/Article']}
                        style={{ height: '100%', borderRight: 0 }}
                        onClick={this.menusHandler}
                        >
                            {
                                topMenus.map(item => {
                                    return (
                                        <Menu.Item key={item.pathname} icon={item.icon} >{item.title}</Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '24px' }}>
                        <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                        >
                        {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(FrameOut)