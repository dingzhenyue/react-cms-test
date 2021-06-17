/*
 * @Description: 
 * @Author: dzy
 * @Date: 2021-05-31 17:23:38
 * @LastEditTime: 2021-06-16 15:36:18
 * @LastEditors: dzy
 * @Reference: 
 */
import { privateRoutes } from './routers/index';
import { Route, Switch, Redirect} from 'react-router-dom';
import './App.less';
import FrameOut from './components/frameOut/index';

function App() {
  // 私有路由
  return (
    <FrameOut>
        <Switch>
            {
              privateRoutes.map( item => {
                return (
                  <Route path={item.pathname} component={item.component} key={item.pathname} />
                )
              })
            }

            {/* 配置默认admin和404 */}
            <Redirect from="/admin" to={privateRoutes[0].pathname} exact/>
            <Redirect to="/404" />
        </Switch>
    </FrameOut>

    
  );
}

export default App;
