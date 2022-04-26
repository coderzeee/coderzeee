import request from '@/util/request'
const appId = '/bc/wxf55ff3b7a98b3b19'

//获取配置信息
export function getConfig() {
    return request({
        url:appId +'/config/getConfig',
        method: 'get'
    })
}

//系统设置
export function saveConfig() {
    return request({
        url:appId +'/config/saveOrUpdate',
        method: 'post'
    })
}
