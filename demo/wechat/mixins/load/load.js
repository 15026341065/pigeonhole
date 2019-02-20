export  default  Behavior({
    /**
     * 组件的属性列表
     */
    properties: {
        pageSize: {//请求页数
            type: Number,
            value: 10
        },
        acceptData:{
            type:Object,
            value:{}
        },
        triggerState:{
            type: Boolean,
            value: false,
            observer(){
                this.startUp();
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        http: '',
        currentPage: 0,//当前页数
        LoadingState: true,
        listData: {
            commendId: '',
            orderBy: '',
            brandId: '',
            kw: '',
            stock: ''
        }
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
        startUp(){
            this.dataLoading();
        },
        dataLoading(){
            return new Promise((resolve, reject) => {
                if (this.data.LoadingState) {
                    this.chageLoadingState(false);
                    this.data.http({...{
                        begin: this.data.currentPage,
                        step: this.data.pageSize,
                    },...this.data.acceptData}).then(msg => {
                        this.chageLoadingState(true);
                        const allPageSizes = Math.floor(msg.rAllTotal/this.data.pageSize);
                        if(allPageSizes===this.data.currentPage){
                            this.chageLoadingState(false);
                        }
                        this.setData({
                            currentPage: this.data.currentPage++
                        });
                        resolve(msg);
                    }).catch(() => {
                        reject(false);
                        this.chageLoadingState(true);
                    });
                }
            })
        },
        chageLoadingState(boolean) {
            this.setData({
                LoadingState: boolean
            });
        }
    }

});
