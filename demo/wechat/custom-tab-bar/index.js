import {
    tabbarList,
    tabbarHistoryList
} from '../utils/config.js'
import setWatcher from '../utils/watch.js'
Component({
    data: {
        list: tabbarList,
        current: tabbarList[0].route,
        watch(that){
            tabbarList.map((item, index) => {
                if (item.watch) {
                    setWatcher(tabbarList[index], {//事件监听
                        [item.watch](to) {
                            const up = "list[" + index + "]." + item.watch + "";
                            that.setData({
                                [up]: to
                            });
                        }
                    })
                }
            })
        },
        uploadList(that){
            tabbarList.map((item, index) => {
                if (item.watch) {
                    const up = "list[" + index + "]." + item.watch + "";
                    that.setData({
                        [up]: item.count
                    });
                }
            })
        }
    },
    ready() {

    },
    methods: {
        switchTab({detail}) {
            wx.switchTab({
                url: detail.key
            });
            this.setData({
                current: detail.key
            });
        }
    }
});
