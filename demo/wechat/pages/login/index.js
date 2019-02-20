import {toast} from '../../utils/config'
import {setLoginStore} from "../../utils/util";
import {login} from "../../api/login";

// pages/login/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        accountRem: false, /*记住账号*/
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    radioChange() {
        this.setData({
            accountRem: !this.data.accountRem
        })
    },
    formSubmit({detail}) {
        const data = detail.value;
        if (data.Username === '') {
            toast('请输入手机号/用户名');
        } else if (data.Password === '') {
            toast('请输入密码');
        } else {
            login(data).then(msg=>{
                let state = 'permanent';
                if(!this.data.accountRem) state = 'temporary';
                setLoginStore({
                    sKey:msg.sKey
                },state);
                wx.reLaunch({
                  url: '/pages/index/index'
                })
            })
        }
    }
});
