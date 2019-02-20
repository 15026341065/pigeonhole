import {
    imagesPath
} from '../../utils/config.js'
import {watcherChangeTabbar} from "../../utils/util";
import pageLoad from '../../mixins/load/pageLoad'

//index.js
Page({...{
        data: {
            imgUrls: [
                'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1576548921,1624002597&fm=85&s=1E227621D29E05C80CBC37F102001034',
                'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1576548921,1624002597&fm=85&s=1E227621D29E05C80CBC37F102001034',
                'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1576548921,1624002597&fm=85&s=1E227621D29E05C80CBC37F102001034'
            ],
            characteristicLocationContainerList: [{
                img: `${imagesPath}/youxinstatic/img/images/tabbar/ic_home_rukou_1.png`,
                text: '再次购买',
                path:"/pages/myorder/index"
            }, {
                img: `${imagesPath}/youxinstatic/img/images/tabbar/ic_home_rukou_2.png`,
                text: '我的收藏',
                path:"/pages/filterPage/index"
            }, {
                img: `${imagesPath}/youxinstatic/img/images/tabbar/ic_home_rukou_3.png`,
                text: '最近订购',
                path:"/pages/filterPage/index"
            }, {
                img: `${imagesPath}/youxinstatic/img/images/tabbar/ic_home_rukou_4.png`,
                text: '我的订单',
                path:"/pages/myorder/index"
            }],
            indicatorDots: true, //是否有小点
            autoplay: true, //是否轮播
            triggerState:true,
            acceptData:{
                commendId:4
            }
        },

        onLoad: function () {
            console.log(this.data)
        },
        onShow(){
            watcherChangeTabbar(this);
        },
    },...pageLoad});
