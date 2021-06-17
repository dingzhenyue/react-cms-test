/*
 * @Description: 
 * @Author: dzy
 * @Date: 2021-06-11 16:18:29
 * @LastEditTime: 2021-06-17 14:39:45
 * @LastEditors: dzy
 * @Reference: 
 */
import {
    Article,
    Dashboard,
    Setting,
    Login,
    NotFound
} from '../views/index.js';
import { SettingFilled, FileTextOutlined, HomeOutlined } from '@ant-design/icons';

const commonRoutes = [
    {
        pathname: '/login',
        component: Login
    },
    {
        pathname: '/404',
        component: NotFound
    }
];
// 加一个前缀
const privateRoutes = [
    {
        pathname: '/admin/Article',
        component: Article,
        title: '文章管理',
        icon: <FileTextOutlined />,
        isTop: true, // 是否是一级菜单
    },
    {
        pathname: '/admin/Dashboard',
        component: Dashboard,
        title: '仪表盘',
        icon: <HomeOutlined />,
        isTop: true, // 是否是一级菜单
    },
    {
        pathname: '/admin/Setting',
        component: Setting,
        title: '系统设置',
        icon: <SettingFilled />,
        isTop: true, // 是否是一级菜单
    }
];

export {
    commonRoutes,
    privateRoutes
}