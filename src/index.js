/*
 * @Description: 
 * @Author: dzy
 * @Date: 2021-06-11 15:50:07
 * @LastEditTime: 2021-06-16 15:35:18
 * @LastEditors: dzy
 * @Reference: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 配置中文环境
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';

// 开启路由模式
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { commonRoutes } from './routers/index';

import './css/index.less';

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
      <Router>
        <App />
        {
          commonRoutes.map((item, index) => {
            return (
              <Route key={item.pathname} path={item.pathname} component={item.component} />
            )
          })
        }
      </Router>
    </ConfigProvider>,
  document.getElementById('root')
);