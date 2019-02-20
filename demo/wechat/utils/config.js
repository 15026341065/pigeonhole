/**
 *desc: 导航条配置
 *params:route 路由路径
 *params:title 导航显示名称
 *params:icon 导航图标
 *params:currentIcon 选择后的导航图片
 *params:dot 是否有红点 默认false
 *params:watch 监听的值
 *params:count 徽章数字 type:number
 */
export const imagesPath = 'http://192.168.1.40:8889/';
export const tabbarList = [{
    route: '/pages/index/index',
    img: `${imagesPath}/youxinstatic/img/images/tabbar/ic_tab_home_n.png`,
    currentImg: `${imagesPath}/youxinstatic/img/images/tabbar/ic_tab_home_p.png`,
}, {
    route: '/pages/classification/index',
    img: `${imagesPath}/youxinstatic/img/images/tabbar/ic_tab_category_n.png`,
    currentImg: `${imagesPath}/youxinstatic/img/images/tabbar/ic_tab_category_p.png`,
}, {
    route: '/pages/shoppingCart/index',
    img: `${imagesPath}/youxinstatic/img/images/tabbar/ic_tab_trolley_n.png`,
    currentImg: `${imagesPath}/youxinstatic/img/images/tabbar/ic_tab_trolley_p.png`,
    watch: 'count',
    count: 0
}, {
    route: '/pages/classification/index2',
    img: `${imagesPath}/youxinstatic/img/images/tabbar/ic_tab_my_n.png`,
    currentImg: `${imagesPath}/youxinstatic/img/images/tabbar/ic_tab_my_p.png`,
}];
export const storeName = {
  loginStoreName:'wx'
};
export const httpConfig = {
    loginPath:'/pages/login/index',
    basicsPath: 'http://zyxp.yaolb.cn/mobileApi/api.php',
    successText: 'rStatus',
    successCode: 100,
    toast: 'error'
};

export const loading = (state = true) => {
    if (state) {
        wx.showLoading({
            title: '加载中',
            mask: true
        });
    } else {
        wx.hideLoading();
    }
};

/**
 * @desc: 提示框
 * @param:msg 提示内容
 * @param:icon 提示图标
 */
export const toast = (msg, icon = 'none') => {
    wx.showToast({
        title: msg,
        icon: icon,
        duration: 3000
    });
};
