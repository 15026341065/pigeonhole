const sortState = ["asc", "desc", ""]
export default {
  data: {
    selectFilterState: 0,
    filterList: [{
      title: '全部',
      path: 'allorder'
    }, {
      title: '待付款',
      path: 'pendingPayment'
    }, {
      title: '支付单',
      path: 'paymentForm'
    }, {
      title: '发货单',
      path: 'invoice'
    }, {
      title: '退货单',
      path: 'returnOrder'
    }],
    pageState: 'allorder'
  },
  defaultSelect() {
      this.data.filterList.map((item,index)=>{
          if(item.path===this.data.pageState){
              this.setData({
                  selectFilterState:index
              })
          }
      });
  },
  selectFilter({
    target
  }) { //条件筛选选择
    const data = target.dataset;
    const info = data.info;
    const index = data.index;
    this.setData({
      selectFilterState: index,
      pageState: info.path
    });
    if (info && info.sort) {
      const {
        nextState
      } = this.examineSroteState(info.sortState);
      const that = `filterList[${index}].sortState`
      this.setData({
        [that]: nextState
      })
    }
  },
  examineSroteState(state) { //查看当前排序状态
    let currentState = "";
    let nextState = "";
    if (!state || state === '') {
      state = "";
    }
    sortState.some((item, index) => {
      if (item === state) {
        currentState = item;
        if (index === sortState.length - 1) index = 0;
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
};