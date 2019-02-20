const sortState = ["asc","desc",""]
export default {
    data:{
        selectParentState:"all",
        selectChildrenState:'111',
        proTypeList:[{
            title:'普药',
            children:[{
                title:'葵花药业'
            },{
                title:'双鹤药业'
            },{
                title:'华康药业'
            }]
        },{
            title:'控销',
        }],
        getHeight:'1135rpx'
    },
   methods:{
       selectPrantType({target}){//左边菜单父级选择
           const data = target.dataset;
           this.setData({
               selectParentState:data.index
           })
       },
       selectChildrenType({target}){//左边菜单子级选择
           const data = target.dataset;
           this.setData({
               selectChildrenState:data.index
           })
       }
   }
};