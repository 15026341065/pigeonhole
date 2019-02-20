import {getUrl} from "./url";
import {storeName} from "./config";

/**
 * @desc:watcherChangeTabbar 当改变tabbar时必须调用
 * @param:that this
*/
export const watcherChangeTabbar = (that) => {
    if (typeof that.getTabBar === 'function' && that.getTabBar()) {
        const getData = that.getTabBar();
        getData.data.watch(getData);
        getData.data.uploadList(getData);
        getData.setData({
            current: '/' + getUrl().route
        })
    }
};

/**
 * @desc:$ 获取dom元素
 * @param:className
 */
export class $ {
    constructor(className,that=null){
        if(that)this.NODE_INFO =  that.createSelectorQuery().select(className);
        else this.NODE_INFO =  wx.createSelectorQuery().select(className);
    }
    get_info(){
        return new Promise((resolve,reject)=>{
            this.NODE_INFO.boundingClientRect(function (res) {
                resolve(res);
            }).exec()
        })

    }
}

/**
 * @desc:getAvailableHeight 基于window 元素可使用高度
 * @param:className
 */
export const getAvailableHeight=(className,that=null)=>{
    const query =  new $(className,that);
    return new Promise((resolve,reject)=>{
        wx.getSystemInfo({
            success(system){
                query.get_info().then(node=>{
                    const getHeight = system.windowHeight-node.top;
                    resolve({
                        height:getHeight,
                        node:node
                    })
                })
            }
        })
    })
};

/**
 * @desc:设置登录缓存
 * @param:obj 缓存内容
 * @param:state 缓存状态  permanent永久缓存  temporary临时缓存
*/
export const setLoginStore=(obj,state='permanent')=>{
    if(state==='permanent'){
        wx.setStorageSync(storeName.loginStoreName, obj);
    }else if (state==='temporary'){
        getApp()[storeName.loginStoreName] = obj;
    }
};

/**
 * @desc:获取登录缓存
*/
export const getLoginStore = () =>{
    if(wx.getStorageSync(storeName.loginStoreName)!=='') return wx.getStorageSync(storeName.loginStoreName);
    else return getApp()[storeName.loginStoreName]
};

/**
 * @desc:判断登录状态
 * @return: true已登录 false未登录
*/
export const loginState =()=>{
    if(getLoginStore()===''||Object.keys(getLoginStore()).length===0) return false;
    return true;
};
