const sortState = ["asc","desc",""]
export default {
    data:{
        selectFilterState:0,
        filterList:[{
            title:'销量'
        },{
            title:'价格',
            sort:true
        },{
            title:'有库存'
        }]
    },
    methods:{
        selectFilter({target}){//条件筛选选择
            const data = target.dataset;
            const info = data.info;
            const index = data.index;
            this.setData({
                selectFilterState:index
            });
            if(info&&info.sort){
                const {nextState} = this.examineSroteState(info.sortState);
                const that  = `filterList[${index}].sortState`
                this.setData({
                    [that]:nextState
                })
            }
        },
        examineSroteState(state){//查看当前排序状态
            let currentState = "";
            let nextState = "";
            if(!state||state===''){
                state = "";
            }
            sortState.some((item,index)=>{
                if(item===state){
                    currentState = item;
                    if(index===sortState.length-1) index=0;
                    else index++;
                    nextState = sortState[index];
                    return true;
                }
            });
            return {
                currentState,
                nextState
            };
        }
    }
};