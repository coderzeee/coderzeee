import request from '@/util/request'
const appId = '/bc/wxf55ff3b7a98b3b19'

//获取报餐记录
export function getBcRecordList(params) {
    return request({
        url:appId +'/BcRecord/getBcRecordList',
        method: 'get',
        params
    })
}

//获取报餐统计
export function countBcRecordPageList(params) {
    return request({
        url:appId +'/BcRecord/countBcRecordPageList',
        method: 'get',
        params
    })
}

//获取报餐统计
export function exportCount(params) {
    return request({
        url:appId +'/BcRecord/exportCount',
        method: 'post',
        params
    })
}



