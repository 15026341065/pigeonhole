// pages/shoppingCart/data/index.js
import {selectProNum} from "../../../../utils/filter/shoppingCart";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
      num:0,
      value:1,
      allChecked:false,
      list:[{
          checked:false
      }]
  },
    pageLifetimes:{
      show(){
          this.getListNumbr();
      }
    },
  /**
   * 组件的方法列表
   */
  methods: {
      handleChange({detail}){
          this.setData({
              value: detail.value
          })
      },
      getListNumbr(){
          this.triggerEvent('getNumber',{num:this.data.list})
      },
      radioChange({currentTarget}){//选择宽事件
          const {index,state} = currentTarget.dataset;
          if(state==='all'){
              this.allRadioChange()
          }else{
              const that = `list[${index}].checked`;
              this.setData({
                  [that]:!this.data.list[index].checked
              });
          }
          this.selectProNum(state);
      },
      allRadioChange(){
          this.setData({
              allChecked:!this.data.allChecked
          })
      },
      selectProNum(state){
          let num = 0;
          this.data.list.map(item=>{
              if(item.checked||this.data.allChecked){
                  num++;
              }
          });
          this.setData({
              num:num
          })
      }
  }
})
