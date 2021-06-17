// axios 发送网络请求
import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';

// 获取文章列表接口
const getArticleList = () => {
    return axios.get('http://rap2api.taobao.org/app/mock/285502/api/v1/articles');
}

export {
    getArticleList
}