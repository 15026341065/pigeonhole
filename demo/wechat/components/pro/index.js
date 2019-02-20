import {ADD_PRO} from "../../utils/shoppingCart";
import bahaviors from '../../mixins/load/load';
import {proList} from "../../api/pro";
// components/pro/index.js
Component({
    behaviors: [bahaviors],
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        http: proList,
        proList:[]
    },
    ready() {
    },
    pageLifetimes: {
        show() {

        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        addPro() {
            ADD_PRO()
        },
        startUp() {
            this.dataLoading().then(msg => {
                const data = msg.rData;
                this.setData({
                    proList:data
                })
            });
        }
    }

});
