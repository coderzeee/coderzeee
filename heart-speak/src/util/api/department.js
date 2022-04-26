import request from '@/util/request'
const appId = '/bc/wxf55ff3b7a98b3b19'

//获取部门信息列表
export function getDepartmentPageList(params) {
    return request({
        url:appId +'/BcUserDepartment/getDepartmentPageList',
        method: 'get',
        params
    })
}

//查询部门信息
export function getBcUserDepartmentList(params) {
    return request({
        url:appId +'/BcUserDepartment/getBcUserDepartmentList',
        method: 'get',
        params
    })
}

//统计每个部门报餐的人数
export function countDinnerByDay(params) {
    return request({
        url:appId +'/BcUserDepartment/countDinnerByDay',
        method: 'get',
        params
    })
}

//删除部门
export function deleteDepartmentById(id) {
    return request({
        url:appId +'/BcUserDepartment/deleteById/' + id,
        method: 'delete'
    })
}

//添加部门
export function saveDeleteDepartment() {
    return request({
        url:appId +'/BcUserDepartment/save',
        method: 'post'
    })
}

//编辑部门名称
export function updateName() {
    return request({
        url:appId +'/BcUserDepartment/updateName',
        method: 'post'
    })
}

