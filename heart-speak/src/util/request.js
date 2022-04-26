// const BASE_URL = 'https://wx.nbpt.cn/wxbf'
// const BASE_URL = 'http://192.168.201.204:8088'
import axios from 'axios'

// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env.VUE_APP_BASE_API,
    header: {
        Cookie: "",
        'content-type': 'application/x-www-form-urlencoded',
    },
})

export default service
