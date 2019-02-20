// pages/classification/components/proFilter/index.js
import getFn from './function'
import {getAvailableHeight} from "../../../../utils/util";

Component({...{
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    pageLifetimes:{
      show(){
          getAvailableHeight('.proTypeContainer',this).then(msg=>{
              this.setData({
                  getHeight:msg.height+'px'
              })
          })
      }
    }
},...getFn});
