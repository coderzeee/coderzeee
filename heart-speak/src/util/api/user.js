import request from '@/util/request'
const appId = '/bc/wxf55ff3b7a98b3b19'

//获取用户列表
export function getUserList(params) {
    return request({
        url: appId +'/BcUser/getUserPageList',
        method: 'get',
        params
    })
}

//删除用户
export function deleteUser(params) {
    return request({
        url: appId +'/BcUser/delete',
        method: 'delete',
        params
    })
}

//修改部门
export function editUserDepartmentId(params) {
    return request({
        url: appId +'/BcUser/editUserDepartmentId',
        method: 'get',
        params
    })
}

//冻结用户
export function updateStatusById(params) {
    return request({
        url: appId +'/BcUser/updateStatusById',
        method: 'post',
        params
    })
}

//获取部门列表
export function getDepartmentList() {
    return request({
        url: appId +'/BcUserDepartment/getBcUserDepartmentList',
        method: 'get'
    })
}

