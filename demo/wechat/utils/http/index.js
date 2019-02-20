import {httpConfig, loading, toast} from "../config";
import {getLoginStore, loginState} from "../util";

const http = (url, method, f = '', v = {}) => {
    loading();
    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            method: 'post',
            data: {
                f: f,
                v: JSON.stringify(v)
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            success: res => {
                loading(false);
                const data = res.data;
                if (data[httpConfig.successText] === httpConfig.successCode) {
                    resolve(data);
                } else {
                    reject(data);
                    toast(`${data[httpConfig.toast]}`);
                }
            },
            fail: res => {
                loading(false);
                toast('请求失败');
                reject(false)
            }
        })
    });
};
/**
 * @desc:权限验证
*/
const permission = (method,f,v) => {
    if(loginState()){
        return http(httpConfig.basicsPath, method, f, mergeStore(v))
    }else{
        wx.reLaunch({
          url: httpConfig.loginPath
        });
        return Promise.reject('permission');
    }
};

const mergeStore = (data) =>{
    return Object.assign({},data,getLoginStore())
};

export const get = (f, v) => {
   return  permission('get',f,v);
};

export const post = (f, v) => {
    return  permission('post',f,v);
};

export const noGet = (f, v) =>{
    return http(httpConfig.basicsPath, 'get', f, v)
};

export  const noPost = (f, v) =>{
    return http(httpConfig.basicsPath, 'post', f, v)
};
