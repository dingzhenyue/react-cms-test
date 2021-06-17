
/*将所有页面导出，其他地方只需按需引入*/
// import Article from './Article';
// import Login from './Login';
// import NotFound from './NotFound';
// import Setting from './Setting';
// import Dashboard from './Dashboard';

// 路由懒加载
import Loadable from 'react-loadable';
import Loading from '../components/Loading/index';
 
const Article = Loadable({
    loader: () => import('./Article'),
    loading: Loading,
});
const Dashboard = Loadable({
    loader: () => import('./Dashboard'),
    loading: Loading,
});const Setting = Loadable({
    loader: () => import('./Setting'),
    loading: Loading,
});const Login = Loadable({
    loader: () => import('./Login'),
    loading: Loading,
});const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading: Loading,
});
export {
    Article,
    Dashboard,
    Setting,
    Login,
    NotFound
}